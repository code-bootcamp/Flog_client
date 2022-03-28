import OurTripBannerUI from "./OurTripBanner.presenter";

export default function OurTripBanner(props) {
  return <OurTripBannerUI onClickMapModal={props.onClickMapModal} />;
}
