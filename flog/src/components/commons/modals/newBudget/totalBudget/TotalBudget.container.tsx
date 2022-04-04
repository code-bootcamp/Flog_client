import ContainedButton01 from "../../../buttons/contained/01/ContainedButton01.container";
import * as M from "./TotalBudget.styles";
import { ITotalBudget } from "./TotalBudget.types";

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
