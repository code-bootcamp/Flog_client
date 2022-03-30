import { insertCommaPrice } from "../../../../commons/utils/insertComma";
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
// <button onClick={onClickPointModal}>포인트 충전하기</button>
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
            <M.Title>포인트 충전하기</M.Title>
            <M.UserPoint>
              현재 {props.userName}님의 포인트는{" "}
              <span style={{ color: "#58BD97" }}>
                {insertCommaPrice(props.userPoint)}
              </span>{" "}
              입니다
            </M.UserPoint>
            <M.Wrap>
              <M.Select onChange={props.onChangePoint}>
                <M.Option selected disabled>
                  금액 입력
                </M.Option>
                <M.Option value="500">500</M.Option>
                <M.Option value="1000">1000</M.Option>
                <M.Option value="2000">2000</M.Option>
                <M.Option value="3000">3000</M.Option>
                <M.Option value="4000">4000</M.Option>
                <M.Option value="5000">5000</M.Option>
                <M.Option value="10000">10000</M.Option>
              </M.Select>
            </M.Wrap>
          </M.Contents>
          <ContainedButton01
            content="충전하기"
            size="large"
            onClick={props.onClickSubmit}
            disabled={props.pointSelect}
          />
        </M.Modal>
      </M.ModalWrapper>
    </M.Container>
  );
}
