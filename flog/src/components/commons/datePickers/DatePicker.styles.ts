import styled from "@emotion/styled";
import DatePicker from "react-datepicker";

export const DatePickerHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PrevButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NextButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  text-align: center;
  margin-right: 16px;
  margin-left: 16px;
`;

export const MyDatePicker = styled(DatePicker)`
  width: 338px;
  height: 56px;
  border: 1px solid #a9a9a9;
  border-radius: 8px;
  padding-left: 24px;
  font-size: 16px;
  color: #626262;
  :focus {
    border: 1px solid #58bd97;
    outline: none;
    color: #2c3131;
  }
  ::placeholder {
    color: #a9a9a9;
  }
`;
