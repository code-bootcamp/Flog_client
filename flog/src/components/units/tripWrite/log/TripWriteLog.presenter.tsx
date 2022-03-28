import TripWriteBanner from "../banner/TripWriteBanner.container";
import TripWriteBottomBar from "../bottomBar/TripWriteBottomBar.container";
import TripWriteNavigation from "../navigation/TripWriteNavigation.container";
import TripWriteLogList from "./list/TripWriteLogList.container";
import * as Log from "./TripWriteLog.styles";

export default function TripWriteLogUI() {
  return (
    <Log.Container>
      <TripWriteBanner />
      <TripWriteNavigation />
      <Log.Contents>
        <Log.InnerWrap>
          <TripWriteLogList isEdit={true} />
        </Log.InnerWrap>
      </Log.Contents>

      <TripWriteBottomBar />
    </Log.Container>
  );
}
