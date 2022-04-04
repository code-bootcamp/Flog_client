import { useState } from "react";
import ContainedButton01 from "../../../buttons/contained/01/ContainedButton01.container";
import * as M from "./TotalMoney.styles";

export default function TotalMoneyModal(props) {
  return (
    <M.Container>
      <M.ModalWrapper>
        <M.Modal>
          <M.Title>
            <img
              src="/img/icon-modal-exit.svg"
              alt="나가기버튼"
              onClick={props.onClickExit}
            />
          </M.Title>

          <ContainedButton01
            content="생성"
            size="large"
            onClick={props.onClickTotalMoneyModal}
            responsive={true}
          />
        </M.Modal>
      </M.ModalWrapper>
    </M.Container>
  );
}
