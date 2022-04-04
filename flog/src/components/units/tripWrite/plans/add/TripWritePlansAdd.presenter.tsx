import { ITripWritePlansCardUIProps } from "./TripWritePlansAdd.types";
import * as Write from "./TripWritePlansAdd.styles";

export default function TripWritePlansAddUI(props: ITripWritePlansCardUIProps) {
  return (
    <Write.Card>
      <Write.AddButton onClick={props.onClick}>
        <span className="icon">
          <img src="/img/icon-mytrip-write-card-add.svg" alt="일정 추가하기" />
        </span>
        <span className="text">일정 추가하기</span>
      </Write.AddButton>
    </Write.Card>
  );
}
