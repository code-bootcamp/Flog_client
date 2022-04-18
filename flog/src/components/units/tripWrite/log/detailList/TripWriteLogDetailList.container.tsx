import TripWriteLogDetailListUI from "./TripWriteLogDetailList.presenter";
import { FETCH_DETAIL_SCHEDULE } from "../list/TripWriteLogList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
export default function TripWriteLogDetailList(props) {
  const router = useRouter();

  const { data } = useQuery(FETCH_DETAIL_SCHEDULE, {
    variables: {
      scheduleId: String(router.query.scheduleId),
      day: String(props.index + 1),
    },
  });
  const addEl = (place: string, memo: string, elIndex: number) => () => {
    const temp = [[]];
    temp[props.index] = [place, memo, elIndex];
    props.setSelected(temp);
  };

  return <TripWriteLogDetailListUI data={data} addEl={addEl} />;
}
