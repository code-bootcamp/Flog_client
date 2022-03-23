import styled from "@emotion/styled";
import { IContainedButton01UIEmotionProps } from "./ContainedButton01.types";

export const Button = styled.button`
  background: #58bd97;
  color: #ffffff;
  font-size: ${(props: IContainedButton01UIEmotionProps) => {
    if (props.size === "large") return "20px";
    if (props.size === "medium") return "16px";
    if (props.size === "small") return "14px";
  }};
  padding: ${(props: IContainedButton01UIEmotionProps) => {
    if (props.size === "large") return "16px 40px";
    if (props.size === "medium") return "14px 32px";
    if (props.size === "small") return "12px 28px";
  }};
  border-radius: 50px;
  border: 1px solid #58bd97;
  cursor: pointer;
  &:hover {
    background: #a1dac5;
    border-color: #a1dac5;
  }
  &.disabled {
    background: #e9e9e9;
    color: #a9a9a9;
    border-color: #cacaca;
    cursor: default;
  }
`;
