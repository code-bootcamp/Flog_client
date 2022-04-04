import { SetStateAction, useEffect, useState } from "react";
import OurTripBannerUI from "./OurTripBanner.presenter";

export default function OurTripBanner(props) {
  const [viewport, setViewport] = useState<SetStateAction<number>>(0);
  useEffect(() => {
    const viewportWidth = window.visualViewport.width;
    setViewport(viewportWidth);
  }, []);

  return (
    <OurTripBannerUI
      onClickMapModal={props.onClickMapModal}
      onClickExit={props.onClickExitMapModal}
      onClickSubmit={props.onClickSubmitMapModal}
      inputs={props.inputs}
      onClickTagSearch={props.onClickTagSearch}
      viewport={viewport}
    />
  );
}
