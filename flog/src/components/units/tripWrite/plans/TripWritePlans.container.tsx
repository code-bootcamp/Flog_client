import { SAMPLE_DATA_PLANS, SAMPLE_DATA_PLANS_TITLE } from "./SampleData";
import TripWritePlansUI from "./TripWritePlans.presenter";

const DAY_LIST = ["1", "2", "3", "4"];

export default function TripWritePlans() {
  const temp = SAMPLE_DATA_PLANS.fetchDetailSchedules;
  const tempTitle = SAMPLE_DATA_PLANS_TITLE.fetchSchedules;
  let SAMPLE_DATA_PLANS_SORTED = [];
  const sortedDate = () => {
    for (let i = 0; i < DAY_LIST; i++) {
      SAMPLE_DATA_PLANS_SORTED.push(temp[day] === DAY_LIST[i]);
      console.log(SAMPLE_DATA_PLANS_SORTED);
      console.log(temp[day]);
    }
  };
  sortedDate();

  return <TripWritePlansUI />;
}
