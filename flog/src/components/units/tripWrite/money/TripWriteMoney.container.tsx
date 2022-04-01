import { useApolloClient, useQuery } from "@apollo/client";
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
  FETCH_BUDGET,
  FETCH_MONEY_BOOK,
  FETCH_SCHEDULE,
} from "./TripWriteMoney.queries";

export default function TripWriteMoney() {
  const router = useRouter();
  const client = useApolloClient();
  const [isLoading, setIsLoading] = useState(false);
  const [viewport, setViewport] = useState(0);
  const [dailyAmount, setDailyAmount] = useState(0);
  const [moneyList, setMoneyList] = useState([]);
  const [clickDate, setClickDate] = useState("");
  const [budgetId, setBudgetId] = useState("");
  const [tripDates, setTripDates] = useState([
    "ready",
    "2022.03.30",
    "2022.03.31",
    "2022.04.01",
    "2022.04.02",
  ]);
  const [moneyBooks, setMoneyBooks] = useState([]);
  useEffect(() => {
    const viewportWidth = window.visualViewport.width;
    setViewport(viewportWidth);
  }, []);

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

  // 여행 일정 dates가 모여있는 배열 반환
  // useEffect(() => {
  //   if (dataSchedule) {
  //     const makeTripDates = () => {
  //       const data = dataSchedule.fetchSchedule;
  //       const startDate = changeStringToDatetime(data.startDate);
  //       const endDate = changeStringToDatetime(data.endDate);
  //       const tempArr = new Array(diffDays(startDate, endDate)).fill(0);
  //       const result = tempArr.map((el, index) => {
  //         return `${startDate.getFullYear()}.${getMonthString(
  //           data.startDate,
  //           index
  //         )}.${getDateString(data.startDate, index)}`;
  //       });
  //       setTripDates((prev) => [...prev, ...result]);
  //     };
  //     makeTripDates();
  //     console.log("tripDates is ", tripDates);
  //   }
  // }, [dataSchedule]);
  // useEffect(() => {
  //   setBudgetId(dataBudget?.fetchBudget[0].id);
  // }, [dataBudget]);

  useEffect(() => {
    sortMoneyBooks();
  }, [budgetId]);

  const dataMoneyBookList = [];
  const sortMoneyBooks = async () => {
    if (!budgetId) return;
    tripDates.forEach(async (el, index) => {
      const result = await client.query({
        query: FETCH_MONEY_BOOK,
        variables: {
          date: tripDates[index],
          budgetId: budgetId,
        },
      });
      console.log(`${index}번째 루프 `, result.data.fetchMoneyBook[0]);
    });
  };

  // dataMoneyBookList.push({
  //   dates: tripDates[0],
  //   contents: result0.data.fetchMoneyBook,
  // });

  const moneyData = SAMPLE_DATA_MONEY;

  const sumDailyAmount = () => {
    let resultArr = [];
    for (let i = 0; i < moneyData.length; i++) {
      // console.log(moneyData[i].contents);
      const moneyList = moneyData[i].contents;
      const moneyAmount = moneyList.map((el) => el.amount);
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
    return resultArr;
  };

  useEffect(() => {
    setIsLoading(true);
    setMoneyList(moneyData);
    const daily = sumDailyAmount();
    setDailyAmount(daily);
  }, []);

  const onDragEndReorder = (result) => {
    if (!result.destination) return;
    const currentMoneyList = [...moneyList];
    const startDropIndex = result.source.droppableId;
    const endDropIndex = result.destination.droppableId;
    const startDragIndex = result.source.index;
    const endDragIndex = result.destination.index;

    if (startDropIndex === endDropIndex) {
      const currentMoneys = currentMoneyList[Number(startDropIndex)].contents;
      const removeMoney = currentMoneys.splice(startDragIndex, 1);
      let newMoneys = [];
      if (endDragIndex === currentMoneys.length) {
        const tempArr = currentMoneys.concat(
          currentMoneys[currentMoneys.length - 1]
        );
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
        currentMoneys.forEach((el, index) => {
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
      const removeMoney = startMoneys.splice(startDragIndex, 1);
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
      tempList[Number(startDropIndex)].contents = startMoneys;
      tempList[Number(endDropIndex)].contents = newMoneys;
      setMoneyList(tempList);
    }
  };

  const makeCard = (date, contents) => {};

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
      detailBudgetFormModal={detailBudgetFormModal}
      isSelect={isSelect}
      onClickDetailBudgetFormModal={onClickDetailBudgetFormModal}
      onClickExitDetailBudgetFormModal={onClickExitDetailBudgetFormModal}
      onClickSubmitDetailBudgetFormModal={onClickSubmitDetailBudgetFormModal}
      onClickCategory={onClickCategory}
      TRIP_CATEGORY={TRIP_CATEGORY}
      moneyList={moneyList}
      viewport={viewport}
    />
  );
}
