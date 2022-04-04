import * as List from "./TripWriteLogList.styles";
import TripWriteLogEditor from "../editor/TripWriteLogEditor.container";
import OurTripDetail from "../../../../units/ourTrip/detail/OurTripDetail.container";

export default function TripWriteLogListUI(props) {
  return (
    <List.Main>
      <List.ScrollWrap>
        {props.data?.fetchDetailSchedule?.map((el, elIndex) => (
          <List.DayPlanDetail
            key={elIndex}
            onClick={() => {
              props.setSelected({
                title: el.place,
                des: el.memo,
                index: elIndex,
              });
            }}
          >
            <List.DayPlanLabel>{el.place}</List.DayPlanLabel>
            <div>{el.memo}</div>
          </List.DayPlanDetail>
        ))}
      </List.ScrollWrap>

      <List.EditorWrapper index={props.index}>
        {props.isEdit ? (
          <TripWriteLogEditor
            index={props.index}
            data={props.data}
            selected={props.selected}
            saveButtonRef={props.saveButtonRef[props.index]}
          />
        ) : (
          <OurTripDetail index={props.index} selected={props.selected} />
        )}
      </List.EditorWrapper>
    </List.Main>
  );
}
