import { useApolloClient, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  changeStringToDatetime,
  diffDays,
} from "../../../../commons/utils/getDate";
import { SAMPLE_DATA_PLANS, SAMPLE_DATA_PLANS_TITLE } from "./SampleData";
import TripWritePlansUI from "./TripWritePlans.presenter";
import {
  FETCH_DETAIL_SCHEDULE,
  FETCH_DETAIL_SCHEDULES,
  FETCH_SCHEDULE,
} from "./TripWritePlans.queries";

export default function TripWritePlans() {
  const router = useRouter();
  const client = useApolloClient();
  const [isLoading, setIsLoading] = useState(false);
  const [tripTotalDays, setTripTotalDays] = useState(0);
  const [tripTitleData, setTripTitleData] = useState({});
  const [tripData, setTripData] = useState([]);
  const [sortedTripData, setSortedTripData] = useState([]);
  const { data: dataDetailSchedules } = useQuery(FETCH_DETAIL_SCHEDULES, {
    variables: {
      scheduleId: router.query.scheduleId,
    },
  });
  const { data: dataSchedules } = useQuery(FETCH_SCHEDULE, {
    variables: {
      scheduleId: String(router.query.scheduleId),
    },
  });

  useEffect(() => {
    setTripTotalDays(dataSchedules?.fetchSchedule.tripdates.split("/").length);
    setTripTitleData(dataSchedules?.fetchSchedule);
  }, [dataSchedules]);

  const getTripTitleData = () => {
    const resultArr = [];
    if (tripTotalDays) {
      new Array(tripTotalDays).fill(0).map((el) => {
        resultArr.push(tripTitleData);
      });
    }
    return resultArr;
  };
  const tripTitleDataArray = getTripTitleData();
  console.log("tripTitleDataArray is", tripTitleDataArray);

  const sortTripData = async () => {
    const TotalResult = await Promise.all(
      new Array(tripTotalDays).fill(0).map(async (el, index) => {
        const result = await client.query({
          query: FETCH_DETAIL_SCHEDULE,
          variables: {
            day: String(index + 1),
            scheduleId: String(router.query.scheduleId),
          },
        });
        return result.data.fetchDetailSchedule;
      })
    );

    setTimeout(function () {
      console.log("TotalResult is", TotalResult);
      setTripData(TotalResult);
    }, 1000);
  };
  useEffect(() => {
    sortTripData();
  }, []);

  // useEffect(() => {
  //   console.log(dataDetailSchedules);
  //   if (dataDetailSchedules) {
  //     setTripData(dataDetailSchedules?.data?.fetchDetailSchedules);
  //     const array1 = tripData.filter((el) => el.day === "1");
  //     const array2 = tripData.filter((el) => el.day === "2");
  //     const array3 = tripData.filter((el) => el.day === "3");
  //     const array4 = tripData.filter((el) => el.day === "4");

  //     const tempArray = [];
  //     if (array1.length > 0) tempArray.push(array1);
  //     if (array2.length > 0) tempArray.push(array2);
  //     if (array3.length > 0) tempArray.push(array3);
  //     if (array4.length > 0) tempArray.push(array4);
  //     setSortedTripData(tempArray);
  //   }
  // }, [dataDetailSchedules]);
  // console.log(tripData, sortedTripData);

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
  };

  return (
    <></>
    // <TripWritePlansUI
    //   tripTitleDataArray={tripTitleDataArray}
    //   tripTitleData={tripTitleData}
    //   sortedTripData={sortedTripData}
    //   onDragEndReorder={onDragEndReorder}
    //   isLoading={isLoading}
    //   plansList={plansList}
    // />
  );
}
