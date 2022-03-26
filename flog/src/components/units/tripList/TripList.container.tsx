import TripListUI from "./TripsList.presenter";

export default function TripList(props) {
  return <TripListUI isMine={props.isMine} />;
}
