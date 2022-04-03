/* eslint-disable react/jsx-no-duplicate-props */

import ContainedButton03 from "../../../commons/buttons/contained/03/ContainedButton03.container";
import TripWriteBanner from "../banner/TripWriteBanner.container";
import TripWriteBottomBar from "../bottomBar/TripWriteBottomBar.container";
import TripWriteNavigation from "../navigation/TripWriteNavigation.container";
import TripWriteLogList from "./list/TripWriteLogList.container";
import { useRouter } from "next/router";

import * as Log from "./TripWriteLog.styles";
import Point from "../../../commons/modals/chargePoint/ChargePoint.container";
import Alert from "../../../commons/modals/alert/Alert.container";
import TotalMoneyModal from "../../../commons/modals/ourTrips/totalMoney/TotalMoney.container";
export default function TripWriteLogUI(props) {
  const router = useRouter();
  return (
    <Log.Container>
      <TripWriteBanner />
      {props.alertModal && (
        <Alert
          onClickExit={props.onClickExitAlertModal}
          onClickSubmit={props.onClickSubmitAlertModal}
          contents={props.modalContents}
        />
      )}
      {props.pointModal && (
        <Point
          donation={true}
          userName={props.myData?.fetchUser.nickName}
          userPoint={props.myData?.fetchUser.point}
          pointSelect={props.pointSelect}
          onChangePoint={props.onChangePoint}
          onClickExit={() => props.setPointModal(false)}
          onClickSubmit={props.donation}
        />
      )}

      {props.totalMoneyModal && (
        <TotalMoneyModal
          onClickExit={props.onClickExitTotalMoneyModal}
          onClickSubmit={props.onClickSubmitTotalMoneyModal}
        />
      )}

      {props.isEdit ? (
        <TripWriteNavigation />
      ) : (
        <Log.Bar>
          {props.viewport > 767 && (
            <Log.MoveBack
              onClick={() => {
                router.push("/myTrips");
              }}
            >
              <img src="/img/mytrips-write-log1.png" />
              나의 여행 목록으로
            </Log.MoveBack>
          )}

          {/* prettier-ignore */}

          {props.isMine && (
            <Log.BtnGroup>
              {props.sharing ? (
                <div className="share" onClick={props.shareBtn}>
                  <img src="/img/mytrips-shared-icon.svg" />
                  우리의 여행에 공유됨
                </div>
              ) : (
                <div className="share" onClick={props.shareBtn}>
                  <img src="/img/mytrips-unshared-icon.svg" />
                  우리의 여행에 공유하기
                </div>
              )}
              <div
                onClick={() => {
                  router.push(`/myTrips/${router.query.scheduleId}/plans`);
                }}
              >
                수정
              </div>
              <div className="delete">
                <span>삭제</span>
              </div>
            </Log.BtnGroup>
          )}
        </Log.Bar>
      )}
      <Log.Contents>
        {props.viewport < 767 && (
          <Log.ToggleResponsive
            onClick={() => props.setResponsiveToggle((prev) => !prev)}
          />
        )}

        <Log.InnerWrap isEdit={props.isEdit} isShow={props.responsiveToggle}>
          <Log.PlanBox>
            {props.isEdit || (
              <>
                {props.viewport < 767 && (
                  <Log.XButton
                    onClick={() => props.setResponsiveToggle((prev) => !prev)}
                  >
                    X
                  </Log.XButton>
                )}
                <Log.UserInfo>
                  <img
                    src={
                      props.userData?.fetchSchedule?.user.url
                        ? `https://storage.cloud.google.com/${props.userData?.fetchSchedule?.user.url}`
                        : "/img/ourtrips-detail-usericon.png"
                    }
                  />
                  <Log.Name>
                    {props.userData?.fetchSchedule?.user.nickName}
                  </Log.Name>
                  <Log.Email>
                    {props.userData?.fetchSchedule?.user.email}
                  </Log.Email>
                  {/* prettier-ignore */}
                  {props.isMine || (
                    <ContainedButton03
                      content="포인트 후원하기"
                      size="small"
                      onClick={() => props.setPointModal(true)}
                    />
                  )}
                </Log.UserInfo>
                <Log.PlanBtnGroup>
                  <Log.moveBtn isMine={props.isMine}>전체 일정</Log.moveBtn>
                  <Log.moveBtn onClick={() => props.setTotalMoney(true)}>
                    전체 예산
                  </Log.moveBtn>
                </Log.PlanBtnGroup>
              </>
            )}
            <Log.PlanWrapper>
              {[1, 1, 1, 1].map((_, dayIndex) => (
                <Log.DayWrapper key={dayIndex}>
                  <Log.Day>{dayIndex + 1}일차</Log.Day>
                  <Log.ToggleImg
                    src="/img/mytrips-write-log2.png"
                    onClick={props.toggle(dayIndex)}
                  />
                  <Log.isShow isShow={props.isShow[dayIndex]}>
                    <TripWriteLogList
                      key={dayIndex}
                      index={dayIndex}
                      isEdit={props.isEdit}
                      saveButtonRef={props.saveButtonRef}
                    />
                  </Log.isShow>
                </Log.DayWrapper>
              ))}
            </Log.PlanWrapper>
          </Log.PlanBox>
        </Log.InnerWrap>
      </Log.Contents>
      {props.isEdit && (
        <TripWriteBottomBar saveButtonRef={props.saveButtonRef} />
      )}
    </Log.Container>
  );
}
