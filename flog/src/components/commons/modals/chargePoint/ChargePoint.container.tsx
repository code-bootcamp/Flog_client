import { useState } from "react";
import { insertCommaPrice } from "../../../../commons/utils/insertComma";
import ContainedButton01 from "../../buttons/contained/01/ContainedButton01.container";
import Dropdown10 from "../../dropdowns/10-point/Dropdown10.container";
import * as M from "./ChargePoint.styles";
import { IPointProps } from "./ChargePoint.types";

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
            <M.Title>
              {props.donation ? "포인트 후원하기" : "포인트 충전하기"}
            </M.Title>
            <M.UserPoint>
              현재 {props.userName}님의 포인트는{" "}
              <span style={{ color: "#58BD97" }}>
                {insertCommaPrice(props.userPoint)} P
              </span>{" "}
              입니다
            </M.UserPoint>
            <M.Wrap>
              <Dropdown10 setPoint={props.setPoint} />
            </M.Wrap>
          </M.Contents>
          <ContainedButton01
            content={props.donation ? "후원하기" : "충전하기"}
            size="large"
            onClick={
              props.donation
                ? props.onClickSubmitDonation
                : props.onClickSubmitPointModal
            }
            disabled={props.point}
            responsive={true}
          />
        </M.Modal>
      </M.ModalWrapper>
    </M.Container>
  );
}
