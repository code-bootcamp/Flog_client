import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { insertCommaPrice } from "../../../../commons/utils/insertComma";
import TripWriteBanner from "../banner/TripWriteBanner.container";
import TripWriteBottomBar from "../bottomBar/TripWriteBottomBar.container";
import TripWriteNavigation from "../navigation/TripWriteNavigation.container";
import TripWriteMoneyAdd from "./add/TripWriteMoneyAdd.container";
import TripWriteMoneyCard from "./card/TripWriteMoneyCard.container";
import { SAMPLE_DATA_MONEY } from "./SampleDataMoney";
import * as Write from "./TripWriteMoney.styles";

export default function TripWriteMoneyUI(props) {
  return (
    <Write.Container>
      <TripWriteBanner />
      <TripWriteNavigation />
      <Write.Contents>
        <Write.InnerWrap>
          <Write.BudgetBox>
            <Write.ProgressBar progress={65}>
              <div className="progress"></div>
            </Write.ProgressBar>
            <Write.BudgetText>
              <Write.AllAmount>
                <span className="text1">예산</span>
                <span className="text2">
                  900,000원
                  <Write.EditButton>
                    <img src="/img/icon-mytrip-write-money-edit.svg" />
                  </Write.EditButton>
                </span>
              </Write.AllAmount>
              <Write.Amount>
                <span className="text1">총 지출</span>
                <span className="text2">790,000원</span>
              </Write.Amount>
            </Write.BudgetText>
          </Write.BudgetBox>
          <Write.MoneyBookBox>
            {props.isLoading && (
              <DragDropContext onDragEnd={props.onDragEndReorder}>
                {SAMPLE_DATA_MONEY.map((el, index) => (
                  <Droppable key={el.date} droppableId={String(index)}>
                    {(provided, snapshot) => (
                      <Write.MoneyBookColumn
                        className={`title day${index + 1}`}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        <Write.MoneyBookTitle>
                          <span className="title">
                            {el.date === "ready"
                              ? "여행 준비"
                              : el.date.slice(-5).replace("-", ".")}
                          </span>
                          <span className="amount">121,000원</span>
                        </Write.MoneyBookTitle>
                        <Write.MoneyBookCards>
                          <TripWriteMoneyCard el={el} />
                        </Write.MoneyBookCards>
                        <TripWriteMoneyAdd />
                        {provided.placeholder}
                      </Write.MoneyBookColumn>
                    )}
                  </Droppable>
                ))}
              </DragDropContext>
            )}
          </Write.MoneyBookBox>
        </Write.InnerWrap>
      </Write.Contents>
      <TripWriteBottomBar />
    </Write.Container>
  );
}
