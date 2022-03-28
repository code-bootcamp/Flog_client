import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import {
  changeStringToDatetime,
  diffDays,
} from "../../../../commons/utils/getDate";
import { SAMPLE_DATA_PLANS, SAMPLE_DATA_PLANS_TITLE } from "./SampleData";
import TripWritePlansUI from "./TripWritePlans.presenter";
import { FETCH_DETAIL_SCHEDULES } from "./TripWritePlans.queries";

export default function TripWritePlans() {
  const [isLoading, setIsLoading] = useState(false);
  const { data } = useQuery(FETCH_DETAIL_SCHEDULES, {
    variables: {
      scheduleId: "da0b8706-2505-47de-8fd4-81511604c4b3",
      userId: "ac7ac614-7afb-4e0c-a3e4-afcd3c604d73",
    },
  });
  console.log(data);

  const tripTitleData = SAMPLE_DATA_PLANS_TITLE.fetchSchedules; // TitleData 추출 - 추후 API에서 불러오는 데이터로 변경

  const getTripTotalDays = () => {
    const startDatetime = changeStringToDatetime(tripTitleData[0].startDate);
    const endDatetime = changeStringToDatetime(tripTitleData[0].endDate);
    const tripTotalDays = diffDays(endDatetime, startDatetime);
    return tripTotalDays;
  };
  const tripTotalDays = getTripTotalDays();

  const getTripTitleData = () => {
    const resultArr = [];
    new Array(tripTotalDays).fill(0).map((el) => {
      resultArr.push(tripTitleData[0]);
    });
    return resultArr;
  };
  const tripTitleDataArray = getTripTitleData();

  const sortTripData = () => {
    const tripData = SAMPLE_DATA_PLANS.fetchDetailSchedules;
    const array1 = tripData.filter((el) => el.day === "1");
    const array2 = tripData.filter((el) => el.day === "2");
    const array3 = tripData.filter((el) => el.day === "3");
    const array4 = tripData.filter((el) => el.day === "4");

    const sortedTripData = [];
    if (array1.length > 0) sortedTripData.push(array1);
    if (array2.length > 0) sortedTripData.push(array2);
    if (array3.length > 0) sortedTripData.push(array3);
    if (array4.length > 0) sortedTripData.push(array4);

    return sortedTripData;
  };
  const sortedTripData = sortTripData();

  const [plansList, setPlansList] = useState([[]]);
  useEffect(() => {
    setIsLoading(true);
    setPlansList(sortedTripData);
  }, []);
  const onDragEndReorder = (result) => {
    if (!result.destination) return;
    const currentPlansList = [...plansList];
    const startDropIndex = result.source.droppableId;
    const endDropIndex = result.destination.droppableId;
    const startDragIndex = result.source.index;
    const endDragIndex = result.destination.index;
    // console.log("startDropIndex is ", startDropIndex);
    // console.log("endDropIndex is ", endDropIndex);
    // console.log("startDragIndex is ", startDragIndex);
    // console.log("endDragIndex is ", endDragIndex);

    if (startDropIndex === endDropIndex) {
      const currentPlans = currentPlansList[Number(startDropIndex)];
      const removePlan = currentPlans.splice(startDragIndex, 1);
      let newPlan = [];
      if (endDragIndex === currentPlans.length) {
        const tempArr = currentPlans.concat(
          currentPlans[currentPlans.length - 1]
        );
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
        currentPlans.forEach((el, index) => {
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
      const newPlan = [];
      const removePlan = startPlans.splice(startDragIndex, 1);
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
      tempList[Number(startDropIndex)] = startPlans;
      tempList[Number(endDropIndex)] = newPlan;
      setPlansList(tempList);
    }

    console.log("최종 리스트는 ", plansList);
  };

  return (
    <TripWritePlansUI
      tripTitleDataArray={tripTitleDataArray}
      tripTitleData={tripTitleData}
      sortedTripData={sortedTripData}
      onDragEndReorder={onDragEndReorder}
      isLoading={isLoading}
      plansList={plansList}
    />
  );
}
