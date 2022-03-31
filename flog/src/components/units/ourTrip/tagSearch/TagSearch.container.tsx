import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import MapModal from "../../../commons/modals/map/MapModal.container";
import TagSearchBanner from "./banner/TagSearchBanner.container";
import TagSearchList from "./list/TagSearchList.container";
const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

const FETCH_HASHTAG_SEARCH = gql`
  query scheduleHashTagSearch($where: String!, $hashTag: String!) {
    scheduleHashTagSearch(where: $where, hashTag: $hashTag) {
      id
      title
      startDate
      endDate
      location
    }
  }
`;

export default function TagSearch() {
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
    // console.log(inputs.doName, inputs.cityName);
  };

  const [hashTag, setHashTag] = useState("");

  const { data: hashTagData, refetch } = useQuery(FETCH_HASHTAG_SEARCH, {
    variables: {
      where: `${inputs.doName}${inputs.cityName}`,
      hashTag: String(hashTag),
    },
  });

  useEffect(() => {
    console.log(hashTagData);
    refetch();
  }, [hashTagData]);

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
        <TagSearchBanner
          onClickMapModal={onClickMapModal}
          onClickExit={onClickExitMapModal}
          onClickSubmit={onClickSubmitMapModal}
          inputs={inputs}
          hashTag={hashTag}
          setHashTag={setHashTag}
        />
        <TagSearchList hashTagData={hashTagData} />
      </BodyContainer>
    </>
  );
}
