import styled from "@emotion/styled";
import { IContainedButton02UIEmotionProps } from "./ContainedButton02.types";

export const Button = styled.button`
  background: #a1dac5;
  color: #ffffff;
  font-size: ${(props: IContainedButton02UIEmotionProps) => {
    if (props.size === "large") return "20px";
    if (props.size === "medium") return "16px";
    if (props.size === "small") return "14px";
  }};
  padding: ${(props: IContainedButton02UIEmotionProps) => {
    if (props.size === "large") return "16px 40px";
    if (props.size === "medium") return "14px 32px";
    if (props.size === "small") return "12px 28px";
  }};
  border-radius: 50px;
  border: 1px solid #a1dac5;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background: #bee5d6;
    border-color: #bee5d6;
  }
  &.disabled {
    background: #e9e9e9;
    color: #a9a9a9;
    border-color: #cacaca;
    cursor: default;
  }
`;
