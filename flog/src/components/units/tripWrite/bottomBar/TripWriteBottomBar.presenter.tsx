import * as Write from "./TripWriteBottomBar.styles";
import ContainedButton01 from "../../../commons/buttons/contained/01/ContainedButton01.container";
import OutlinedButton01 from "../../../commons/buttons/outlined/01/OutlinedButton01.container";
import { ITripWriteBottomBarUIProps } from "./TripWriteBottomBar.types";
import Alert from "../../../commons/modals/alert/Alert.container";

export default function TripWriteBottomBarUI(
  props: ITripWriteBottomBarUIProps
) {
  return (
    <>
      {props.alertModal && (
        <Alert
          onClickExit={props.onClickExitAlertModal}
          onClickSubmit={props.onClickSubmitAlertModal}
          contents={props.modalContents}
        />
      )}
      <Write.Container>
        <Write.InnerWrap>
          <Write.ExitBox>
            <Write.ExitButton onClick={props.moveToPage("/myTrips")}>
              <span>나가기</span>
            </Write.ExitButton>
          </Write.ExitBox>
          <Write.SubmitBox>
            {props.router.asPath.includes("plans") && (
              <ContainedButton01
                content="다음"
                size="small"
                onClick={props.onClickNextPlans}
              />
            )}
            {props.router.asPath.includes("money") && (
              <>
                <OutlinedButton01
                  content="이전"
                  size="small"
                  onClick={props.onClickBackMoney}
                />
                <ContainedButton01
                  content="다음"
                  size="small"
                  onClick={props.onClickNextMoney}
                />
              </>
            )}
            {props.router.asPath.includes("log") && (
              <>
                <OutlinedButton01
                  content="이전"
                  size="small"
                  onClick={props.onClickBackLog}
                />
                <ContainedButton01
                  content="저장하기"
                  size="small"
                  onClick={props.onClickSubmit}
                />
              </>
            )}
          </Write.SubmitBox>
        </Write.InnerWrap>
      </Write.Container>
    </>
  );
}
