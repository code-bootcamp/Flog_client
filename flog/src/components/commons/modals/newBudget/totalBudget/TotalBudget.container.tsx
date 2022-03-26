import ContainedButton01 from "../../../buttons/contained/01/ContainedButton01.container";
import * as M from "./TotalBudget.styles";
import { ITotalBudget } from "./TotalBudget.types";

//  // 상위 컴포넌트에 넣을 내용 - total Budget
//  const [totalBudgetModal, setTotalBudgetModal] = useState(false);
//  const [totalBuget, setTotalBudget] = useState(0);
//  const [budgetSelect, setBudgetSelect] = useState(true);

//  const onClickTotalBudgetModal = () => {
//    setTotalBudgetModal(true);
//  };

//  const onClickExitTotalBudgetModal = () => {
//    setTotalBudgetModal(false);
//  };

//  const onClickSubmitTotalBudgetModal = () => {
//    setTotalBudgetModal(false);
//  };

//  const onChangeTotalBudget = (event) => {
//    setTotalBudget(event.target.value);
//    setBudgetSelect(false);
//  };

// return(
// <button onClick={onClickTotalBudgetModal}>예산 설정하기</button>
// {totalBudgetModal && (
//   <TotalBudget
//     onClickExit={onClickExitTotalBudgetModal}
//     onClickSubmit={onClickSubmitTotalBudgetModal}
//     onChangeTotalBudget={onChangeTotalBudget}
//     budgetSelect={budgetSelect}
//   />
// )}

export default function TotalBudget(props: ITotalBudget) {
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
            <M.Title>예산 설정</M.Title>

            <M.Input
              placeholder="예산을 설정해주세요"
              type="number"
              onChange={props.onChangeTotalBudget}
            />
          </M.Contents>
          <ContainedButton01
            content="확인"
            size="large"
            onClick={props.onClickSubmit}
            disabled={props.budgetSelect}
          />
        </M.Modal>
      </M.ModalWrapper>
    </M.Container>
  );
}
