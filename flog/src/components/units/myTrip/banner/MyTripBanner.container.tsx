import MyTripBannerUI from "./MyTripBanner.presenter";
import { IMyTripBannerProps } from "./MyTripBanner.types";

export default function MyTripBanner(props: IMyTripBannerProps) {
  const onClickNewTrip = () => {
    alert("새로운 여행 만들기 function");
  };

  return (
    <MyTripBannerUI onClickNewTrip={onClickNewTrip} userInfo={props.userInfo} />
  );
}
