import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { insertCommaPrice } from "../../../../commons/utils/insertComma";
import Alert from "../../../commons/modals/alert/Alert.container";
import DetailBudgetForm from "../../../commons/modals/formBudget/DetailBudgetForm.container";
import TotalBudget from "../../../commons/modals/newBudget/totalBudget/TotalBudget.container";
import TripWriteBanner from "../banner/TripWriteBanner.container";
import TripWriteBottomBar from "../bottomBar/TripWriteBottomBar.container";
import TripWriteNavigation from "../navigation/TripWriteNavigation.container";
import TripWriteMoneyAdd from "./add/TripWriteMoneyAdd.container";
import TripWriteMoneyCard from "./card/TripWriteMoneyCard.container";
import * as Write from "./TripWriteMoney.styles";

export default function TripWriteMoneyUI(props) {
  return (
    <Write.Container>
      <TripWriteBanner />
      <TripWriteNavigation />
      <Write.Contents>
        <Write.InnerWrap>
          <Write.BudgetBox>
            <Write.ProgressBar
              progress={(props.sumAmount / props.totalAmount) * 100}
            >
              <div className="progress"></div>
            </Write.ProgressBar>
            <Write.BudgetText>
              <Write.AllAmount>
                <span className="text1">
                  예산
                  {props.viewport <= 767 && (
                    <Write.EditButton onClick={props.onClickTotalBudgetModal}>
                      <img src="/img/icon-mytrip-write-money-editMobile.svg" />
                    </Write.EditButton>
                  )}
                </span>
                <span className="text2">
                  {insertCommaPrice(props.totalAmount)}원
                  {props.viewport > 767 && (
                    <Write.EditButton onClick={props.onClickTotalBudgetModal}>
                      <img src="/img/icon-mytrip-write-money-edit.svg" />
                    </Write.EditButton>
                  )}
                </span>
              </Write.AllAmount>
              <Write.Amount>
                <span className="text1">총 지출</span>
                <span className="text2">
                  {insertCommaPrice(props.sumAmount)}원
                </span>
              </Write.Amount>
            </Write.BudgetText>
          </Write.BudgetBox>
          <Write.MoneyBookBox>
            {props.isLoading && (
              <DragDropContext onDragEnd={props.onDragEndReorder}>
                {props.moneyList.map((el, index) => (
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
                          <span className="amount">
                            {`${
                              props.dailyAmount[index]
                                ? insertCommaPrice(
                                    String(props.dailyAmount[index])
                                  )
                                : "0"
                            }`}
                            원
                          </span>
                        </Write.MoneyBookTitle>
                        <Write.MoneyBookCards>
                          <TripWriteMoneyCard
                            el={el}
                            tripDates={props.tripDates}
                            budgetId={props.budgetId}
                            setAlertModal={props.setAlertModal}
                            setModalContents={props.setModalContents}
                          />
                        </Write.MoneyBookCards>
                        <TripWriteMoneyAdd
                          date={el.date}
                          onClick={props.onClickDetailBudgetFormModal(el.date)}
                        />
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
      <TripWriteBottomBar submitDetailBudget={props.submitDetailBudget} />
      {props.detailBudgetFormModal && (
        <DetailBudgetForm
          onClickExit={props.onClickExitDetailBudgetFormModal}
          onClickSubmit={props.onClickSubmitDetailBudgetFormModal}
          onClickCategory={props.onClickCategory}
          TRIP_CATEGORY={props.TRIP_CATEGORY}
          isSelect={props.isSelect}
        />
      )}
      {props.totalBudgetModal && (
        <TotalBudget
          onClickExit={props.onClickExitTotalBudgetModal}
          onClickSubmit={props.onClickSubmitTotalBudgetModal}
          onChangeTotalBudget={props.onChangeTotalBudget}
          budgetSelect={props.budgetSelect}
        />
      )}
      {props.alertModal && (
        <Alert
          onClickExit={props.onClickExitAlertModal}
          onClickSubmit={props.onClickSubmitAlertModal}
          contents={props.modalContents}
        />
      )}
    </Write.Container>
  );
}
