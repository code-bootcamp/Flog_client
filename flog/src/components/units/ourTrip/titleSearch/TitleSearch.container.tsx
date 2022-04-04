import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import MapModal from "../../../commons/modals/map/MapModal.container";
import { FETCH_TITLE_SEARCH } from "../OurTrip.queries";
import TitleSearchBanner from "./banner/TitleSearchBanner.container";
import TitleSearchList from "./list/TitleSearchList.container";

const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface IInputs {
  doName?: string;
  cityName?: string;
  title?: string;
}

export default function TitleSearch() {
  const [inputs, setInputs] = useState<IInputs>({
    doName: "",
    cityName: "",
    title: "",
  });
  const [where, setWhere] = useState("");

  const { data: titleData } = useQuery(FETCH_TITLE_SEARCH, {
    variables: {
      where: where,
      search: inputs.title,
    },
  });
  const [mapModal, setMapModal] = useState(false);
  const onClickMapModal = () => {
    setMapModal(true);
    setInputs({ doName: "", cityName: "" });
  };

  const onClickExitMapModal = () => {
    setMapModal(false);
    setInputs({ doName: "", cityName: "" });
  };

  let newWhere = "";
  const onClickSubmitMapModal = () => {
    if (inputs.doName && !inputs.cityName) {
      setWhere(`${inputs.doName}`);
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
        <TitleSearchBanner
          onClickMapModal={onClickMapModal}
          onClickExit={onClickExitMapModal}
          onClickSubmit={onClickSubmitMapModal}
          inputs={inputs}
          setInputs={setInputs}
        />
        <TitleSearchList titleData={titleData} />
      </BodyContainer>
    </>
  );
}
