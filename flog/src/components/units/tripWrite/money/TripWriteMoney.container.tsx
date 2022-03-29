import { useEffect, useState } from "react";
import { SAMPLE_DATA_MONEY } from "./SampleDataMoney";
import TripWriteMoneyUI from "./TripWriteMoney.presenter";

export default function TripWriteMoney() {
  const [isLoading, setIsLoading] = useState(false);
  const [dailyAmount, setDailyAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [moneyList, setMoneyList] = useState([]);

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

  const sumTotalAmount = (amountArray) => {
    const result = amountArray.reduce((acc, cur) => {
      return acc + cur;
    });
    return result;
  };

  useEffect(() => {
    setIsLoading(true);
    setMoneyList(moneyData);
    const daily = sumDailyAmount();
    setDailyAmount(daily);
    const total = sumTotalAmount(dailyAmount);
    setTotalAmount(total);
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
  return (
    <TripWriteMoneyUI
      onDragEndReorder={onDragEndReorder}
      isLoading={isLoading}
      dailyAmount={dailyAmount}
      totalAmount={totalAmount}
    />
  );
}
