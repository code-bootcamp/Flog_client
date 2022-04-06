import Dompurify from "dompurify";
import { v4 as uuid4 } from "uuid";

import * as Detail from "./OurTripDetail.styles";
export default function OurTripDetailUI(props) {
  return (
    <Detail.Container ref={props.moveRef}>
      <Detail.Day>Day {props.index + 1}</Detail.Day>
      <Detail.Contents>
        {props.BoardData ? (
           
              <div>
                <Detail.DayContents
                  dangerouslySetInnerHTML={{
                    __html: Dompurify.sanitize(String(props.BoardData.content)),
                  }}
                />
              </div>
        ) : (
          <div>여행 로그가 없습니다.</div>
        )}
      </Detail.Contents>
    </Detail.Container>
  );
}
