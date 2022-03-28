import { GlobalContext } from "../../../../pages/_app";
import TripListUI from "./TripList.presenter";

export default function TripList(props) {
  return (
    <TripListUI
      isMine={props.isMine}
      shareData={props.shareData}
      myData={props.myData}
    />
  );
}
