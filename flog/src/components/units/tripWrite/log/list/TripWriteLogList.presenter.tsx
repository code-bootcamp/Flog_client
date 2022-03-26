import * as List from "./TripWriteLogList.styles";
import TripWriteLogEditor from "../editor/TripWriteLogEditor.container";
export default function TripWriteLogListUI(props) {
  return (
    <List.Main>
      <List.PlanBox>
        <List.PlanBtnGroup>
          <List.moveBtn>전체 일정</List.moveBtn>
          <List.moveBtn>전체 예산</List.moveBtn>
        </List.PlanBtnGroup>

        <List.PlanWrapper>
          {props.schedules.map((day, dayIndex) => (
            <List.DayWrapper key={dayIndex}>
              <span>{dayIndex + 1}일차</span>
              <img
                src="/img/mytrips-write-log2.png"
                onClick={props.toggle(dayIndex)}
              />
              {props.isShow[dayIndex] && (
                <List.DayPlanWrapper>
                  {day.map((el, elIndex) => (
                    <List.DayPlanDetail
                      key={elIndex}
                      onClick={props.addElement(dayIndex, elIndex)}
                    >
                      <List.DayPlanLabel>{el.name}</List.DayPlanLabel>
                      <div>{el.des}</div>
                    </List.DayPlanDetail>
                  ))}
                </List.DayPlanWrapper>
              )}
            </List.DayWrapper>
          ))}
        </List.PlanWrapper>
      </List.PlanBox>
      <List.EditorWrapper>
        {props.schedules.map((el: string[], index: number) => (
          <TripWriteLogEditor
            key={index}
            el={el}
            dayRef={props.allRef[index]}
            index={index}
            isShow={props.isShow[index]}
          />
        ))}
      </List.EditorWrapper>
    </List.Main>
  );
}
