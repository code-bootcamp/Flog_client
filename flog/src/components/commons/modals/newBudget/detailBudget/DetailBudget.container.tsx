import { useState } from "react";
import * as M from "./DetailBudget.styles";

// //상위 컴포넌트에 넣을 내용 - budget
// const [detailBudgetModal, setDetailBudgetModal] = useState(false);

// const onClickDetailBudgetModal = () => {
//   setDetailBudgetModal(true);
// };

// const onClickExitDetailBudgetModal = () => {
//   setDetailBudgetModal(false);
// };

// const onClickSubmitDetailBudgetModal = () => {
//   setDetailBudgetModal(false);
// };

// return(
//    <button onClick={onClickDetailBudgetModal}>세부 예산 생성</button>
//    {detailBudgetModal && (
//       <DetailBudget
//         onClickExit={onClickExitDetailBudgetModal}
//         onClickSubmit={onClickSubmitDetailBudgetModal}
//       />
//     )}
// )

export default function DetailBudget(props: any) {
  const [contents, setContents] = useState("");
  const [budget, setBudget] = useState(0);
  const [memo, setMemo] = useState("");

  const [isButtonActive, setIsButtonActive] = useState(false);

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value && budget) {
      setIsButtonActive(true);
    }
  };

  const onChangeBudget = (event) => {
    setBudget(event.target.value);
    if (event.target.value && contents) {
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
          <M.Title>여행 준비</M.Title>
          <M.Wrap>
            <M.Category></M.Category>
            <M.CategoryLabel></M.CategoryLabel>
          </M.Wrap>
          <M.Wrap>
            <M.Label>내용</M.Label>
            <M.Input
              type="text"
              placeholder="내용을 입력하세요."
              onChange={onChangeContents}
            ></M.Input>
          </M.Wrap>

          <M.Wrap>
            <M.Label>금액</M.Label>
            <M.Input
              type="number"
              min="0"
              placeholder="금액을 입력하세요."
              onChange={onChangeBudget}
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
              저장하기
            </M.ModalCloseButton>
          </M.ButtonWrap>
        </M.Modal>
      </M.ModalWrapper>
    </M.Container>
  );
}
