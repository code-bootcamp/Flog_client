import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TripWritePlansUI from "./TripWritePlans.presenter";
import {
  CREATE_DETAIL_SCHEDULE,
  DELETE_DETAIL_SCHEDULE,
  FETCH_DETAIL_SCHEDULE,
  FETCH_SCHEDULE,
} from "./TripWritePlans.queries";

export default function TripWritePlans() {
  const router = useRouter();
  const client = useApolloClient();
  const [isLoading, setIsLoading] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [tripTotalDays, setTripTotalDays] = useState(0);
  const [tripTitleData, setTripTitleData] = useState({});
  const [tripTitleDataArray, setTripTitleDataArray] = useState([]);
  const [originList, setOriginList] = useState([[]]);
  const [plansList, setPlansList] = useState([[]]);
  const [endDropIndex, setEndDropIndex] = useState("");
  const { data: dataSchedule } = useQuery(FETCH_SCHEDULE, {
    variables: {
      scheduleId: router.query.scheduleId,
    },
  });
  const [deleteDetailSchedule] = useMutation(DELETE_DETAIL_SCHEDULE);
  const [createDetailSchedule] = useMutation(CREATE_DETAIL_SCHEDULE);

  useEffect(() => {
    setTripTotalDays(dataSchedule?.fetchSchedule.tripdates.split(";").length);
    setTripTitleData(dataSchedule?.fetchSchedule);
  }, [dataSchedule]);

  const getTripTitleData = () => {
    const resultArr: any = [];
    if (tripTotalDays) {
      new Array(tripTotalDays).fill(0).forEach((_) => {
        resultArr.push(tripTitleData);
      });
    }
    setTripTitleDataArray(resultArr);
  };

  const sortTripData = async () => {
    const TotalResult = await Promise.all(
      new Array(tripTotalDays).fill(0).map(async (el, index) => {
        const result = await client.query({
          query: FETCH_DETAIL_SCHEDULE,
          variables: {
            day: String(index + 1),
            scheduleId: router.query.scheduleId,
          },
        });
        return result.data?.fetchDetailSchedule;
      })
    );
    setOriginList(TotalResult);
    setPlansList(TotalResult);
  };
  useEffect(() => {
    setTimeout(function () {
      setIsDataLoading((prev) => !prev);
    }, 300);
  }, []);

  useEffect(() => {
    getTripTitleData();
    sortTripData();
  }, [isDataLoading]);
  useEffect(() => {
    setIsLoading(true);
  }, []);

  const onDragEndReorder = (result: any) => {
    if (!result.destination) return;
    const currentPlansList = [...plansList];
    const startDropIndex = result.source.droppableId;
    const endDropIndex = result.destination.droppableId;
    const startDragIndex = result.source.index;
    const endDragIndex = result.destination.index;
    setEndDropIndex(endDropIndex);

    if (startDropIndex === endDropIndex) {
      const currentPlans = currentPlansList[Number(startDropIndex)];
      const removePlan = currentPlans.filter(
        (el, index) => index === startDragIndex
      );
      const restPlans = currentPlans.filter(
        (el, index) => index !== startDragIndex
      );
      const newPlan: any = [];
      if (endDragIndex === restPlans.length) {
        const tempArr = restPlans.concat(restPlans[restPlans.length - 1]);
        tempArr.forEach((el, index) => {
          if (index < endDragIndex) {
            newPlan.push(el);
          }
          if (index === endDragIndex) {
            const temp = [removePlan[0]];
            newPlan.push(...temp);
          }
          if (index > endDragIndex) {
            newPlan.push(el);
          }
        });
      } else {
        restPlans.forEach((el, index) => {
          if (index < endDragIndex) {
            newPlan.push(el);
          }
          if (index === endDragIndex) {
            const temp = [removePlan[0], el];
            newPlan.push(...temp);
          }
          if (index > endDragIndex) {
            newPlan.push(el);
          }
        });
      }
      const tempList = currentPlansList;
      tempList[Number(startDropIndex)] = newPlan;
      setPlansList(tempList);
    }
    if (startDropIndex !== endDropIndex) {
      const startPlans = currentPlansList[Number(startDropIndex)];
      const endPlans = currentPlansList[Number(endDropIndex)];
      const newPlan: any = [];
      // const removePlan = startPlans.splice(startDragIndex, 1);
      const removePlan = startPlans.filter(
        (el, index) => index === startDragIndex
      );
      const restStartPlans = startPlans.filter(
        (el, index) => index !== startDragIndex
      );
      if (endDragIndex === endPlans.length) {
        const tempArr = endPlans.concat(endPlans[endPlans.length - 1]);
        tempArr.forEach((el, index) => {
          if (index < endDragIndex) {
            newPlan.push(el);
          }
          if (index === endDragIndex) {
            const temp = [removePlan[0]];
            newPlan.push(...temp);
          }
          if (index > endDragIndex) {
            newPlan.push(el);
          }
        });
      } else {
        endPlans.forEach((el, index) => {
          if (index < endDragIndex) {
            newPlan.push(el);
          }
          if (index === endDragIndex) {
            const temp = [removePlan[0], el];
            newPlan.push(...temp);
          }
          if (index > endDragIndex) {
            newPlan.push(el);
          }
        });
      }
      const tempList = currentPlansList;
      tempList[Number(startDropIndex)] = restStartPlans;
      tempList[Number(endDropIndex)] = newPlan;
      setPlansList(tempList);
    }
  };

  const submitDetailSchedule = () => {
    alert("test alert");
    const currentList = [...plansList];
    const startList = [...originList];
    const startIds = [[], [], [], []];
    const currentIds = [[], [], [], []];
    const targetIds = [];

    // 두 배열의 id값만 뽑아서 push
    const makeIdsList = () => {
      startList.forEach((startEl, startIndex) => {
        startEl.forEach((startEl2, startIndex2) => {
          startIds[startIndex].push(startEl2.id);
        });
      });
      currentList.forEach((currentEl, currentIndex) => {
        currentEl.forEach((currenEl2, curerntIndex2) => {
          currentIds[currentIndex].push(
            currentList[currentIndex][curerntIndex2]?.id
          );
        });
      });
    };
    makeIdsList();

    // 두 배열을 비교해서 current에 없는 객체 제거
    const deleteMovedItem = () => {
      currentIds.forEach((el, index) => {
        el.forEach((el2, index2) => {
          startIds.forEach(async (startEl, startIndex) => {
            if (index === startIndex) {
              if (!startEl.includes(el2) && el2 !== undefined) {
                try {
                  await deleteDetailSchedule({
                    variables: {
                      detailScheduleId: el2,
                    },
                  });
                } catch (error) {
                  console.log(error);
                }
              }
            }
          });
        });
      });
    };
    deleteMovedItem();

    // 두 배열을 비교해서 current에 있지만 start에는 없는 객체 제거
    const createMovedItem = () => {
      console.log("startIds is", startIds);
      console.log("currentIds is", currentIds);
      startIds.forEach((el, index) => {
        el.forEach((el2, index2) => {
          currentIds.forEach((currentEl, currentIndex) => {
            if (index === currentIndex) {
              if (!currentEl.includes(el2) && el2 !== undefined) {
                targetIds.push({
                  day: String(Number(endDropIndex) + 1),
                  id: el2,
                });
              }
            }
          });
        });
      });

      const creatMovedCard = () => {
        console.log("creaMovedCard 함수 안에서 보는 targetIds is", targetIds);
        const targetData = [];

        currentList.forEach((el, index) => {
          el.forEach((el2, index2) => {
            targetIds.forEach((targetEl, targetIndex) => {
              if (targetEl.id.includes(el2.id)) {
                targetData.push(el2);
              }
            });
          });
        });

        targetData.forEach(async (el, index) => {
          try {
            await createDetailSchedule({
              variables: {
                createDetailScheduleInput: {
                  day: targetIds[index].day,
                  date: dataSchedule?.fetchSchedule.tripdates.split(";")[
                    Number(targetIds[index].day) - 1
                  ],
                  startTime: el.startTime,
                  useTime: el.useTime,
                  place: el.place,
                  memo: el.memo,
                },
                scheduleId: router.query.scheduleId,
              },
            });
          } catch (error) {
            console.log(error);
          }
        });
      };
      creatMovedCard();
    };
    createMovedItem();
  };

  return (
    // <></>
    <TripWritePlansUI
      tripTitleDataArray={tripTitleDataArray}
      onDragEndReorder={onDragEndReorder}
      isLoading={isLoading}
      plansList={plansList}
      submitDetailSchedule={submitDetailSchedule}
    />
  );
}
