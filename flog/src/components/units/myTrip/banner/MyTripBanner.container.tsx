import MyTripBannerUI from "./MyTripBanner.presenter";
import { IMyTripBannerProps } from "./MyTripBanner.types";

export default function MyTripBanner(props: IMyTripBannerProps) {
  const onClickNewTrip = () => {
    alert("myTrips/write로 이동");
  };

  return (
    <MyTripBannerUI onClickNewTrip={onClickNewTrip} userInfo={props.userInfo} />
  );
}
