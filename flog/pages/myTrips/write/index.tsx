import { useState } from "react";
import NewTripScheduleModal from "../../../src/components/commons/modals/newSchedule/mainSchedule/MainSchedule.container";

export default function MyTripsWritePage() {
  // 상위 컴포넌트에 넣을 내용 - 신규 일정 생성
  const [newScheduleModal, setNewScheduleModal] = useState(true);

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
      "======",
      "여행테마 :",
      isThemeSelect,
      "======",
      "인원 수 :",
      isPeopleSelect,
      "======",
      "시작일 :",
      startDate,
      "======",
      "종료일 :",
      endDate
    );
  };

  return (
    <>
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
    </>
  );
}
