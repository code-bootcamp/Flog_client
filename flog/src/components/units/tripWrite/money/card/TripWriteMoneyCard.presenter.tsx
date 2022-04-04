import { Draggable } from "react-beautiful-dnd";
import { insertCommaPrice } from "../../../../../commons/utils/insertComma";
import DetailBudgetEditForm from "../../../../commons/modals/formBudgetEdit/DetailBudgetEditForm.container";
import * as Write from "./TripWriteMoneyCard.styles";

export default function TripWriteMoneyCardUI(props) {
  return (
    <Write.MoneyBox>
      {props.el.contents.map((contents, index) => (
        <Draggable key={contents.id} draggableId={contents.id} index={index}>
          {(provided, snapshot) => (
            <Write.Card
              key={contents.context}
              ref={provided.innerRef}
              {...provided.draggableProps}
            >
              <Write.Contents
                onClick={props.onClickCardContents(contents, index)}
              >
                <Write.ContentsLeftBox>
                  <Write.IconBox>
                    <img src={props.selectStatusIcon(contents.status)} />
                  </Write.IconBox>
                  <Write.TextBox>
                    <span className="context">{contents.context}</span>
                    <span className="memo">{contents.memo}</span>
                  </Write.TextBox>
                </Write.ContentsLeftBox>
                <Write.Amount>
                  {`${insertCommaPrice(String(contents.amount))}원`}
                </Write.Amount>
              </Write.Contents>
              <Write.Handle {...provided.dragHandleProps}>
                드래그 앤 드롭 핸들
              </Write.Handle>
            </Write.Card>
          )}
        </Draggable>
      ))}
      {props.detailBudgetEditFormModal && (
        <DetailBudgetEditForm
          onClickExit={props.onClickExitDetailBudgetEditFormModal}
          onClickSubmit={props.onClickSubmitDetailBudgetEditFormModal}
          onClickCategory={props.onClickCategory}
          TRIP_CATEGORY={props.TRIP_CATEGORY}
          isSelect={props.isSelect}
          clickContents={props.clickContents}
        />
      )}
    </Write.MoneyBox>
  );
}
