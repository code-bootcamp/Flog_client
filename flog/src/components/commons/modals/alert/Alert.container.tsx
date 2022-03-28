import ContainedButton01 from "../../buttons/contained/01/ContainedButton01.container";
import * as M from "./Alert.styles";
import { IAlertProps } from "./Alert.types";

// //상위 컴포넌트에 넣을 내용 - alert
// const [alertModal, setAlertModal] = useState(false);
// const [modalContents, setModalContents] = useState("");

// setModalContents("모달에 넣을 내용 입력")

// const onClickAlertModal = () => {
//   setAlertModal(true);
// };

// const onClickExitAlertModal = () => {
//   setAlertModal(false);
// };

// const onClickSubmitAlertModal = () => {
//   setAlertModal(false);
// };

// return (
// <button onClick={onClickAlertModal}>exit</button>
//    {alertModal && (
//       <Alert
//         onClickExit={onClickExitAlertModal}
//         onClickSubmit={onClickSubmitAlertModal}
//         contents={modalContents}
//       />
//     )}
// )

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
