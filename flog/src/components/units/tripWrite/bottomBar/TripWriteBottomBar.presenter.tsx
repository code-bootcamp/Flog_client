import * as Write from "./TripWriteBottomBar.styles";
import ContainedButton01 from "../../../commons/buttons/contained/01/ContainedButton01.container";
import OutlinedButton01 from "../../../commons/buttons/outlined/01/OutlinedButton01.container";

export default function TripWriteBottomBarUI(props) {
  return (
    <Write.Container>
      <Write.InnerWrap>
        <Write.ExitBox>
          <Write.ExitButton onClick={props.onClickExit}>
            <span>나가기</span>
          </Write.ExitButton>
        </Write.ExitBox>
        <Write.SubmitBox>
          <OutlinedButton01
            content="이전"
            size="small"
            onClick={props.onClickMoveToPrev}
          />
          <ContainedButton01
            content="다음"
            size="small"
            onClick={props.onClickMoveToNext}
          />
        </Write.SubmitBox>
      </Write.InnerWrap>
    </Write.Container>
  );
}
