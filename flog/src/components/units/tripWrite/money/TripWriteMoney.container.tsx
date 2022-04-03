import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import { forEach } from "lodash";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  changeStringToDatetime,
  diffDays,
  getDateString,
  getMonthString,
} from "../../../../commons/utils/getDate";
import { SAMPLE_DATA_MONEY } from "./SampleDataMoney";
import TripWriteMoneyUI from "./TripWriteMoney.presenter";
import {
  CREATE_BUDGET,
  FETCH_BUDGET,
  FETCH_MONEY_BOOK,
  FETCH_SCHEDULE,
  UPDATE_BUDGET,
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
  const [moneyList, setMoneyList] = useState([]);
  const [clickDate, setClickDate] = useState("");
  const [budgetId, setBudgetId] = useState("");
  const [tripDates, setTripDates] = useState(["ready"]);
  const [tripTotalDays, setTripTotalDays] = useState(0);
  const [totalBudgetModal, setTotalBudgetModal] = useState(false);
  const [totalBudget, setTotalBudget] = useState(0);
  const [budgetSelect, setBudgetSelect] = useState(true);

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

  useEffect(() => {
    const viewportWidth = window.visualViewport.width;
    setViewport(viewportWidth);
  }, []);

  useEffect(() => {
    if (dataSchedule) {
      const dateArray = dataSchedule?.fetchSchedule?.tripdates.split(";");
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
          console.log(error);
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
      console.log("result is", result);
      setTotalAmount(result.data.updateBudget.totalAmount);
    } catch (error) {
      console.log(error);
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
        return {
          date: tripDates[index],
          contents: result.data?.fetchMoneyBook,
        };
      })
    );
    console.log("TotalMoneyBook is", TotalMoneyBook);
    setMoneyList(TotalMoneyBook);
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
    console.log("dailyAmount is", dailyAmount);
  }, [isDataLoading2]);

  const onDragEndReorder = (result) => {
    if (!result.destination) return;
    const currentMoneyList = [...moneyList];
    const startDropIndex = result.source.droppableId;
    const endDropIndex = result.destination.droppableId;
    const startDragIndex = result.source.index;
    const endDragIndex = result.destination.index;

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

  const onClickSubmitDetailBudgetFormModal = (data: any) => {
    if (
      !data?.contents ||
      !data?.budget ||
      !data?.hour ||
      !data?.minutes ||
      !category
    ) {
      alert("데이터없음!!");
      setIsSelect([false, false, false, false, false, false]);
      setCategory("");
      return;
    }
    console.log(data, category, clickDate);
    setIsSelect([false, false, false, false, false, false]);
    setCategory("");
    setDetailBudgetFormModal(false);
  };

  const TRIP_CATEGORY = [
    { num: 1, label: "식비" },
    { num: 2, label: "쇼핑" },
    { num: 3, label: "교통" },
    { num: 4, label: "관광" },
    { num: 5, label: "숙박" },
    { num: 6, label: "기타" },
  ];

  const onClickCategory = (index: number) => () => {
    const temp = [false, false, false, false, false, false];
    temp[index] = true;
    setIsSelect([...temp]);
    setCategory(TRIP_CATEGORY[index].label);
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
    />
  );
}
