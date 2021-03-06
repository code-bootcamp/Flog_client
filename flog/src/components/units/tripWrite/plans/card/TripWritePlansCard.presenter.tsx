import { Draggable } from "react-beautiful-dnd";
import TripWritePlansAdd from "../add/TripWritePlansAdd.container";
import * as Write from "./TripWritePlansCard.styles";
import DetailScheduleForm from "./../../../../commons/modals/formDetailSchedule/DetailScheduleForm.container";
import { ITripWritePlansCardUIProps } from "./TripWritePlansCard.types";
import DetailScheduleFormEdit from "../../../../commons/modals/formDetailScheduleEdit/DetailScheduleFormEdit.container";
import { el } from "date-fns/locale";
import Alert from "../../../../commons/modals/alert/Alert.container";

export default function TripWritePlansCardUI(
  props: ITripWritePlansCardUIProps
) {
  return (
    <Write.PlansBox>
      {props.content &&
        props.content.map((el: any, index: number) => (
          <Draggable
            key={String(el.id)}
            draggableId={String(el.id)}
            index={index}
          >
            {(provided, snapshot) => (
              <Write.Card ref={provided.innerRef} {...provided.draggableProps}>
                <Write.Contents onClick={props.onClickCardContents(el)}>
                  <Write.Top>
                    <Write.StartTime>{el.startTime}</Write.StartTime>
                    <Write.Time>{el.useTime} 소요</Write.Time>
                  </Write.Top>
                  <Write.Center>
                    <Write.Name>{el.place}</Write.Name>
                  </Write.Center>
                  <Write.Bottom>
                    <Write.Memo>{el.memo}</Write.Memo>
                  </Write.Bottom>
                </Write.Contents>

                <Write.Handle {...provided.dragHandleProps}></Write.Handle>
              </Write.Card>
            )}
          </Draggable>
        ))}
      <TripWritePlansAdd onClick={props.onClickDetailScheduleFormModal} />
      {props.detailScheduleFormModal && (
        <DetailScheduleForm
          onClickExit={props.onClickExitDetailScheduleFormModal}
          onClickSubmit={props.onClickSubmitDetailScheduleFormModal}
        />
      )}
      {props.detailScheduleFormEditModal && (
        <DetailScheduleFormEdit
          editContent={props.editContent}
          onClickExit={props.onClickExitDetailScheduleFormEditModal}
          onClickSubmit={props.onClickUpdateDetailScheduleFormModal}
        />
      )}
      {props.alertModal && (
        <Alert
          onClickExit={props.onClickExitAlertModal}
          onClickSubmit={props.onClickSubmitAlertModal}
          contents={props.modalContents}
        />
      )}
    </Write.PlansBox>
  );
}
