import ContainedButton03 from "../../../commons/buttons/contained/03/ContainedButton03.container";
import TripWriteBanner from "../banner/TripWriteBanner.container";
import TripWriteBottomBar from "../bottomBar/TripWriteBottomBar.container";
import TripWriteNavigation from "../navigation/TripWriteNavigation.container";
import TripWriteLogList from "./list/TripWriteLogList.container";
import OurTripDetail from "../../../units/ourTrip/detail/OurTripDetail.container"

import * as Log from "./TripWriteLog.styles";
export default function TripWriteLogUI(props) {
  return (
    <Log.Container>
      <TripWriteBanner />
      <TripWriteNavigation />
      <Log.Contents>
        <Log.InnerWrap>
        <Log.PlanBox>
        {props.isMine || props.isEdit || (
          <Log.UserInfo>
            <img src="/img/ourtrips-detail-usericon.png" />
            <Log.Name>사용자 이름</Log.Name>
            <Log.Email>test@gmail.com</Log.Email>
            {/* prettier-ignore */}
            <ContainedButton03 content="포인트 후원하기" size="small"onClick={() => { "/";}}
            />
          </Log.UserInfo>
        )}
        {props.isEdit || (
          <Log.PlanBtnGroup>
            <Log.moveBtn>전체 일정</Log.moveBtn>
            <Log.moveBtn>전체 예산</Log.moveBtn>
          </Log.PlanBtnGroup>
        )}
          <Log.PlanWrapper>
          {[1,1,1,1].map((_, dayIndex) => (
             <Log.DayWrapper key={dayIndex}>
              <Log.Day>{dayIndex + 1}일차</Log.Day>
              <Log.ToggleImg
                src="/img/mytrips-write-log2.png"
                onClick={props.toggle(dayIndex)}
              />
             {props.isShow[dayIndex] && (
                <TripWriteLogList key={dayIndex} 
                index={dayIndex}
                isEdit={props.isEdit}
                saveButtonRef={props.saveButtonRef}
                />)}  
          </Log.DayWrapper>))}
                  

        </Log.PlanWrapper>
             

              
       
         </Log.PlanBox>
         {props.isEdit || <OurTripDetail/>}
        </Log.InnerWrap>
      </Log.Contents>

      <TripWriteBottomBar saveButtonRef={props.saveButtonRef} />
    </Log.Container>
  );
}
