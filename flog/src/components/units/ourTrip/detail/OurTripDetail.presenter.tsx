import TripWriteBanner from "../../tripWrite/banner/TripWriteBanner.container";
import TripWriteBottomBar from "../../tripWrite/bottomBar/TripWriteBottomBar.container";

import OutlinedButton02 from "../../../commons/buttons/outlined/02/OutlinedButton02.container";

import OutlinedButton03 from "../../../commons/buttons/outlined/03/OutlinedButton03.container";

import ContainedButton01 from "../../../commons/buttons/contained/01/ContainedButton01.container";
import TripWriteLogList from "../../tripWrite/log/list/TripWriteLogList.container";
import * as Detail from "./OurTripDetail.styles";
export default function OurTripDetailUI() {
  return (
    <Detail.Container>
      <TripWriteBanner />
      <Detail.Contents>
        <Detail.Bar>
          <Detail.MoveBack>
            <img src="/img/mytrips-write-log1.png" />
            나의 여행 목록으로
          </Detail.MoveBack>

          {/* prettier-ignore */}
          <Detail.BtnGroup>
            <OutlinedButton03 content="삭제" onClick={() => {"./"}} size="small"></OutlinedButton03>
            <OutlinedButton02 content="수정"  onClick={() => { "./" }}  size="small"></OutlinedButton02>
            <ContainedButton01 content="공유하기" onClick={() => {"./" }} size="small"></ContainedButton01>
          </Detail.BtnGroup>
        </Detail.Bar>

        <Detail.InnerWrap>
          <TripWriteLogList />
        </Detail.InnerWrap>
      </Detail.Contents>

      <TripWriteBottomBar />
    </Detail.Container>
  );
}
