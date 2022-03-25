import styled from "@emotion/styled";
import { IOutlinedButton01UIEmotionProps } from "./OutlinedButton01.types";

export const Button = styled.button`
  background: transparent;
  color: #58bd97;
  font-size: ${(props: IOutlinedButton01UIEmotionProps) => {
    if (props.size === "large") return "20px";
    if (props.size === "medium") return "16px";
    if (props.size === "small") return "14px";
  }};
  padding: ${(props: IOutlinedButton01UIEmotionProps) => {
    if (props.size === "large") return "16px 40px";
    if (props.size === "medium") return "14px 32px";
    if (props.size === "small") return "12px 28px";
  }};
  border-radius: 50px;
  border: 2px solid #58bd97;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    color: #ffffff;
    background: #58bd97;
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
