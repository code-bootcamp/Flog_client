import { useState } from "react";
import MapModal from "../../commons/modals/map/MapModal.container";
import OurTripBanner from "./banner/OurTripBanner.container";
import OurTripList from "./list/OurTripList.container";
import { BodyContainer } from "./OurTrip.styles";

export default function OurTrip() {
  const [inputs, setInputs] = useState({ doName: "", cityName: "" });
  const [mapModal, setMapModal] = useState(false);

  const onClickMapModal = () => {
    setInputs({ doName: "", cityName: "" });
    setMapModal(true);
  };

  const onClickExitMapModal = () => {
    setMapModal(false);
    setInputs({ doName: "", cityName: "" });
  };

  const onClickSubmitMapModal = () => {
    setMapModal(false);
  };

  return (
    <>
      {mapModal && (
        <MapModal
          onClickExit={onClickExitMapModal}
          onClickSubmit={onClickSubmitMapModal}
          inputs={inputs}
          setInputs={setInputs}
        />
      )}
      <BodyContainer>
        <OurTripBanner
          onClickMapModal={onClickMapModal}
          onClickExit={onClickExitMapModal}
          onClickSubmit={onClickSubmitMapModal}
          inputs={inputs}
        />
        <OurTripList />
      </BodyContainer>
    </>
  );
}
