import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import MapModal from "../../src/components/commons/modals/map/MapModal.container";
import OurTripBanner from "../../src/components/units/ourTrip/banner/OurTripBanner.container";
import TripList from "../../src/components/units/tripList/TripList.container";

const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FETCH_SHARE_SCHEDULES = gql`
  query fetchShareSchedules($page: Float) {
    fetchShareSchedules(page: $page) {
      id
      title
      startDate
      endDate
      hashtag
      location
    }
  }
`;

export default function OurTripsPage() {
  const { data: shareData } = useQuery(FETCH_SHARE_SCHEDULES);

  // 상위 컴포넌트에 넣을 내용 - MapModal

  const [inputs, setInputs] = useState({ doName: "", cityName: "" });
  const [mapModal, setMapModal] = useState(false);

  const onClickMapModal = () => {
    setMapModal(true);
  };

  const onClickExitMapModal = () => {
    setMapModal(false);
    setInputs({ doName: "", cityName: "" });
  };

  const onClickSubmitMapModal = () => {
    setMapModal(false);
    console.log(inputs.doName, inputs.cityName);
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
        <TripList isMine={false} shareData={shareData} />
      </BodyContainer>
    </>
  );
}
