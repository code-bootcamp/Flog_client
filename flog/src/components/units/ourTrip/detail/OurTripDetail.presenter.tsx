import Dompurify from "dompurify";
import { v4 as uuid4 } from "uuid";

import * as Detail from "./OurTripDetail.styles";
export default function OurTripDetailUI(props) {
  console.log(props.isOurs)
  return (
    <Detail.Container ref={props.moveRef} isMine={props.isMine}>
      {props.data?.fetchBoard[props.index] ? <Detail.Day>{props.index + 1}일차</Detail.Day> : <></>}
      <Detail.Contents>
        {props.data?.fetchBoard.length > 0? props.data?.fetchBoard
          .filter((el: any) => el.day === String(props.index + 1))
          .map((el: any) => (
            <div key={uuid4()}>
              <Detail.DayContents
                dangerouslySetInnerHTML={{  
                  __html: Dompurify.sanitize(String(el.content)),
                }}
              />
            </div>
          ))
        : <Detail.Empty>아직 여행 로그가 없습니다.</Detail.Empty>}
      </Detail.Contents>
    </Detail.Container>
  );
}
