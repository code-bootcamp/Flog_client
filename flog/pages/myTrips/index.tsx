import styled from "@emotion/styled";
import { useState } from "react";
import MapModal from "../../src/components/commons/modals/map/MapModal.container";
import NewTripScheduleModal from "../../src/components/commons/modals/newSchedule/mainSchedule/MainSchedule.container";
import MyTripBanner from "../../src/components/units/myTrip/banner/MyTripBanner.container";
import MyTripList from "../../src/components/units/myTrip/list/MyTripList.container";

const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function MyTripsPage() {
  // 상위 컴포넌트에 넣을 내용 - 신규 일정 생성
  const [newScheduleModal, setNewScheduleModal] = useState(false);

  const [title, setTitle] = useState("");

  const [isThemeSelect, setIsThemeSelect] = useState(null);
  const [isThemeActive, setIsThemeActive] = useState(false);

  const [isPeopleSelect, setIsPeopleSelect] = useState(null);
  const [isPeopleActive, setIsPeopleActive] = useState(false);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isDateActive, setIsDateActive] = useState(false);

  const [isButtonActive, setIsButtonActive] = useState(false);

  const onClickNewScheduleModal = () => {
    setNewScheduleModal(true);
  };

  const onClickExitNewScheduleModal = () => {
    setNewScheduleModal(false);
    alert("나의 여행 리스트로 이동");
  };

  const onClickSubmitNewScheduleModal = () => {
    //  setNewScheduleModal(false);
    console.log(
      "여행제목 :",
      title,
      "||||",
      "여행테마 :",
      isThemeSelect,
      "||||",
      "인원 수 :",
      isPeopleSelect,
      "||||",
      "시작일 :",
      startDate,
      "||||",
      "종료일 :",
      endDate,
      "||||",
      "여행 지역",
      doName,
      cityName
    );
  };

  // 상위 컴포넌트에 넣을 내용 - MapModal
  const [doName, setDoName] = useState("");
  const [cityName, setCityName] = useState("");

  const [mapModal, setMapModal] = useState(false);

  const onClickMapModal = () => {
    setMapModal(true);
  };

  const onClickExitMapModal = () => {
    setMapModal(false);
  };

  const onClickSubmitMapModal = () => {
    setMapModal(false);
    // onClickNewScheduleModal();
    setTimeout(onClickNewScheduleModal, 500);
    console.log(doName, cityName);
  };

  return (
    <>
      {mapModal && (
        <MapModal
          onClickExit={onClickExitMapModal}
          onClickSubmit={onClickSubmitMapModal}
          doName={doName}
          setDoName={setDoName}
          cityName={cityName}
          setCityName={setCityName}
        />
      )}

      {newScheduleModal && (
        <NewTripScheduleModal
          onClickExit={onClickExitNewScheduleModal}
          onClickSubmit={onClickSubmitNewScheduleModal}
          setTitle={setTitle}
          title={title}
          isThemeSelect={isThemeSelect}
          isPeopleSelect={isPeopleSelect}
          isDateActive={isDateActive}
          isThemeActive={isThemeActive}
          isPeopleActive={isPeopleActive}
          startDate={startDate}
          endDate={endDate}
          setEndDate={setEndDate}
          setStartDate={setStartDate}
          isButtonActive={isButtonActive}
          setIsButtonActive={setIsButtonActive}
          setIsDateActive={setIsDateActive}
          setIsThemeActive={setIsThemeActive}
          setIsPeopleActive={setIsPeopleActive}
          setIsThemeSelect={setIsThemeSelect}
          setIsPeopleSelect={setIsPeopleSelect}
        />
      )}

      <BodyContainer>
        <MyTripBanner userInfo={true} onClickMapModal={onClickMapModal} />
        <MyTripList isMine={true} userInfo={true} />
      </BodyContainer>
    </>
  );
}
