import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { getYear, getMonth } from "date-fns";
import { ko } from "date-fns/locale";
import * as Date from "./DatePicker.styles";
import { IMyDatePickerProps } from "./DatePicker.types";

export default function MyDatePicker(props) {
  // const [startDate, setStartDate] = useState(null);
  // const [endDate, setEndDate] = useState(null);
  const onChange = (dates: [any, any]) => {
    const [start, end] = dates;

    props.setInputs({ ...props.inputs, startDate: start, endDate: end });
  };

  return (
    <div>
      {/* <div>{String(startDate)}</div> */}
      {/* <div>{String(endDate)}</div> */}
      <Date.MyDatePicker
        renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
          <Date.DatePickerHead>
            <Date.PrevButton>
              <img src="/img/icon-modal-prev.svg" onClick={decreaseMonth} />
            </Date.PrevButton>
            <Date.Text>
              {getYear(date)}년 {getMonth(date) + 1}월
            </Date.Text>

            <Date.NextButton>
              <img src="/img/icon-modal-next.svg" onClick={increaseMonth} />
            </Date.NextButton>
          </Date.DatePickerHead>
        )}
        className="date-input"
        dateFormat="yyyy년 M월 d일"
        locale={ko}
        selected={props.inputs.startDate}
        onChange={onChange}
        startDate={props.inputs.startDate}
        endDate={props.inputs.endDate}
        selectsRange
        placeholderText="시작일과 종료일을 선택해주세요"
      />
    </div>
  );
}
