import { gql, useQuery } from "@apollo/client";
import TripListUI from "./TripsList.presenter";

const FETCH_SHARE_SCHEDULES = gql`
  query fetchShareSchedules($page: Float) {
    fetchShareSchedules(page: $page) {
      id
      title
      startDate
      endDate
      hashtag
      location
    }
  }
`;

export default function TripList(props) {
  const { data: shareData } = useQuery(FETCH_SHARE_SCHEDULES);

  return <TripListUI isMine={props.isMine} shareData={shareData} />;
}
