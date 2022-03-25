import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getYear, getMonth } from "date-fns";
import { ko } from "date-fns/locale";
import styled from "@emotion/styled";
import { IMyDatePickerProps } from "./DatePicker.types";

const DatePickerHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PrevButton = styled.div`
  cursor: pointer;
`;

const NextButton = styled.div`
  cursor: pointer;
`;

const Text = styled.div`
  text-align: center;
  margin-right: 16px;
  margin-left: 16px;
`;

const SDatePicker = styled(DatePicker)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;
  width: 485px;
  height: 56px;
  border: 1px solid #58bd97;
  box-sizing: border-box;
  border-radius: 8px;
  font-size: 0.9rem;
`;

export default function MyDatePicker(props: IMyDatePickerProps) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates: [any, any]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    console.log(dates);
    props.setIsDateActive(true);
    if (props.title && props.people && props.theme && props.isDateActive) {
      props.setIsButtonActive(true);
    }
  };

  return (
    <div>
      {/* <div>{String(startDate)}</div> */}
      {/* <div>{String(endDate)}</div> */}
      <SDatePicker
        renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
          <DatePickerHead>
            <PrevButton>
              <img src="/img/icon-modal-prev.svg" onClick={decreaseMonth} />
            </PrevButton>
            <Text>
              {getYear(date)}년 {getMonth(date) + 1}월
            </Text>

            <NextButton>
              <img src="/img/icon-modal-next.svg" onClick={increaseMonth} />
            </NextButton>
          </DatePickerHead>
        )}
        className="date-input"
        dateFormat="yyyy년 M월 d일"
        locale={ko}
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        placeholderText="시작일과 종료일을 선택해주세요"
      />
    </div>
  );
}
