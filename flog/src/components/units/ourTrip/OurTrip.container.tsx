import { useQuery } from "@apollo/client";
import { useState } from "react";
import MapModal from "../../commons/modals/map/MapModal.container";
import TripList from "../tripList/TripList.container";
import OurTripBanner from "./banner/OurTripBanner.container";
import { FETCH_SHARE_SCHEDULES } from "./OurTrip.queries";
import { BodyContainer } from "./OurTrip.styles";

export default function OurTrip() {
  const { data: shareData, fetchMore } = useQuery(FETCH_SHARE_SCHEDULES);

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

  const onClickMore = () => {
    // alert("더보기 버튼");
    //  console.log(shareData);
    if (!shareData) return;

    fetchMore({
      variables: {
        page: Math.ceil(shareData.fetchShareSchedules.length / 12) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchShareSchedules)
          return { fetchShareSchedules: [...prev.fetchShareSchedules] };

        return {
          fetchShareSchedules: [
            ...prev.fetchShareSchedules,
            ...fetchMoreResult.fetchShareSchedules,
          ],
        };
      },
    });
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
        <TripList
          isMine={false}
          shareData={shareData}
          onClickMore={onClickMore}
        />
      </BodyContainer>
    </>
  );
}
