import styled from "@emotion/styled";
import { IInputProps } from "./OutlinedInput01.types";
export const Input01 = styled.input`
  width: ${(props: IInputProps) => {
    if (!props.version) return "338px";
    if (props.version === "time") return "160px";
    if (props.version === "memo") return "338px";
  }};
  height: ${(props: IInputProps) => {
    if (!props.version) return "56px";
    if (props.version === "time") return "56px";
    if (props.version === "memo") return "100px";
  }};
  border-radius: 8px;
  padding: 0 24px;
  color: ${(props: IInputProps) => (props.error ? " #E25C5C" : "#626262")};
  border: ${(props: IInputProps) =>
    props.error ? "1px solid #E25C5C" : "1px solid #a9a9a9"};
  font-size: 16px;

  ::placeholder {
    color: #a9a9a9;
  }

  :focus {
    border: 1px solid #58bd97;

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
