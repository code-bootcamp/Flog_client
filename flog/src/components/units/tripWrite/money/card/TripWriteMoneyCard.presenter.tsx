import * as Write from "./TripWriteMoneyCard.styles";

export default function TripWriteMoneyCardUI(props) {
  return (
    <Write.Card>
      <Write.Time>{props.contents.time}</Write.Time>
      <Write.Contents>
        <Write.ContentsLeftBox>
          <Write.IconBox>
            <img src={props.selectStatusIcon(props.contents.status)} />
          </Write.IconBox>
          <Write.TextBox>
            <span className="context">{props.contents.context}</span>
            <span className="memo">{props.contents.memo}</span>
          </Write.TextBox>
        </Write.ContentsLeftBox>
        <Write.Amount>{props.contents.amount}원</Write.Amount>
      </Write.Contents>
      <Write.Handle>
        <Write.Upper>
          <img src="/img/icon-mytrip-write-money-upper.svg" />
        </Write.Upper>
        <Write.Lower>
          <img src="/img/icon-mytrip-write-money-lower.svg" />
        </Write.Lower>
      </Write.Handle>
    </Write.Card>
  );
}
