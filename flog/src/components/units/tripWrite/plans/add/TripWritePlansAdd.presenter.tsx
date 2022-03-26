import * as Write from "./TripWritePlansAdd.styles";

export default function TripWritePlansAddUI() {
  return (
    <Write.Card>
      <Write.AddButton>
        <span className="icon">
          <img src="/img/icon-mytrip-write-card-add.svg" alt="일정 추가하기" />
        </span>
        <span className="text">일정 추가하기</span>
      </Write.AddButton>
    </Write.Card>
  );
}
