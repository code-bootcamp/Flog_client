import { useEffect, useState } from "react";
import { SAMPLE_DATA_MONEY } from "./SampleDataMoney";
import TripWriteMoneyUI from "./TripWriteMoney.presenter";

export default function TripWriteMoney() {
  const [isLoading, setIsLoading] = useState(false);
  const [dailyAmount, setDailyAmount] = useState(0);
  const [moneyList, setMoneyList] = useState([]);

  const moneyData = SAMPLE_DATA_MONEY;

  useEffect(() => {
    setIsLoading(true);
    setMoneyList(moneyData);
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
      tempList[Number(startDropIndex)] = newMoneys;
      setMoneyList(tempList);
    }
  };
  return (
    <TripWriteMoneyUI
      onDragEndReorder={onDragEndReorder}
      isLoading={isLoading}
    />
  );
}
