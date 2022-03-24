import { useState } from "react";
import * as M from "./DetailSchedule.styles";

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

export default function NewDetailScheduleModal(props: any) {
  const [title, setTitle] = useState("");
  const [memo, setMemo] = useState("");

  const [isButtonActive, setIsButtonActive] = useState(false);

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value) {
      setIsButtonActive(true);
    }
  };

  const onChangeMemo = (event) => {
    setMemo(event.target.value);
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
          <M.Title>세부 일정 생성</M.Title>

          <M.Wrap>
            <M.Label>장소</M.Label>
            <M.Input
              type="text"
              placeholder="장소를 입력하세요."
              onChange={onChangeTitle}
            ></M.Input>
          </M.Wrap>

          <M.Wrap>
            <M.Label style={{ visibility: "hidden" }}>메모</M.Label>
            <M.MemoInput
              placeholder="(선택) 메모를 입력해주세요."
              onChange={onChangeMemo}
            ></M.MemoInput>
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
