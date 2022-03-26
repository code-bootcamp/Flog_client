import ContainedButton01 from "../../buttons/contained/01/ContainedButton01.container";
import * as M from "./ChargePoint.styles";
import { IPointProps } from "./ChargePoint.types";

//  //상위 컴포넌트에 넣을 내용 - point
// const [pointModal, setPointModal] = useState(false);
//   const [point, setPoint] = useState(0);
//   const [pointSelect, setPointSelect] = useState(true);

//   const onClickPointModal = () => {
//     setPointModal(true);
//   };

//   const onClickExitPointModal = () => {
//     setPointModal(false);
//   };

//   const onClickSubmitPointModal = () => {
//     setPointModal(false);
//   };

//   const onChangePoint = (event) => {
//     setPoint(event.target.value);
//     setPointSelect(false);
//   };

// return(
// <button onClick={onClickPointModal}>포인트 후원하기</button>
// {pointModal && (
//   <Point
//     onClickExit={onClickExitPointModal}
//     onClickSubmit={onClickSubmitPointModal}
//     onChangePoint={onChangePoint}
//     pointSelect={pointSelect}
//   />
// )}
// )

export default function Point(props: IPointProps) {
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
          </M.Contents>
          <ContainedButton01
            content="후원하기"
            size="large"
            onClick={props.onClickSubmit}
            disabled={props.pointSelect}
          />
        </M.Modal>
      </M.ModalWrapper>
    </M.Container>
  );
}
