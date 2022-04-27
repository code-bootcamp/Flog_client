import * as List from "./TripWriteLogList.styles";
import ContainedButton03 from "../../../../commons/buttons/contained/03/ContainedButton03.container";
import TripWriteLogDetailList from "../detailList/TripWriteLogDetailList.container";

export default function TripWriteLogListUI(props) {
  return (
    <List.PlanBox>
      <List.XButton onClick={() => props.changePRST(1)}>×</List.XButton>
      {props.isEdit || (
        <>
          <List.UserInfo>
            <img
              src={
                props.userData?.fetchSchedule?.user.url
                  ? `https://storage.cloud.google.com/${props.userData?.fetchSchedule?.user.url}`
                  : "/img/ourtrips-detail-usericon.png"
              }
            />
            <div>
              <List.Name>
                {props.userData?.fetchSchedule?.user.nickName}
              </List.Name>
              <List.Email>
                {props.userData?.fetchSchedule?.user.email}
              </List.Email>
            </div>
            {props.isMine || (
              <ContainedButton03
                content="포인트 후원하기"
                size="small"
                onClick={() => props.changePRST(0)}
              />
            )}
          </List.UserInfo>

          <List.PlanBtnGroup>
            <List.moveBtn isMine={props.isMine}>전체 일정</List.moveBtn>
            <List.moveBtn onClick={() => props.changePRST(3)}>
              전체 예산
            </List.moveBtn>
          </List.PlanBtnGroup>
        </>
      )}
      <List.PlanWrapper>
        {props.userData?.fetchSchedule?.tripdates
          .split(";")
          .map((_, dayIndex) => (
            <List.DayWrapper key={dayIndex}>
              <List.Day>{dayIndex + 1}일차</List.Day>
              <List.ToggleImg
                src="/img/mytrips-write-log2.png"
                onClick={props.toggle(dayIndex)}
              />
              <List.isShow isShow={props.isShow[dayIndex]}>
                <TripWriteLogDetailList
                  index={dayIndex}
                  setSelected={props.setSelected}
                />
              </List.isShow>
            </List.DayWrapper>
          ))}
      </List.PlanWrapper>
    </List.PlanBox>
  );
}
