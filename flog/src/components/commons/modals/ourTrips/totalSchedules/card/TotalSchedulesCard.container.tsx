import * as M from "./TotalSchedulesCard.styles";

export default function TotalScheduleCard(props) {
  return (
    <M.PlansBox>
      {props.data &&
        props.data.map((el: any, index: number) => (
          <M.Card key={index}>
            <M.Contents>
              <M.Top>
                <M.StartTime>{el.startTime}</M.StartTime>
                <M.Time>{el.useTime} 소요</M.Time>
              </M.Top>
              <M.Center>
                <M.Name>{el.place}</M.Name>
              </M.Center>
              <M.Bottom>
                <M.Memo>{el.memo}</M.Memo>
              </M.Bottom>
            </M.Contents>
          </M.Card>
        ))}
    </M.PlansBox>
  );
}
