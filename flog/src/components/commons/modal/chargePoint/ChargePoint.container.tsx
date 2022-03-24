import * as M from "./ChargePoint.styles";

//  //상위 컴포넌트에 넣을 내용 - point
//  const [pointModal, setPointModal] = useState(false);

//  const onClickPointModal = () => {
//    setPointModal(true);
//  };

//  const onClickExitPointModal = () => {
//    setPointModal(false);
//  };

//  const onClickSubmitPointModal = () => {
//    setPointModal(false);
//  };

// return(
//    <button onClick={onClickPointModal}>포인트 후원하기</button>
//    {pointModal && (
//       <Point
//         onClickExit={onClickExitPointModal}
//         onClickSubmit={onClickSubmitPointModal}
//       />
//     )}
// )

export default function Point(props) {
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
          <M.Title>포인트 후원하기</M.Title>
          <M.UserPoint>
            현재 이조참판님의 포인트는{" "}
            <span style={{ color: "#58BD97" }}>1,200</span> 입니다
          </M.UserPoint>
          <M.Wrap>
            <M.Select onChange={props.onChangePoint}>
              <M.Option selected disabled>
                금액 입력
              </M.Option>
              <M.Option value="100">100</M.Option>
              <M.Option value="200">200</M.Option>
              <M.Option value="300">300</M.Option>
            </M.Select>
          </M.Wrap>

          <M.ButtonWrap>
            <M.ModalCloseButton onClick={props.onClickSubmit}>
              후원하기
            </M.ModalCloseButton>
          </M.ButtonWrap>
        </M.Modal>
      </M.ModalWrapper>
    </M.Container>
  );
}
