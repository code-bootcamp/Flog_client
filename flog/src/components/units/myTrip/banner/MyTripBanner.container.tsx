import MyTripBannerUI from "./MyTripBanner.presenter";
import { IMyTripBannerProps } from "./MyTripBanner.types";

export default function MyTripBanner(props) {
  return (
    <MyTripBannerUI
      onClickMapModal={props.onClickMapModal}
      userInfo={props.userInfo}
    />
  );
}
