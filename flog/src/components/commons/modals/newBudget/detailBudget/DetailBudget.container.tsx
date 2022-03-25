import { useState } from "react";
import ContainedButton01 from "../../../buttons/contained/01/ContainedButton01.container";
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
  const [startHour, setStartHour] = useState(0);
  const [startMinutes, setStartMinutes] = useState(0);

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

  const onChangeStartHour = (event) => {
    setStartHour(event.target.value);
  };

  const onChangeStartMinutes = (event) => {
    setStartMinutes(event.target.value);
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
              src="/img/icon-modal-exit.svg"
              alt="나가기버튼"
              onClick={props.onClickExit}
            />
          </M.Exit>
          <M.Contents>
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
              <M.Label style={{ visibility: "hidden" }}>메모</M.Label>
              <M.MemoInput
                placeholder="(선택) 메모를 입력해주세요."
                onChange={onChangeMemo}
              ></M.MemoInput>
            </M.Wrap>
          </M.Contents>

          <ContainedButton01
            content="저장하기"
            size="large"
            onClick={props.onClickSubmit}
            disabled={!isButtonActive}
          />
        </M.Modal>
      </M.ModalWrapper>
    </M.Container>
  );
}
