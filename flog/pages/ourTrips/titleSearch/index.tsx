import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import MapModal from "../../../src/components/commons/modals/map/MapModal.container";
import OurTripBanner from "../../../src/components/units/ourTrip/banner/OurTripBanner.container";
import { FETCH_TITLE_SEARCH } from "../../../src/components/units/ourTrip/OurTrip.queries";
import TitleSearchBanner from "../../../src/components/units/ourTrip/titleSearch/banner/TitleSearchBanner.container";
import TitleSearchList from "../../../src/components/units/ourTrip/titleSearch/list/TitleSearchList.container";
import TripList from "../../../src/components/units/tripList/TripList.container";

const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function TitleSearchPage() {
  const { data: titleData } = useQuery(FETCH_TITLE_SEARCH, {
    variables: {
      where: "강원도 횡성군",
      search: "두번째",
    },
  });

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
        <TitleSearchBanner
          onClickMapModal={onClickMapModal}
          onClickExit={onClickExitMapModal}
          onClickSubmit={onClickSubmitMapModal}
          inputs={inputs}
        />
        <TitleSearchList isMine={false} titleData={titleData} />
      </BodyContainer>
    </>
  );
}
