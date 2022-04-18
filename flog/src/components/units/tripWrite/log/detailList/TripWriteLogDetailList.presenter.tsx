import * as DetailList from "./TripWriteLogDetailList.styles";
export default function TripWriteLogDetailListUI(props) {
  return (
    <DetailList.Main>
      <DetailList.ScrollWrap>
        {props.data?.fetchDetailSchedule?.map((el, elIndex) => (
          <DetailList.DayPlanDetail
            key={elIndex}
            onClick={props.addEl(el.place, el.memo, elIndex)}
          >
            <DetailList.DayPlanLabel>{el.place}</DetailList.DayPlanLabel>
            <div>{el.memo}</div>
          </DetailList.DayPlanDetail>
        ))}
      </DetailList.ScrollWrap>
    </DetailList.Main>
  );
}
