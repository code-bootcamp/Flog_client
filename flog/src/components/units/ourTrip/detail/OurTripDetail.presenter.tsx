import Dompurify from "dompurify";
import Alert from "../../../commons/modals/alert/Alert.container";

import * as Detail from "./OurTripDetail.styles";
export default function OurTripDetailUI(props) {
  return (
    <Detail.Container ref={props.moveRef} isShow={props.isShow}>
      {props.modalContents && (
        <Alert
          onClickExit={() => props.setModalContents("")}
          onClickSubmit={() => props.setModalContents("")}
          contents={props.modalContents}
        />
      )}
      <Detail.Day>Day {props.index + 1}</Detail.Day>
      <Detail.Contents>
        {props.BoardData ? (
          <div>
            <div className="line"></div>
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
