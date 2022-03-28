import {
  changeStringToDatetime,
  diffDays,
} from "../../../../commons/utils/getDate";
import { SAMPLE_DATA_PLANS, SAMPLE_DATA_PLANS_TITLE } from "./SampleData";
import TripWritePlansUI from "./TripWritePlans.presenter";

export default function TripWritePlans() {
  // const temp = SAMPLE_DATA_PLANS.fetchDetailSchedules;
  // const tempTitle = SAMPLE_DATA_PLANS_TITLE.fetchSchedules;
  // let SAMPLE_DATA_PLANS_SORTED = [];
  // const sortedDate = () => {
  //   for (let i = 0; i < DAY_LIST; i++) {
  //     SAMPLE_DATA_PLANS_SORTED.push(temp[day] === DAY_LIST[i]);
  //     console.log(SAMPLE_DATA_PLANS_SORTED);
  //     console.log(temp[day]);
  //   }
  // };
  // sortedDate();

  const tripTitleData = SAMPLE_DATA_PLANS_TITLE.fetchSchedules; // TitleData 추출 - 추후 API에서 불러오는 데이터로 변경

  const getTripTotalDays = () => {
    const startDatetime = changeStringToDatetime(tripTitleData[0].startDate);
    const endDatetime = changeStringToDatetime(tripTitleData[0].endDate);
    const tripTotalDays = diffDays(endDatetime, startDatetime);
    return tripTotalDays;
  };
  const tripTotalDays = getTripTotalDays();
  console.log(tripTotalDays);

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
    console.log(tripData);
    const array1 = tripData.filter((el) => el.day === "1");
    const array2 = tripData.filter((el) => el.day === "2");
    const array3 = tripData.filter((el) => el.day === "3");
    const array4 = tripData.filter((el) => el.day === "4");
    console.log(array1);
    console.log(array2);
    console.log(array3);
    console.log(array4);

    const sortedTripData = [];
    if (array1.length > 0) sortedTripData.push(array1);
    if (array2.length > 0) sortedTripData.push(array2);
    if (array3.length > 0) sortedTripData.push(array3);
    if (array4.length > 0) sortedTripData.push(array4);

    console.log(sortedTripData);
  };
  sortTripData();

  return (
    <TripWritePlansUI
      tripTitleDataArray={tripTitleDataArray}
      tripTitleData={tripTitleData}
    />
  );
}
