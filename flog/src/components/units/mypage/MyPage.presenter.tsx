import { insertCommaPrice } from "../../../commons/utils/insertComma";
import ContainedButton01 from "../../commons/buttons/contained/01/ContainedButton01.container";
import OutlinedButton04 from "../../commons/buttons/outlined/04/OutlinedButton04.container";
import Alert from "../../commons/modals/alert/Alert.container";
import Point from "../../commons/modals/chargePoint/ChargePoint.container";
import * as My from "./MyPage.styles";
import { IMyPageUIProps } from "./MyPage.types";

export default function MyPageUI(props: IMyPageUIProps) {
  console.log(props.data);
  return (
    <My.Container>
      <My.Banner>
        <My.BannerImage></My.BannerImage>
        <My.BannerButton>
          <OutlinedButton04
            content="커버 변경"
            size="large"
            onClick={props.onClickCoverChange}
          />
        </My.BannerButton>
      </My.Banner>
      <My.UserInfo>
        <My.UserImage>
          {props.data?.fetchUser?.url ? (
            <div>
              <img src={props.data?.fetchUser?.url} />
            </div>
          ) : (
            <My.NoImage>
              <img src="/img/icon-mypage-noimage.svg" />
            </My.NoImage>
          )}
        </My.UserImage>
        <My.UserName>
          <h3 className="name">{props.data?.fetchUser?.nickName} 님</h3>
          <p className="email">{props.data?.fetchUser?.email}</p>
        </My.UserName>
      </My.UserInfo>{" "}
      <My.BoxWrap>
        <My.PointBox>
          <My.PointText>내 포인트</My.PointText>
          <My.Amount>
            <span>{insertCommaPrice(props.data?.fetchUser?.point)} P</span>
          </My.Amount>
          <My.PointButton>
            <ContainedButton01
              content="충전하기"
              size="large"
              onClick={props.onClickPointModal}
            />
          </My.PointButton>
        </My.PointBox>
        <My.MenuBox>
          <My.MenuList>
            <li>
              <button onClick={props.onClickMoveToDetail("/mypage/points")}>
                포인트 이용내역
              </button>
            </li>
            <li>
              <button onClick={props.onClickNoLink}>결제수단 관리</button>
            </li>
            <li>
              <button onClick={props.onClickMoveToDetail("/mypage/useredit")}>
                계정 정보 관리
              </button>
            </li>
            <li>
              <button onClick={props.onClickNoLink}>내 문의 내역</button>
            </li>
            <li>
              <button onClick={props.onClickNoLink}>공지 사항</button>
            </li>
            <li>
              <button onClick={props.onClickNoLink}>회원 탈퇴</button>
            </li>
          </My.MenuList>
        </My.MenuBox>
      </My.BoxWrap>
      {props.pointModal && (
        <Point
          onClickExit={props.onClickExitPointModal}
          onClickSubmit={props.onClickSubmitPointModal}
          onChangePoint={props.onChangePoint}
          pointSelect={props.pointSelect}
          userName={props.data?.fetchUser?.nickName}
          userPoint={props.data?.fetchUser?.point}
        />
      )}
      {props.alertModal && (
        <Alert
          onClickExit={props.onClickExitAlertModal}
          onClickSubmit={props.onClickSubmitAlertModal}
          contents={props.modalContents}
        />
      )}
    </My.Container>
  );
}
