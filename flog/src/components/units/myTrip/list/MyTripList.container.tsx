import MyTripListUI from "./MyTripList.presenter";
import { IMyTripListProps } from "./MyTripList.types";

export default function MyTripList(props: IMyTripListProps) {
  const onClickMoveToOurTrip = () => {
    alert("우리의 여행 보러가기 function");
  };

  const onClickMore = () => {
    alert("무한 더보기 function");
  };

  return (
    <MyTripListUI
      onClickMoveToOurTrip={onClickMoveToOurTrip}
      userInfo={props.userInfo}
      onClickMore={onClickMore}
    />
  );
}
