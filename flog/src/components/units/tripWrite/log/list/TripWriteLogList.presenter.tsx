import * as List from "./TripWriteLogList.styles";
import TripWriteLogEditor from "../editor/TripWriteLogEditor.container";
import OurTripDetail from "../../../../units/ourTrip/detail/OurTripDetail.container";
import ContainedButton03 from "../../../../commons/buttons/contained/03/ContainedButton03.container";
import { v4 as uuid4 } from "uuid";
export default function TripWriteLogListUI(props) {
  return (
    <List.Main>
      <List.InnerWrap>
          <List.PlanBox>
            { props.isEdit || (
              <>
              <List.UserInfo  >
                <img src="/img/ourtrips-detail-usericon.png" />
                <List.Name>{props.userData?.fetchSchedule?.user.nickName}</List.Name>
                <List.Email>{props.userData?.fetchSchedule?.user.email}</List.Email>
                {/* prettier-ignore */}
                {props.isMine || <ContainedButton03 content="포인트 후원하기" size="small"onClick={() => props.setPointModal(true)}/> }
            </List.UserInfo>
            
              <List.PlanBtnGroup>
                <List.moveBtn isMine={props.isMine}>전체 일정</List.moveBtn>
                <List.moveBtn isMine={props.isMine}>전체 예산</List.moveBtn>
              </List.PlanBtnGroup>
              </>
              
            )}
            <List.PlanWrapper>
              {[props.data1?.fetchDetailSchedule, props.data2?.fetchDetailSchedule, props.data3?.fetchDetailSchedule, props.data4?.fetchDetailSchedule].filter(el =>el?.length >0).map((el, dayIndex) => (
                <List.DayWrapper key={dayIndex}>
                  <List.Day>{dayIndex + 1}일차</List.Day>
                  <List.ToggleImg
                    src="/img/mytrips-write-log2.png"
                    onClick={props.toggle(dayIndex)}
                  />
                  <List.isShow isShow={props.isShow[dayIndex]}>
                    {el.map(el => (
                         <List.DayPlanDetail key={uuid4()}
                            onClick={() => {
                            props.setSelected({
                             title: el.place,
                             des: el.memo,
                             index: elIndex ,
                           });
                           console.log(props.selected);
                         }}
                       >
                         <List.DayPlanLabel>{el.place}</List.DayPlanLabel>
                         <div>{el.memo}</div>
                       </List.DayPlanDetail>
                    ))}
                   
                  </List.isShow>
                </List.DayWrapper>
              ))}
            </List.PlanWrapper>
          </List.PlanBox>
        </List.InnerWrap>

      {[1,1,1,1].map((el,dayIndex) =>(

        <List.EditorWrapper isShow={props.isShow[dayIndex]} key={uuid4()} >
     
          {props.isEdit ? (
            <TripWriteLogEditor
              index={dayIndex}
              selected={props.selected}
              saveButtonRef={props.saveButtonRef?.[dayIndex]}
            />
          ) : (
            <OurTripDetail index={dayIndex} selected={props.selected}  isMine={props.isMine} />
          )}

         </List.EditorWrapper>
      ))}               
      
    </List.Main>
  );
}

