import { useApolloClient, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import TotalSchedulesModalUI from "./TotalSchedules.presenter";
import {
  FETCH_DETAIL_SCHEDULE,
  FETCH_SCHEDULE,
} from "./TotalSchedules.queries";

export default function TotalSchedulesModal(props) {
  const client = useApolloClient();
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [tripTotalDays, setTripTotalDays] = useState(0);
  const [tripTitleData, setTripTitleData] = useState({});
  const [tripTitleDataArray, setTripTitleDataArray] = useState([]);
  const [schedulesList, setSchedulesList] = useState([[]]);
  const { data: scheduleData } = useQuery(FETCH_SCHEDULE, {
    variables: { scheduleId: props.scheduleId },
  });

  useEffect(() => {
    setTimeout(function () {
      setIsDataLoading((prev) => !prev);
    }, 300);
  }, []);

  useEffect(() => {
    setTripTotalDays(scheduleData?.fetchSchedule.tripdates.split(";").length);
    setTripTitleData(scheduleData?.fetchSchedule);
  }, [scheduleData]);

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
            scheduleId: props.scheduleId,
          },
        });
        return result.data?.fetchDetailSchedule;
      })
    );
    setSchedulesList(TotalResult);
  };

  useEffect(() => {
    getTripTitleData();
    sortTripData();
  }, [isDataLoading]);

  console.log("tripTotalDays is", tripTotalDays);
  console.log("tripTitleData is", tripTitleData);
  console.log("tripTitleDataArray is", tripTitleDataArray);
  console.log("schedulesList is", schedulesList);

  return (
    <TotalSchedulesModalUI
      onClickExit={props.onClickExit}
      scheduleId={props.scheduleId}
      tripTitleDataArray={tripTitleDataArray}
      schedulesList={schedulesList}
    />
  );
}
