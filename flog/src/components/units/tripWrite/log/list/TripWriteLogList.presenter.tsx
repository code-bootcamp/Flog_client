import * as List from "./TripWriteLogList.styles";
import TripWriteLogEditor from "../editor/TripWriteLogEditor.container";
import ContainedButton03 from "../../../../commons/buttons/contained/03/ContainedButton03.container";
export default function TripWriteLogListUI(props) {
  return (
    <List.Main>
      <List.PlanBox>
        {props.isMine || props.isEdit || (
          <List.UserInfo>
            <img src="/img/ourtrips-detail-usericon.png" />
            <List.Name>사용자 이름</List.Name>
            <List.Email>test@gmail.com</List.Email>
            {/* prettier-ignore */}
            <ContainedButton03 content="포인트 후원하기" size="small"onClick={() => { "/";}}
            />
          </List.UserInfo>
        )}
        {props.isEdit || (
          <List.PlanBtnGroup>
            <List.moveBtn>전체 일정</List.moveBtn>
            <List.moveBtn>전체 예산</List.moveBtn>
          </List.PlanBtnGroup>
        )}

        <List.PlanWrapper>
          {props.schedules.map((day, dayIndex) => (
            <List.DayWrapper key={dayIndex}>
              <div>
                <span>{dayIndex + 1}일차</span>
                <img
                  src="/img/mytrips-write-log2.png"
                  onClick={props.toggle(dayIndex)}
                />
              </div>

              {props.isShow[dayIndex] && (
                <List.DayPlanWrapper>
                  {day.map((el, elIndex) => (
                    <List.DayPlanDetail
                      key={elIndex}
                      onClick={
                        props.isEdit
                          ? props.addElement(dayIndex, elIndex)
                          : props.moveSroll(dayIndex, elIndex)
                      }
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
      {props.isEdit && (
        <List.EditorWrapper>
          {props.schedules.map((el: string[], index: number) => (
            <TripWriteLogEditor
              key={index}
              el={el}
              dayRef={props.allRef[index]}
              index={index}
              isShow={props.isShow[index]}
              isEdit={props.isEdit}
            />
          ))}
        </List.EditorWrapper>
      )}
    </List.Main>
  );
}
