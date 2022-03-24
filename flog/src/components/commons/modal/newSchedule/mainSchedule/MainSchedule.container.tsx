import { useState } from "react";
import MyDatePicker from "../../../datePicker/DatePicker.container";
import * as M from "./MainSchedule.styles";

//  //상위 컴포넌트에 넣을 내용 - 신규 일정 생성
//  const [newScheduleModal, setNewScheduleModal] = useState(false);

//  const onClickNewScheduleModal = () => {
//    setNewScheduleModal(true);
//  };

//  const onClickExitNewScheduleModal = () => {
//    setNewScheduleModal(false);
//  };

//  const onClickSubmitNewScheduleModal = () => {
//    setNewScheduleModal(false);
//  };

// return(
//    <button onClick={onClickNewScheduleModal}>신규 일정 생성</button>
//    {newScheduleModal && (
//       <NewTripScheduleModal
//         onClickExit={onClickExitNewScheduleModal}
//         onClickSubmit={onClickSubmitNewScheduleModal}
//       />
//     )}
// )

export default function NewTripScheduleModal(props: any) {
  const [title, setTitle] = useState("");
  const [theme, setTheme] = useState("");
  const [people, setPeople] = useState("");

  const [isDateActive, setIsDateActive] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value && people && theme && isDateActive) {
      setIsButtonActive(true);
    }
  };

  const onChangeTheme = (event) => {
    setTheme(event.target.value);
    if (title && people && event.target.value && isDateActive) {
      setIsButtonActive(true);
    }
  };

  const onChangePeople = (event) => {
    setPeople(event.target.value);
    if (title && event.target.value && theme && isDateActive) {
      setIsButtonActive(true);
    }
  };

  return (
    <M.Container>
      <M.ModalWrapper>
        <M.Modal>
          <M.Exit>
            <img
              src="/img/Modal-exit.svg"
              alt="나가기버튼"
              onClick={props.onClickExit}
            />
          </M.Exit>
          <M.Title>신규 일정 생성</M.Title>

          <M.Wrap>
            <M.Label>제목</M.Label>
            <M.Input
              type="text"
              placeholder="제목을 입력하세요."
              onChange={onChangeTitle}
            ></M.Input>
          </M.Wrap>

          <M.Wrap>
            <M.Label>기간</M.Label>
            <MyDatePicker
              isDateActive={isDateActive}
              setIsDateActive={setIsDateActive}
              title={title}
              theme={theme}
              people={people}
              setIsButtonActive={setIsButtonActive}
            />
          </M.Wrap>

          <M.Wrap>
            <M.Label>테마</M.Label>
            <M.Select onChange={onChangeTheme}>
              <M.Option selected disabled>
                테마를 선택해주세요
              </M.Option>
              <M.Option value="혼자 여행">혼자 여행</M.Option>
              <M.Option value="우정 여행">우정 여행</M.Option>
              <M.Option value="커플 여행">커플 여행</M.Option>
              <M.Option value="가족 여행">가족 여행</M.Option>
              <M.Option value="반려동물 여행">반려동물 여행</M.Option>
            </M.Select>
          </M.Wrap>

          <M.Wrap>
            <M.Label>인원</M.Label>
            <M.Select onChange={onChangePeople}>
              <M.Option selected disabled>
                인원을 선택해주세요
              </M.Option>
              <M.Option value="1명">1명</M.Option>
              <M.Option value="2명">2명</M.Option>
              <M.Option value="3명">3명</M.Option>
              <M.Option value="4명">4명</M.Option>
              <M.Option value="단체 여행">단체 여행</M.Option>
            </M.Select>
          </M.Wrap>

          <M.ButtonWrap>
            <M.ModalCloseButton
              onClick={props.onClickSubmit}
              isButtonActive={isButtonActive}
              disabled={!isButtonActive}
            >
              생성하기
            </M.ModalCloseButton>
          </M.ButtonWrap>
        </M.Modal>
      </M.ModalWrapper>
    </M.Container>
  );
}
