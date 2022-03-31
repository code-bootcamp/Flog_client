import * as List from "./TripWriteLogList.styles";
import TripWriteLogEditor from "../editor/TripWriteLogEditor.container";
export default function TripWriteLogListUI(props) {
  return (
      <List.Main>
         {props.data?.fetchDetailSchedule?.map((el, elIndex) => (
                    <List.DayPlanDetail
                      key={elIndex}
                      onClick={
                       () => {props.setSelected({title: el.place, des: el.memo})
                        console.log(props.selected)
                      }
                      }
                    >
                      <List.DayPlanLabel>{el.place}</List.DayPlanLabel>
                      <div>{el.memo}</div>
                    </List.DayPlanDetail>
                  ))}
        {props.isEdit && (
           <List.EditorWrapper  index = {props.index}>
           <TripWriteLogEditor
           index = {props.index}
           data={props.data}
           selected={props.selected}
           saveButtonRef={props.saveButtonRef}
         />
          
         </List.EditorWrapper>
        )}    

       
   
      </List.Main>
                 
     
  )
}
