import TripWriteBanner from "../../tripWrite/banner/TripWriteBanner.container";
import TripWriteBottomBar from "../../tripWrite/bottomBar/TripWriteBottomBar.container";

import OutlinedButton02 from "../../../commons/buttons/outlined/02/OutlinedButton02.container";

import OutlinedButton03 from "../../../commons/buttons/outlined/03/OutlinedButton03.container";

import ContainedButton01 from "../../../commons/buttons/contained/01/ContainedButton01.container";
import Dompurify from "dompurify";

import TripWriteLogList from "../../tripWrite/log/list/TripWriteLogList.container";
import * as Detail from "./OurTripDetail.styles";
export default function OurTripDetailUI(props) {
  return (
    <Detail.Container>
    <Detail.Contents>
      {props.data?.fetchBoard?.filter(x => x.content).map(el => {

        if(el.day ==='1') return <>
          <div>
            <div>Day 1</div>
            <div
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(String(el.content))
              }}
            />
          </div>
        </>
        if(el.day ==='2') return <>
        <div>
          <div>Day 2</div>
          <div
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(String(el.content))
              }}
            />
        </div>
      </>
      if(el.day ==='3') return <>
      <div>
        <div>Day 3</div>
        <div
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(String(el.content))
              }}
            />
      </div>
    </>
    if(el.day ==='4') return <>
    <div>
      <div>Day 4</div>
      <div
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(String(el.content))
              }}
            />
    </div>
  </>
      })}

      <Detail.InnerWrap>
        <TripWriteLogList />
      </Detail.InnerWrap>
    </Detail.Contents>

  </Detail.Container>
  );
}
