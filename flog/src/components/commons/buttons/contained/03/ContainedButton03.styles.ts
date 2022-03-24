import styled from "@emotion/styled";
import { IContainedButton03UIEmotionProps } from "./ContainedButton03.types";

export const Button = styled.button`
  background: #ea4262;
  color: #ffffff;
  font-size: ${(props: IContainedButton03UIEmotionProps) => {
    if (props.size === "large") return "20px";
    if (props.size === "medium") return "16px";
    if (props.size === "small") return "14px";
  }};
  padding: ${(props: IContainedButton03UIEmotionProps) => {
    if (props.size === "large") return "16px 40px";
    if (props.size === "medium") return "14px 32px";
    if (props.size === "small") return "12px 28px";
  }};
  border-radius: 50px;
  border: 1px solid #ea4262;
  cursor: pointer;
  &:hover {
    background: #f2798f;
    border-color: #f2798f;
  }
  &.disabled {
    background: #e9e9e9;
    color: #a9a9a9;
    border-color: #cacaca;
    cursor: default;
  }
`;
