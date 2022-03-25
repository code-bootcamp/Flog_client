import ContainedButton01 from "../../buttons/contained/01/ContainedButton01.container";
import * as M from "./Exit.styles";
import { IExitProps } from "./Exit.types";

// //상위 컴포넌트에 넣을 내용 - exit
// const [exitModal, setExitModal] = useState(false);

// const onClickExitModal = () => {
//   setExitModal(true);
// };

// const onClickExitExitModal = () => {
//   setExitModal(false);
// };

// const onClickSubmitExitModal = () => {
//   setExitModal(false);
// };

// return (
// <button onClick={onClickExitModal}>exit</button>
//    {exitModal && (
//       <Exit
//         onClickExit={onClickExitExitModal}
//         onClickSubmit={onClickSubmitExitModal}
//       />
//     )}
// )

export default function Exit(props: IExitProps) {
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
            현재 창을 나가시면 일정이 저장되지 않습니다. 정말 나가시겠습니까?
          </M.Contents>
          <ContainedButton01
            content="네, 나갈래요"
            size="medium"
            onClick={props.onClickSubmit}
          />
        </M.Modal>
      </M.ModalWrapper>
    </M.Container>
  );
}
