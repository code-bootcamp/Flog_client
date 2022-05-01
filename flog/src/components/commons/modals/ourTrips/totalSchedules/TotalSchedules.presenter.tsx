import {
  getDateString,
  getMonthString,
  getWeekdayString,
} from "../../../../../commons/utils/getDate";
import TotalScheduleCard from "./card/TotalSchedulesCard.container";
import * as M from "./TotalSchedules.styles";

export default function TotalSchedulesModalUI(props) {
  return (
    <M.Container>
      <M.ModalWrapper>
        <M.Modal>
          <M.Title>
            <img
              src="/img/icon-modal-exit.svg"
              alt="나가기버튼"
              onClick={props.onClickExit}
            />
          </M.Title>
          <M.Content>
            {props.tripTitleDataArray.map((el: any, index: number) => (
              <M.Column key={index}>
                <M.TitleBox>
                  <M.ScheduleTitle>
                    <M.TitleNumber>
                      <span>{index + 1}</span>
                    </M.TitleNumber>
                    <M.TitleText>
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
                    </M.TitleText>
                  </M.ScheduleTitle>
                </M.TitleBox>
                {props.schedulesList[index] ? (
                  <TotalScheduleCard
                    data={props.schedulesList[index]}
                    day={index + 1}
                    date={
                      props.tripTitleDataArray[0].tripdates.split(";")[index]
                    }
                  />
                ) : (
                  <TotalScheduleCard
                    day={String(index + 1)}
                    data={[]}
                    date={
                      props.tripTitleDataArray[0].tripdates.split(";")[index]
                    }
                  />
                )}
              </M.Column>
            ))}
          </M.Content>
        </M.Modal>
      </M.ModalWrapper>
    </M.Container>
  );
}
