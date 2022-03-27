import { useState } from "react";
import ContainedButton01 from "../../../buttons/contained/01/ContainedButton01.container";
import MyDatePicker from "../../../datePickers/DatePicker.container";
import Dropdown02 from "../../../dropdowns/02/Dropdown02.container";
import Dropdown03 from "../../../dropdowns/03/Dropdown03.container";
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

export default function NewTripScheduleModal(props) {
  // const [title, setTitle] = useState("");

  // const [isThemeSelect, setIsThemeSelect] = useState("테마를 선택해주세요");
  // const [isThemeActive, setIsThemeActive] = useState(false);

  // const [isPeopleSelect, setIsPeopleSelect] = useState("인원을 선택해주세요");
  // const [isPeopleActive, setIsPeopleActive] = useState(false);

  // const [isDateActive, setIsDateActive] = useState(false);
  // const [isButtonActive, setIsButtonActive] = useState(false);

  const onChangeTitle = (event) => {
    props.setTitle(event.target.value);
    if (
      event.target.value &&
      props.isThemeSelect &&
      props.isPeopleSelect &&
      props.isDateActive
    ) {
      props.setIsButtonActive(true);
    }
  };

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
                isDateActive={props.isDateActive}
                setIsDateActive={props.setIsDateActive}
                title={props.title}
                theme={props.isThemeSelect}
                people={props.isPeopleSelect}
                setIsButtonActive={props.setIsButtonActive}
                startDate={props.startDate}
                endDate={props.endDate}
                setEndDate={props.setEndDate}
                setStartDate={props.setStartDate}
              />
            </M.Wrap>

            <M.Wrap>
              <M.Label>테마</M.Label>

              <Dropdown02
                title={props.title}
                isDateActive={props.isDateActive}
                isThemeSelect={props.isThemeSelect}
                isPeopleSelect={props.isPeopleSelect}
                setIsButtonActive={props.setIsButtonActive}
                setIsThemeSelect={props.setIsThemeSelect}
                isThemeActive={props.isThemeActive}
                setIsThemeActive={props.setIsThemeActive}
              />
            </M.Wrap>

            <M.Wrap>
              <M.Label>인원</M.Label>
              <Dropdown03
                title={props.title}
                isDateActive={props.isDateActive}
                isThemeSelect={props.isThemeSelect}
                setIsButtonActive={props.setIsButtonActive}
                isPeopleSelect={props.isPeopleSelect}
                setIsPeopleSelect={props.setIsPeopleSelect}
                isPeopleActive={props.isPeopleActive}
                setIsPeopleActive={props.setIsPeopleActive}
              />
            </M.Wrap>
          </M.Contents>
          <ContainedButton01
            content="생성하기"
            size="large"
            onClick={props.onClickSubmit}
            disabled={!props.isButtonActive}
          />
        </M.Modal>
      </M.ModalWrapper>
    </M.Container>
  );
}
