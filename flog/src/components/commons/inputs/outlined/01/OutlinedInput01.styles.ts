import styled from "@emotion/styled";
import { IInputProps } from "./OutlinedInput01.types";
export const Input01 = styled.input`
  width: 338px;
  background-color: #fff;
  height: 56px;
  border-radius: 8px;
  padding: 0 24px;
  color: ${(props: IInputProps) => (props.error ? " #E25C5C" : "#626262")};
  border: ${(props: IInputProps) =>
    props.error ? "1px solid #E25C5C" : "1px solid #a9a9a9"};
  font-size: 16px;

  ::placeholder {
    color: #a9a9a9;
    background-color: #fff;
  }

  :focus {
    border: 1px solid #58bd97;
    background-color: #fff;

    outline: none;
    color: #2c3131;
  }

  &.disabled {
    background: #cacaca;
    color: #a9a9a9;
    border: 1px solid #cacaca;
    cursor: default;
  }
`;
