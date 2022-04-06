import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import MapModal from "../../../commons/modals/map/MapModal.container";
import { FETCH_HASHTAG_SEARCH } from "../OurTrip.queries";
import TagSearchBanner from "./banner/TagSearchBanner.container";
import TagSearchList from "./list/TagSearchList.container";
const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

export default function TagSearch() {
  const [inputs, setInputs] = useState({ doName: "", cityName: "" });
  const [mapModal, setMapModal] = useState(false);
  const [where, setWhere] = useState("");

  const onClickMapModal = () => {
    setMapModal(true);
  };

  const onClickExitMapModal = () => {
    setMapModal(false);
    setInputs({ doName: "", cityName: "" });
  };

  const [hashTag, setHashTag] = useState("");

  const { data: hashTagData, refetch } = useQuery(FETCH_HASHTAG_SEARCH, {
    variables: {
      where: where,
      hashTag: String(hashTag),
    },
  });

  let newWhere = "";
  const onClickSubmitMapModal = () => {
    if (inputs.doName && !inputs.cityName) {
      setWhere(`${inputs.doName}.`);
    }

    if (inputs.doName && inputs.cityName) {
      newWhere = `${inputs.doName}.${inputs.cityName}`;
      if (newWhere.includes(" ")) {
        newWhere = newWhere.replace(" ", "");
        setWhere(newWhere);
      }
    }
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
