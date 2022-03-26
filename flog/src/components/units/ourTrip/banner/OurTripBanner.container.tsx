import OurTripBannerUI from "./OurTripBanner.presenter";

export default function OurTripBanner() {
  const onClickOpenMap = () => {
    alert("지도 열기 function");
  };

  return <OurTripBannerUI onClickOpenMap={onClickOpenMap} />;
}
