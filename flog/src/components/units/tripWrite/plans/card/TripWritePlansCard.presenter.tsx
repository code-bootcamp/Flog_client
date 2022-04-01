import { Draggable } from "react-beautiful-dnd";
import TripWritePlansAdd from "../add/TripWritePlansAdd.container";
import * as Write from "./TripWritePlansCard.styles";
import DetailScheduleForm from "./../../../../commons/modals/formDetailSchedule/DetailScheduleForm.container";

export default function TripWritePlansCardUI(props) {
  return (
    <Write.PlansBox>
      {props.content &&
        props.content.map((el, index) => (
          <Draggable
            key={String(el.id)}
            draggableId={String(el.id)}
            index={index}
          >
            {(provided, snapshot) => (
              <Write.Card ref={provided.innerRef} {...provided.draggableProps}>
                <Write.Contents>
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
                <Write.Handle {...provided.dragHandleProps}>
                  <Write.Upper {...provided.dragHandleProps}>
                    <img
                      src="/img/icon-mytrip-write-card-upper.svg"
                      alt="위 화살표 아이콘"
                    />
                  </Write.Upper>
                  <Write.Lower {...provided.dragHandleProps}>
                    <img
                      src="/img/icon-mytrip-write-card-lower.svg"
                      alt="아래 화살표 아이콘"
                    />
                  </Write.Lower>
                </Write.Handle>
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
    </Write.PlansBox>
  );
}
