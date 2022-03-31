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
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [tripTotalDays, setTripTotalDays] = useState(0);
  const [tripTitleData, setTripTitleData] = useState({});
  const [tripTitleDataArray, setTripTitleDataArray] = useState([]);
  // const [tripData, setTripData] = useState([]);
  // const [sortedTripData, setSortedTripData] = useState([]);
  const [plansList, setPlansList] = useState([[]]);
  const { data: dataSchedule } = useQuery(FETCH_SCHEDULE, {
    variables: {
      scheduleId: router.query.scheduleId,
    },
  });

  useEffect(() => {
    setTripTotalDays(dataSchedule?.fetchSchedule.tripdates.split("/").length);
    setTripTitleData(dataSchedule?.fetchSchedule);
  }, [dataSchedule]);

  const getTripTitleData = () => {
    const resultArr = [];
    if (tripTotalDays) {
      new Array(tripTotalDays).fill(0).map((el) => {
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

  const onDragEndReorder = (result) => {
    if (!result.destination) return;
    const currentPlansList = [...plansList];
    const startDropIndex = result.source.droppableId;
    const endDropIndex = result.destination.droppableId;
    const startDragIndex = result.source.index;
    const endDragIndex = result.destination.index;

    if (startDropIndex === endDropIndex) {
      const currentPlans = currentPlansList[Number(startDropIndex)];
      const removePlan = currentPlans.filter(
        (el, index) => index === startDragIndex
      );
      const restPlans = currentPlans.filter(
        (el, index) => index !== startDragIndex
      );
      let newPlan = [];
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
      const newPlan = [];
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

    console.log(plansList);
  };

  return (
    // <></>
    <TripWritePlansUI
      tripTitleDataArray={tripTitleDataArray}
      onDragEndReorder={onDragEndReorder}
      isLoading={isLoading}
      plansList={plansList}
    />
  );
}
