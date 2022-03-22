import * as Write from "./TripWritePlansCard.styles";

export default function TripWritePlansCardUI(props) {
  return (
    <Write.Card>
      <Write.Contents>
        <Write.Top>
          <Write.StartTime>{props.content.startTime}</Write.StartTime>
          <Write.Time>{props.content.time}</Write.Time>
        </Write.Top>
        <Write.Center>
          <Write.Name>{props.content.name}</Write.Name>
        </Write.Center>
        <Write.Bottom>
          <Write.Memo>{props.content.memo}</Write.Memo>
        </Write.Bottom>
      </Write.Contents>
      <Write.Handle>
        <Write.Upper>
          <img src="/img/icon-mytrip-write-card-upper.svg" />
        </Write.Upper>
        <Write.Lower>
          <img src="/img/icon-mytrip-write-card-lower.svg" />
        </Write.Lower>
      </Write.Handle>
    </Write.Card>
  );
}
