import { Draggable } from "react-beautiful-dnd";
import { insertCommaPrice } from "../../../../../commons/utils/insertComma";
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
              {/* <Write.Time>{contents.time}</Write.Time> */}
              <Write.Contents>
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
                <Write.Upper>
                  <img src="/img/icon-mytrip-write-money-upper.svg" />
                </Write.Upper>
                <Write.Lower>
                  <img src="/img/icon-mytrip-write-money-lower.svg" />
                </Write.Lower>
              </Write.Handle>
            </Write.Card>
          )}
        </Draggable>
      ))}
    </Write.MoneyBox>
  );
}
