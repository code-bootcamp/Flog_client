import styled from "@emotion/styled";
import { IOutlinedButton03UIEmotionProps } from "./OutlinedButton03.types";

export const Button = styled.button`
  background: transparent;
  color: #e25c5c;
  font-size: ${(props: IOutlinedButton03UIEmotionProps) => {
    if (props.size === "large") return "20px";
    if (props.size === "medium") return "16px";
    if (props.size === "small") return "14px";
  }};
  padding: ${(props: IOutlinedButton03UIEmotionProps) => {
    if (props.size === "large") return "16px 40px";
    if (props.size === "medium") return "14px 32px";
    if (props.size === "small") return "12px 28px";
  }};
  border-radius: 50px;
  border: 2px solid #e25c5c;
  cursor: pointer;
  &:hover {
    background: #f9efef;
  }
  &.disabled {
    color: #a9a9a9;
    border-color: #cacaca;
    cursor: default;
  }
  &.disabled:hover {
    background: transparent;
  }
`;
