import { useApolloClient, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import TotalMoneyModalUI from "./TotalMoney.presenter";
import {
  FETCH_BUDGET,
  FETCH_MONEY_BOOK,
  FETCH_SCHEDULE,
} from "./TotalMoney.queries";
import * as M from "./TotalMoney.styles";

export default function TotalMoneyModal(props) {
  const client = useApolloClient();
  const [moneyList, setMoneyList] = useState([{ date: "", contents: [] }]);
  const [budgetId, setBudgetId] = useState("");
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [isDataLoading2, setIsDataLoading2] = useState(false);
  const [tripDates, setTripDates] = useState(["ready"]);
  const [tripTotalDays, setTripTotalDays] = useState(0);
  const [dailyAmount, setDailyAmount] = useState(0);
  const [sumAmount, setSumAmount] = useState(0);

  const { data: dataBudget } = useQuery(FETCH_BUDGET, {
    variables: {
      scheduleId: props.scheduleId || "",
    },
  });
  const { data: dataSchedule } = useQuery(FETCH_SCHEDULE, {
    variables: {
      scheduleId: props.scheduleId || "",
    },
  });

  useEffect(() => {
    if (dataSchedule) {
      const dateArray = dataSchedule?.fetchSchedule?.tripdates.split(";");
      const temp = ["ready"].concat(dateArray);
      setTripDates(temp);
      setTripTotalDays(dateArray.length);
    }
  }, [dataSchedule]);

  const sortMoneyBooks = async () => {
    const TotalMoneyBook = await Promise.all(
      new Array(tripTotalDays + 1).fill(0).map(async (el, index) => {
        const result = await client.query({
          query: FETCH_MONEY_BOOK,
          variables: {
            date: tripDates[index],
            budgetId: dataBudget?.fetchBudget[0].id || "",
          },
        });
        return result.data?.fetchMoneyBook;
      })
    );
    const resultArray: any[] = [];
    TotalMoneyBook.forEach((el, index) => {
      resultArray.push({
        date: tripDates[index],
        contents: el,
      });
    });
    setMoneyList(resultArray);
  };

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
    setTimeout(function () {
      setIsDataLoading((prev) => !prev);
    }, 300);
    setTimeout(function () {
      setIsDataLoading2((prev) => !prev);
    }, 600);
  }, []);

  useEffect(() => {
    sortMoneyBooks();
  }, [isDataLoading]);

  useEffect(() => {
    const daily = sumDailyAmount();
    setDailyAmount(daily);
  }, [isDataLoading2]);

  return (
    <TotalMoneyModalUI
      onClickExit={props.onClickExit}
      tripTotalDays={tripTotalDays}
      moneyList={moneyList}
      dailyAmount={dailyAmount}
      sumAmount={sumAmount}
    />
  );
}
