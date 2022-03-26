import { Fragment, useState } from "react";
import ContainedButton01 from "../../../buttons/contained/01/ContainedButton01.container";
import MyDatePicker from "../../../datePickers/DatePicker.container";
import OutlinedInput01 from "../../../inputs/outlined/01/OutlinedInput01.container";

import * as M from "./MainSchedule.styles";
import { INewTripScheduleModal } from "./MainSchedule.types";

//  // 상위 컴포넌트에 넣을 내용 - 신규 일정 생성
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

export default function NewTripScheduleModal(props: INewTripScheduleModal) {
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

  const tripTheme = [
    { value: "혼자 여행", text: "혼자 여행" },
    { value: "우정 여행", text: "우정 여행" },
    { value: "커플 여행", text: "커플 여행" },
    { value: "가족 여행", text: "가족 여행" },
    { value: "반려동물 여행", text: "반려동물 여행" },
  ];

  const tripPeople = [
    { value: "ONE", text: "1명" },
    { value: "TWO", text: "2명" },
    { value: "THREE", text: "3명" },
    { value: "FOUR", text: "4명" },
    { value: "GROUP", text: "단체 여행" },
  ];

  return (
    <M.Container>
      <M.ModalWrapper>
        <M.Modal>
          <M.Exit>
            <img
              src="/img/icon-modal-exit.svg"
              alt="나가기버튼"
              onClick={props.onClickExit}
            />
          </M.Exit>
          <M.Contents>
            <M.Title>신규 일정 생성</M.Title>

            <M.Wrap>
              <M.Label>제목</M.Label>
              <OutlinedInput01
                placeholder="제목을 입력하세요."
                type="text"
                onChange={onChangeTitle}
              />
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
                {tripTheme.map((el) => (
                  <Fragment key={el.value}>
                    <M.Option value={el.value}>{el.text}</M.Option>
                  </Fragment>
                ))}
              </M.Select>
            </M.Wrap>

            <M.Wrap>
              <M.Label>인원</M.Label>
              <M.Select onChange={onChangePeople}>
                <M.Option selected disabled>
                  인원을 선택해주세요
                </M.Option>
                {tripPeople.map((el) => (
                  <Fragment key={el.value}>
                    <M.Option value={el.value}>{el.text}</M.Option>
                  </Fragment>
                ))}
              </M.Select>
            </M.Wrap>
          </M.Contents>
          <ContainedButton01
            content="생성하기"
            size="large"
            onClick={props.onClickSubmit}
            disabled={!isButtonActive}
          />
        </M.Modal>
      </M.ModalWrapper>
    </M.Container>
  );
}
