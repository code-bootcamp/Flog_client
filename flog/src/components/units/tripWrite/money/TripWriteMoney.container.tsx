import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TripWriteMoneyUI from "./TripWriteMoney.presenter";
import {
  CREATE_BUDGET,
  CREATE_MONEYBOOK,
  FETCH_BUDGET,
  FETCH_MONEY_BOOK,
  FETCH_SCHEDULE,
  UPDATE_BUDGET,
  UPDATE_MONEYBOOK,
} from "./TripWriteMoney.queries";

export default function TripWriteMoney() {
  const router = useRouter();
  const client = useApolloClient();
  const [isLoading, setIsLoading] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [isDataLoading2, setIsDataLoading2] = useState(false);
  const [viewport, setViewport] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [dailyAmount, setDailyAmount] = useState(0);
  const [sumAmount, setSumAmount] = useState(0);
  const [moneyList, setMoneyList] = useState([{ date: "", contents: [] }]);
  const [originList, setOriginList] = useState([{ date: "", contents: [] }]);
  const [clickDate, setClickDate] = useState("");
  const [budgetId, setBudgetId] = useState("");
  const [tripDates, setTripDates] = useState(["ready"]);
  const [tripTotalDays, setTripTotalDays] = useState(0);
  const [totalBudgetModal, setTotalBudgetModal] = useState(false);
  const [totalBudget, setTotalBudget] = useState(0);
  const [budgetSelect, setBudgetSelect] = useState(true);
  const [mutationTripdates, setMutationTripdates] = useState("");
  const [endDropIndex, setEndDropIndex] = useState("");
  const [alertModal, setAlertModal] = useState(false);
  const [modalContents, setModalContents] = useState("");
  const { data: dataBudget } = useQuery(FETCH_BUDGET, {
    variables: {
      scheduleId: router.query.scheduleId,
    },
  });
  const { data: dataSchedule } = useQuery(FETCH_SCHEDULE, {
    variables: {
      scheduleId: router.query.scheduleId,
    },
  });
  const [createBudget] = useMutation(CREATE_BUDGET);
  const [updateBudget] = useMutation(UPDATE_BUDGET);
  const [createMoneyBook] = useMutation(CREATE_MONEYBOOK);
  const [updateMoneyBook] = useMutation(UPDATE_MONEYBOOK);

  useEffect(() => {
    const viewportWidth = window.visualViewport.width;
    setViewport(viewportWidth);
  }, []);

  useEffect(() => {
    if (dataSchedule) {
      const dateArray = dataSchedule?.fetchSchedule?.tripdates.split(";");
      setMutationTripdates(dataSchedule?.fetchSchedule?.tripdates);
      const temp = ["ready"].concat(dateArray);
      setTripDates(temp);
      setTripTotalDays(dateArray.length);
    }
  }, [dataSchedule]);

  useEffect(() => {
    if (dataBudget && dataBudget.fetchBudget.length === 0) {
      console.log("=====================================");
      console.log("해당 유저 정보에 Budget이 존재하지 않습니다.");
      const createBudgetFunction = async () => {
        try {
          const result = await createBudget({
            variables: {
              totalAmount: 0,
              scheduleId: router.query.scheduleId,
            },
          });
          console.log("신규 Budget 생성 완료");
          console.log("=====================================");
          setBudgetId(result.data.createBudget.id);
          setTotalAmount(result.data.createBudget.totalAmount);
        } catch (error) {
          setModalContents(error.message);
          setAlertModal(true);
        }
      };
      createBudgetFunction();
    }
    if (dataBudget && dataBudget.fetchBudget.length >= 1) {
      console.log("=====================================");
      console.log("해당 유저의 Budget을 불러옵니다.");
      console.log("=====================================");
      setBudgetId(dataBudget.fetchBudget[0].id);
      setTotalAmount(dataBudget.fetchBudget[0].totalAmount);
    }
  }, [dataBudget]);

  const onClickTotalBudgetModal = () => {
    setTotalBudgetModal(true);
  };

  const onClickExitTotalBudgetModal = () => {
    setTotalBudgetModal(false);
  };

  const onChangeTotalBudget = (event) => {
    setTotalBudget(event.target.value);
    setBudgetSelect(false);
  };

  const onClickSubmitTotalBudgetModal = async () => {
    try {
      const result = await updateBudget({
        variables: {
          totalAmount: Number(totalBudget),
          scheduleId: router.query.scheduleId,
        },
      });
      setTotalAmount(result.data.updateBudget.totalAmount);
    } catch (error) {
      setModalContents(error.message);
      setAlertModal(true);
    }
    setTotalBudgetModal(false);
  };

  const sortMoneyBooks = async () => {
    const TotalMoneyBook = await Promise.all(
      new Array(tripTotalDays + 1).fill(0).map(async (el, index) => {
        const result = await client.query({
          query: FETCH_MONEY_BOOK,
          variables: {
            date: tripDates[index],
            budgetId: budgetId,
          },
        });
        return result.data?.fetchMoneyBook;
      })
    );
    const resultArray = [];
    TotalMoneyBook.forEach((el, index) => {
      resultArray.push({
        date: tripDates[index],
        contents: el,
      });
    });
    setOriginList(TotalMoneyBook);
    setMoneyList(resultArray);
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(function () {
      setIsDataLoading((prev) => !prev);
    }, 300);
    setTimeout(function () {
      setIsDataLoading2((prev) => !prev);
    }, 600);
  }, []);

  const sumDailyAmount = () => {
    let resultArr = [];
    for (let i = 0; i < moneyList.length; i++) {
      const moneyListContents = moneyList[i].contents;
      const moneyAmount = moneyListContents.map((el) => el.amount);
      if (moneyAmount.length === 0) {
        resultArr.push(0);
      }
      if (moneyAmount.length > 0) {
        const result = moneyAmount.reduce((acc, cur) => {
          return acc + cur;
        });
        resultArr.push(result);
      }
    }
    let resultSum = 0;
    resultArr.forEach((el) => {
      if (el === undefined) {
        resultSum += 0;
      } else {
        resultSum += el;
      }
    });
    setSumAmount(resultSum);
    return resultArr;
  };

  useEffect(() => {
    sortMoneyBooks();
  }, [isDataLoading]);

  useEffect(() => {
    const daily = sumDailyAmount();
    setDailyAmount(daily);
  }, [isDataLoading2]);

  const onDragEndReorder = (result) => {
    if (!result.destination) return;
    const currentMoneyList = [...moneyList];
    const startDropIndex = result.source.droppableId;
    const endDropIndex = result.destination.droppableId;
    const startDragIndex = result.source.index;
    const endDragIndex = result.destination.index;
    setEndDropIndex(endDropIndex);

    if (startDropIndex === endDropIndex) {
      const currentMoneys = currentMoneyList[Number(startDropIndex)].contents;
      const removeMoney = currentMoneys.filter(
        (el, index) => index === startDragIndex
      );
      const restMoneys = currentMoneys.filter(
        (el, index) => index !== startDragIndex
      );
      let newMoneys = [];
      if (endDragIndex === restMoneys.length) {
        const tempArr = restMoneys.concat(restMoneys[restMoneys.length - 1]);
        tempArr.forEach((el, index) => {
          if (index < endDragIndex) {
            newMoneys.push(el);
          }
          if (index === endDragIndex) {
            const temp = [removeMoney[0]];
            newMoneys.push(...temp);
          }
          if (index > endDragIndex) {
            newMoneys.push(el);
          }
        });
      } else {
        restMoneys.forEach((el, index) => {
          if (index < endDragIndex) {
            newMoneys.push(el);
          }
          if (index === endDragIndex) {
            const temp = [removeMoney[0], el];
            newMoneys.push(...temp);
          }
          if (index > endDragIndex) {
            newMoneys.push(el);
          }
        });
      }
      const tempList = currentMoneyList;
      tempList[Number(startDropIndex)].contents = newMoneys;
      setMoneyList(tempList);
    }
    if (startDropIndex !== endDropIndex) {
      const startMoneys = currentMoneyList[Number(startDropIndex)].contents;
      const endMoneys = currentMoneyList[Number(endDropIndex)].contents;
      const newMoneys = [];
      const removeMoney = startMoneys.filter(
        (el, index) => index === startDragIndex
      );
      const restStartMoneys = startMoneys.filter(
        (el, index) => index !== startDragIndex
      );
      if (endDragIndex === endMoneys.length) {
        const tempArr = endMoneys.concat(endMoneys[endMoneys.length - 1]);
        tempArr.forEach((el, index) => {
          if (index < endDragIndex) {
            newMoneys.push(el);
          }
          if (index === endDragIndex) {
            const temp = [removeMoney[0]];
            newMoneys.push(...temp);
          }
          if (index > endDragIndex) {
            newMoneys.push(el);
          }
        });
      } else {
        endMoneys.forEach((el, index) => {
          if (index < endDragIndex) {
            newMoneys.push(el);
          }
          if (index === endDragIndex) {
            const temp = [removeMoney[0], el];
            newMoneys.push(...temp);
          }
          if (index > endDragIndex) {
            newMoneys.push(el);
          }
        });
      }
      const tempList = currentMoneyList;
      tempList[Number(startDropIndex)].contents = restStartMoneys;
      tempList[Number(endDropIndex)].contents = newMoneys;
      setMoneyList(tempList);
    }
    const daily = sumDailyAmount();
    setDailyAmount(daily);
  };

  // 상위 컴포넌트에 넣을 내용 - detailBudgetForm
  const [detailBudgetFormModal, setDetailBudgetFormModal] = useState(false);
  const [isSelect, setIsSelect] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [category, setCategory] = useState("");

  const onClickDetailBudgetFormModal = (date: string) => () => {
    setIsSelect([false, false, false, false, false, false]);
    setCategory("");
    setClickDate(date);
    setDetailBudgetFormModal(true);
  };

  const onClickExitDetailBudgetFormModal = () => {
    setIsSelect([false, false, false, false, false, false]);
    setCategory("");
    setDetailBudgetFormModal(false);
  };

  const onClickSubmitDetailBudgetFormModal = async (data: any) => {
    if (!data?.contents || !data?.budget || !category) {
      setModalContents(
        "카테고리, 내용, 금액이 모두 입력되었는지 확인해주세요."
      );
      setAlertModal(true);
      setIsSelect([false, false, false, false, false, false]);
      setCategory("");
      return;
    }
    try {
      const result = await createMoneyBook({
        variables: {
          createMoneyBookInput: {
            date: clickDate,
            status: category,
            time: "",
            context: data.contents,
            memo: data.memo,
            tripdates: mutationTripdates,
          },
          budgetId: budgetId,
          amount: Number(data.budget),
        },
      });
      router.reload();
    } catch (error) {
      setModalContents(error.message);
      setAlertModal(true);
    }
    setIsSelect([false, false, false, false, false, false]);
    setCategory("");
    setDetailBudgetFormModal(false);
  };

  const TRIP_CATEGORY = [
    { num: 1, label: "식비", enum: "FOOD" },
    { num: 2, label: "쇼핑", enum: "SHOPPING" },
    { num: 3, label: "교통", enum: "TRANSPORTATION" },
    { num: 4, label: "관광", enum: "TOURISM" },
    { num: 5, label: "숙박", enum: "STAY" },
    { num: 6, label: "기타", enum: "ETC" },
  ];

  const onClickCategory = (index: number) => () => {
    const temp = [false, false, false, false, false, false];
    temp[index] = true;
    setIsSelect([...temp]);
    setCategory(TRIP_CATEGORY[index].enum);
  };

  const submitDetailBudget = () => {
    const currentList = [...moneyList];
    const originListContents = originList;
    const startList = originListContents.map((el, index) => {
      return { date: tripDates[index], contents: el };
    });

    const currentIds = [[], [], [], [], []];
    const startIds = [[], [], [], [], []];
    const targetIds = [];

    // 두 배열의 id값만 뽑아서 push
    const makeIdsList = () => {
      startList.forEach((startEl, startIndex) => {
        startEl.contents.forEach((startEl2) => {
          startIds[startIndex].push(startEl2.id);
        });
      });
      currentList.forEach((currentEl, currentIndex) => {
        currentEl.contents.forEach((currentEl2, curerntIndex2) => {
          currentIds[currentIndex].push(currentEl2.id);
        });
      });
    };
    makeIdsList();

    // 두 배열을 비교해서 current에 없는 객체 제거
    // delete 메소드가 없어서.. update로 date를 삭제데이터<로 수정할 것
    const deleteMovedItem = () => {
      currentList.forEach((el, index) => {
        el.contents.forEach((el2, index2) => {
          startIds.forEach(async (startEl, startIndex) => {
            if (index === startIndex) {
              if (!startEl.includes(el2.id) && el2.id !== undefined) {
                try {
                  await updateMoneyBook({
                    variables: {
                      budgetId: budgetId,
                      moneyBookId: el2.id,
                      updateMoneyBookInput: {
                        date: "delete",
                        status: el2.status,
                        amount: el2.amount,
                        time: el2.time,
                        context: el2.context,
                        memo: el2.memo,
                      },
                    },
                  });
                } catch (error) {
                  setModalContents(error.message);
                  setAlertModal(true);
                }
              }
            }
          });
        });
      });
    };
    deleteMovedItem();

    // 두 배열을 비교해서 current에 있지만 start에는 없는 객체 추가
    const createMovedItem = () => {
      startIds.forEach((el, index) => {
        el.forEach((el2) => {
          currentIds.forEach((currentEl, currentIndex) => {
            if (index === currentIndex) {
              if (!currentEl.includes(el2) && el2 !== undefined) {
                targetIds.push({
                  date: tripDates[Number(endDropIndex)],
                  id: el2,
                });
              }
            }
          });
        });
      });

      const creatMovedCard = () => {
        const targetData = [];

        currentList.forEach((el) => {
          el.contents.forEach((el2) => {
            targetIds.forEach((targetEl) => {
              if (targetEl.id.includes(el2.id)) {
                targetData.push(el2);
              }
            });
          });
        });

        targetData.forEach(async (el, index) => {
          try {
            await createMoneyBook({
              variables: {
                createMoneyBookInput: {
                  date: targetIds[index].date,
                  status: el.status,
                  time: el.time,
                  context: el.context,
                  memo: el.memo,
                  tripdates: tripDates.join(",").replace("ready,", ""),
                },
                budgetId: budgetId,
                amount: el.amount,
              },
            });
          } catch (error) {
            setModalContents(error.message);
            setAlertModal(true);
          }
        });
      };
      creatMovedCard();
    };
    createMovedItem();
  };

  const onClickExitAlertModal = () => {
    setAlertModal(false);
  };

  const onClickSubmitAlertModal = () => {
    setAlertModal(false);
  };

  return (
    <TripWriteMoneyUI
      onDragEndReorder={onDragEndReorder}
      isLoading={isLoading}
      dailyAmount={dailyAmount}
      totalAmount={totalAmount}
      detailBudgetFormModal={detailBudgetFormModal}
      isSelect={isSelect}
      onClickDetailBudgetFormModal={onClickDetailBudgetFormModal}
      onClickExitDetailBudgetFormModal={onClickExitDetailBudgetFormModal}
      onClickSubmitDetailBudgetFormModal={onClickSubmitDetailBudgetFormModal}
      onClickCategory={onClickCategory}
      TRIP_CATEGORY={TRIP_CATEGORY}
      moneyList={moneyList}
      viewport={viewport}
      totalBudgetModal={totalBudgetModal}
      totalBudget={totalBudget}
      budgetSelect={budgetSelect}
      onClickTotalBudgetModal={onClickTotalBudgetModal}
      onClickExitTotalBudgetModal={onClickExitTotalBudgetModal}
      onClickSubmitTotalBudgetModal={onClickSubmitTotalBudgetModal}
      onChangeTotalBudget={onChangeTotalBudget}
      sumAmount={sumAmount}
      tripDates={tripDates}
      budgetId={budgetId}
      submitDetailBudget={submitDetailBudget}
      onClickExitAlertModal={onClickExitAlertModal}
      onClickSubmitAlertModal={onClickSubmitAlertModal}
      alertModal={alertModal}
      modalContents={modalContents}
      setAlertModal={setAlertModal}
      setModalContents={setModalContents}
    />
  );
}
