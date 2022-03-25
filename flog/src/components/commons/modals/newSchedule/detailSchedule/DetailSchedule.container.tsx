import { useState } from "react";
import ContainedButton01 from "../../../buttons/contained/01/ContainedButton01.container";
import OutlinedInput01 from "../../../inputs/outlined/01/OutlinedInput01.container";
import * as M from "./DetailSchedule.styles";
import { INewDetailScheduleModalProps } from "./DetailSchedule.types";

// //상위 컴포넌트에 넣을 내용 - 세부 일정 생성
// const [detailScheduleModal, setDetailScheduleModal] = useState(false);

// const onClickDetailScheduleModal = () => {
//   setDetailScheduleModal(true);
// };

// const onClickExitDetailScheduleModal = () => {
//   setDetailScheduleModal(false);
// };

// const onClickSubmitDetailScheduleModal = () => {
//   setDetailScheduleModal(false);
// };

// return(
//    <button onClick={onClickDetailScheduleModal}>세부 일정 생성</button>
//    {detailScheduleModal && (
//       <NewDetailScheduleModal
//         onClickExit={onClickExitDetailScheduleModal}
//         onClickSubmit={onClickSubmitDetailScheduleModal}
//       />
//     )}
// )

export default function NewDetailScheduleModal(
  props: INewDetailScheduleModalProps
) {
  const [title, setTitle] = useState("");

  const [startHour, setStartHour] = useState(0);
  const [startMinutes, setStartMinutes] = useState(0);
  const [takenHour, setTakenHour] = useState(0);
  const [takenMinutes, setTakenMinutes] = useState(0);

  const [memo, setMemo] = useState("");

  const [isButtonActive, setIsButtonActive] = useState(false);

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (
      event.target.value &&
      startHour &&
      startMinutes &&
      takenHour &&
      takenMinutes
    ) {
      setIsButtonActive(true);
    }
  };

  const onChangeMemo = (event) => {
    setMemo(event.target.value);
  };

  const onChangeStartHour = (event) => {
    setStartHour(event.target.value);
    if (
      title &&
      event.target.value &&
      startMinutes &&
      takenHour &&
      takenMinutes
    ) {
      setIsButtonActive(true);
    }
  };

  const onChangeStartMinutes = (event) => {
    setStartMinutes(event.target.value);
    if (title && startHour && event.target.value && takenHour && takenMinutes) {
      setIsButtonActive(true);
    }
  };

  const onChangeTakenHour = (event) => {
    setTakenHour(event.target.value);
    if (title && startHour && event.target.value && takenHour && takenMinutes) {
      setIsButtonActive(true);
    }
  };

  const onChangeTakenMinutes = (event) => {
    setTakenMinutes(event.target.value);
    if (title && startHour && startMinutes && takenHour && event.target.value) {
      setIsButtonActive(true);
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
            <M.Title>세부 일정 생성</M.Title>

            <M.Wrap>
              <M.Label>장소</M.Label>

              <OutlinedInput01
                placeholder="장소를 입력하세요"
                type="text"
                onChange={onChangeTitle}
              />
            </M.Wrap>

            <M.Wrap>
              <M.Label>시작</M.Label>
              <M.TimeInputWrap>
                <M.TimeInput
                  type="number"
                  placeholder="시"
                  onChange={onChangeStartHour}
                ></M.TimeInput>
                <M.TimeInput
                  type="number"
                  placeholder="분"
                  onChange={onChangeStartMinutes}
                ></M.TimeInput>
              </M.TimeInputWrap>
            </M.Wrap>

            <M.Wrap>
              <M.Label>소요</M.Label>
              <M.TimeInputWrap>
                <M.TimeInput
                  type="number"
                  placeholder="시"
                  onChange={onChangeTakenHour}
                ></M.TimeInput>
                <M.TimeInput
                  type="number"
                  placeholder="분"
                  onChange={onChangeTakenMinutes}
                ></M.TimeInput>
              </M.TimeInputWrap>
            </M.Wrap>

            <M.Wrap>
              <M.Label style={{ visibility: "hidden" }}>메모</M.Label>
              <M.MemoInput
                placeholder="(선택) 메모를 입력해주세요."
                onChange={onChangeMemo}
              ></M.MemoInput>
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
