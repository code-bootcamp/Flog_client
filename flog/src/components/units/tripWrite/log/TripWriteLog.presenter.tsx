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
import TripWriteLogEditor from "./editor/TripWriteLogEditor.container";
import OurTripDetail from "../../ourTrip/detail/OurTripDetail.container";
import TotalSchedulesModal from "../../../commons/modals/ourTrips/totalSchedules/TotalSchedules.container";
export default function TripWriteLogUI(props) {
  const router = useRouter();
  return (
    <Log.Container>
      <Log.darkScreen
        onClick={() => props.changePRST(1)}
        darkMode={props.togglePRST[1]}
      ></Log.darkScreen>
      <TripWriteBanner />
      {props.modalContents && (
        <Alert
          onClickExit={() => props.setModalContents("")}
          onClickSubmit={() => props.setModalContents("")}
          contents={props.modalContents}
        />
      )}
      {props.togglePRST[0] && (
        <Point
          donation={true}
          userName={props.myData?.fetchUser.nickName}
          userPoint={props.myData?.fetchUser.point}
          onClickExit={() => props.changePRST(0)}
          onClickSubmitDonation={props.donationFunction}
          setPoint={props.setPoint}
          point={props.point}
        />
      )}

      {props.togglePRST[3] && (
        <TotalSchedulesModal
          scheduleId={props.scheduleId}
          onClickExit={() => props.changePRST(3)}
          onClickSubmit={() => props.changePRST(3)}
        />
      )}

      {props.togglePRST[4] && (
        <TotalMoneyModal
          scheduleId={props.scheduleId}
          onClickExit={() => props.changePRST(4)}
          onClickSubmit={() => props.changePRST(4)}
        />
      )}

      {props.isEdit ? (
        <TripWriteNavigation />
      ) : (
        <Log.Bar mine={props.isMine}>
          <Log.MoveBack
            onClick={() => {
              router.push("/myTrips");
            }}
          >
            <img src="/img/mytrips-write-log1.png" />
            {props.isMine ? "나의 여행 목록" : "우리의 여행 목록"}
          </Log.MoveBack>

          {props.isMine && (
            <Log.BtnGroup>
              {props.togglePRST[2] ? (
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
              <div className="delete" onClick={props.onClickDelete}>
                <span>삭제</span>
              </div>
            </Log.BtnGroup>
          )}
        </Log.Bar>
      )}
      <Log.Contents darkMode={props.togglePRST[1]}>
        <Log.ToggleResponsive onClick={() => props.changePRST(1)} />
        <Log.InnerWrap>
          {(props.viewport > 767 || props.togglePRST[1]) && (
            <Log.LogListWrapper>
              <TripWriteLogList
                changePRST={props.changePRST}
                isMine={props.isMine}
                isEdit={props.isEdit}
                setIsShow={props.setIsShow}
                userData={props.userData}
                isShow={props.isShow}
                setSelected={props.setSelected}
              />
            </Log.LogListWrapper>
          )}

          <Log.EditorWrapper>
            {props.userData?.fetchSchedule?.tripdates
              .split(";")
              .map((el: any, index: number) => (
                <>
                  {props.isEdit ? (
                    <TripWriteLogEditor
                      index={index}
                      isShow={props.isShow[index]}
                      saveButtonRef={props.saveButtonRef}
                      BoardData={props.BoardData?.fetchBoard[index]}
                      selected={props.selected[index]}
                    />
                  ) : (
                    <OurTripDetail
                      index={index}
                      isShow={props.isShow[index]}
                      BoardData={props.BoardData?.fetchBoard[index]}
                      selected={props.selected[index]}
                    />
                  )}
                </>
              ))}
          </Log.EditorWrapper>
        </Log.InnerWrap>
      </Log.Contents>

      {props.isEdit && (
        <TripWriteBottomBar saveButtonRef={props.saveButtonRef} />
      )}
    </Log.Container>
  );
}
