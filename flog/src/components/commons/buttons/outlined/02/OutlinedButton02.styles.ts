import styled from "@emotion/styled";
import { IOutlinedButton02UIEmotionProps } from "./OutlinedButton02.types";

export const Button = styled.button`
  background: transparent;
  color: #a1dac5;
  font-size: ${(props: IOutlinedButton02UIEmotionProps) => {
    if (props.size === "large") return "20px";
    if (props.size === "medium") return "16px";
    if (props.size === "small") return "14px";
  }};
  padding: ${(props: IOutlinedButton02UIEmotionProps) => {
    if (props.size === "large") return "16px 40px";
    if (props.size === "medium") return "14px 32px";
    if (props.size === "small") return "12px 28px";
  }};
  border-radius: 50px;
  border: 2px solid #a1dac5;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background: #a1dac5;
    color: #ffffff;
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
