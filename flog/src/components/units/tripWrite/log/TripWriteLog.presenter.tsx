import TripWriteBanner from "../banner/TripWriteBanner.container";
import TripWriteBottomBar from "../bottomBar/TripWriteBottomBar.container";
import OutlinedButton02 from "../../../commons/buttons/outlined/02/OutlinedButton02.container";
import OutlinedButton03 from "../../../commons/buttons/outlined/03/OutlinedButton03.container";
import ContainedButton01 from "../../../commons/buttons/contained/01/ContainedButton01.container";
import TripWriteLogList from "./list/TripWriteLogList.container";
import * as Log from "./TripWriteLog.styles";

export default function TripWriteLogUI(props) {
  return (
    <Log.Container>
      <TripWriteBanner />
      <Log.Contents>
        <Log.Bar>
          <Log.MoveBack>
            <img src="/img/mytrips-write-log1.png" />
            나의 여행 목록으로
          </Log.MoveBack>
          {/* prettier-ignore */}

          <Log.BtnGroup>
            <OutlinedButton03 content="삭제" onClick={() => {"./"}} size="small"></OutlinedButton03>
            <OutlinedButton02 content="수정"  onClick={() => { "./" }}  size="small"></OutlinedButton02>
            <ContainedButton01 content="공유하기" onClick={() => {"./" }} size="small"></ContainedButton01>
          </Log.BtnGroup>
        </Log.Bar>

        <Log.InnerWrap>
          <TripWriteLogList />
        </Log.InnerWrap>
      </Log.Contents>

      <TripWriteBottomBar />
    </Log.Container>
  );
}
