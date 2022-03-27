import TripWriteBanner from "../banner/TripWriteBanner.container";
import TripWriteBottomBar from "../bottomBar/TripWriteBottomBar.container";
import TripWriteNavigation from "../navigation/TripWriteNavigation.container";

// import OutlinedButton02 from "../../../commons/buttons/outlined/02/OutlinedButton02.container";
// import OutlinedButton03 from "../../../commons/buttons/outlined/03/OutlinedButton03.container";
// import ContainedButton01 from "../../../commons/buttons/contained/01/ContainedButton01.container";
import TripWriteLogList from "./list/TripWriteLogList.container";
import * as Log from "./TripWriteLog.styles";

export default function TripWriteLogUI(props) {
  return (
    <Log.Container>
      <TripWriteBanner />
      <TripWriteNavigation />
      <Log.Contents>
        <Log.InnerWrap>
          <TripWriteLogList />
        </Log.InnerWrap>
      </Log.Contents>

      <TripWriteBottomBar />
    </Log.Container>
  );
}
