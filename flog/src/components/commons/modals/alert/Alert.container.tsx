import ContainedButton01 from "../../buttons/contained/01/ContainedButton01.container";
import * as M from "./Alert.styles";
import { IAlertProps } from "./Alert.types";

export default function Alert(props: IAlertProps) {
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
          <M.Contents>{props.contents ? props.contents : ""}</M.Contents>
          <ContainedButton01
            content="닫기"
            size="medium"
            onClick={props.onClickSubmit}
          />
        </M.Modal>
      </M.ModalWrapper>
    </M.Container>
  );
}
