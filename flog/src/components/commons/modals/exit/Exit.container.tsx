import * as M from "./Exit.styles";

// //상위 컴포넌트에 넣을 내용 - alert
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

export default function Exit(props) {
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
          <M.Contents>
            현재 창을 나가시면 일정이 저장되지 않습니다. 정말 나가시겠습니까?
          </M.Contents>

          <M.ButtonWrap>
            <M.ModalCloseButton onClick={props.onClickSubmit}>
              네, 나갈래요
            </M.ModalCloseButton>
          </M.ButtonWrap>
        </M.Modal>
      </M.ModalWrapper>
    </M.Container>
  );
}
