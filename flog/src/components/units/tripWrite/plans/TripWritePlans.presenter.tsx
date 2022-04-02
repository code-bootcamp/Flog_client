import {
  getDateString,
  getMonthString,
  getWeekdayString,
} from "../../../../commons/utils/getDate";
import TripWriteBanner from "../banner/TripWriteBanner.container";
import TripWriteBottomBar from "../bottomBar/TripWriteBottomBar.container";
import TripWriteNavigation from "../navigation/TripWriteNavigation.container";
import TripWritePlansCard from "./card/TripWritePlansCard.container";
import * as Write from "./TripWritePlans.styles";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { ITripWritePlansUIProps } from "./TripWritePlans.types";

export default function TripWritePlansUI(props: ITripWritePlansUIProps) {
  return (
    <Write.Container>
      <TripWriteBanner />
      <TripWriteNavigation />
      <Write.Contents>
        <Write.InnerWrap>
          {props.isLoading && (
            <DragDropContext onDragEnd={props.onDragEndReorder}>
              {props.tripTitleDataArray.map((el: any, index: number) => (
                <Droppable key={index} droppableId={String(index)}>
                  {(provided, snapshot) => (
                    <Write.Column
                      className={`day${index + 1}`}
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      // style={getListStyle(snapshot.isDraggingOver)}
                    >
                      <Write.TitleBox>
                        <Write.Title>
                          <Write.TitleNumber>
                            <span>{index + 1}</span>
                          </Write.TitleNumber>
                          <Write.TitleText>
                            <p className="date">
                              {`${getMonthString(
                                el.startDate,
                                index
                              )}.${getDateString(
                                el.startDate,
                                index
                              )} (${getWeekdayString(el.startDate, index)})`}
                            </p>
                            <p className="text">일차</p>
                          </Write.TitleText>
                        </Write.Title>
                      </Write.TitleBox>
                      {props.plansList[index] ? (
                        <TripWritePlansCard
                          data={props.plansList[index]}
                          day={index + 1}
                          date={
                            props.tripTitleDataArray[0].tripdates.split(";")[
                              index
                            ]
                          }
                        />
                      ) : (
                        <TripWritePlansCard
                          day={String(index + 1)}
                          data={[]}
                          date={
                            props.tripTitleDataArray[0].tripdates.split(";")[
                              index
                            ]
                          }
                        />
                      )}
                      {provided.placeholder}
                    </Write.Column>
                  )}
                </Droppable>
              ))}
            </DragDropContext>
          )}
        </Write.InnerWrap>
      </Write.Contents>
      <TripWriteBottomBar />
    </Write.Container>
  );
}
