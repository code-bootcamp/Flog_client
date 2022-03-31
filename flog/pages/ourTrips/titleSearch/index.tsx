import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import MapModal from "../../../src/components/commons/modals/map/MapModal.container";
import OurTripBanner from "../../../src/components/units/ourTrip/banner/OurTripBanner.container";
import { FETCH_TITLE_SEARCH } from "../../../src/components/units/ourTrip/OurTrip.queries";
import TitleSearchBanner from "../../../src/components/units/ourTrip/titleSearch/banner/TitleSearchBanner.container";
import TitleSearchList from "../../../src/components/units/ourTrip/titleSearch/list/TitleSearchList.container";

const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function TitleSearchPage() {
  const [inputs, setInputs] = useState({ doName: "", cityName: "", title: "" });

  const { data: titleData } = useQuery(FETCH_TITLE_SEARCH, {
    variables: {
      where: `${inputs.doName}.${inputs.cityName}`,
      search: inputs.title,
    },
  });

  console.log(titleData);

  // 상위 컴포넌트에 넣을 내용 - MapModal

  const [mapModal, setMapModal] = useState(false);

  const onClickMapModal = () => {
    setMapModal(true);
    setInputs({ doName: "", cityName: "" });
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
        <TitleSearchBanner
          onClickMapModal={onClickMapModal}
          onClickExit={onClickExitMapModal}
          onClickSubmit={onClickSubmitMapModal}
          inputs={inputs}
          setInputs={setInputs}
        />
        <TitleSearchList isMine={false} titleData={titleData} />
      </BodyContainer>
    </>
  );
}
