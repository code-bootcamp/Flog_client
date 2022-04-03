import { useState } from "react";
import ContainedButton01 from "../../../buttons/contained/01/ContainedButton01.container";
import * as M from "./TotalMoney.styles";

export default function TotalMoneyModal(props) {
  // // 상위 컴포넌트에 넣을 내용 - MapModal
  // const [totalMoney, setTotalMoney] = useState(false);

  // const onClickTotalMoneyModal = () => {
  //   setTotalMoney(true);
  // };

  // const onClickExitTotalMoneyModal = () => {
  //   setTotalMoney(false);
  // };

  // const onClickSubmitTotalMoneyModal = () => {
  //   setTotalMoney(false);
  // };

  // return (
  // <button onClick={onClickTotalMoneyModal}>map</button>
  //    {totalMoneyModal && (
  //       <TotalMoneyModal
  //         onClickExit={onClickExitTotalMoneyModal}
  //         onClickSubmit={onClickSubmitTotalMoneyModal}
  //       />
  //     )}
  // )

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
