import styled from "@emotion/styled";
import { IOutlinedButton04UIEmotionProps } from "./OutlinedButton04.types";
import { breakPoints } from "../../../../../commons/styles/Media";

export const Button = styled.button`
  background: transparent;
  color: #ffffff;
  font-size: ${(props: IOutlinedButton04UIEmotionProps) => {
    if (props.size === "large") return "20px";
    if (props.size === "medium") return "16px";
    if (props.size === "small") return "14px";
  }};
  padding: ${(props: IOutlinedButton04UIEmotionProps) => {
    if (props.size === "large") return "16px 40px";
    if (props.size === "medium") return "14px 32px";
    if (props.size === "small") return "12px 28px";
  }};
  border-radius: 50px;
  border: 2px solid #ffffff;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background: #ffffff;
    color: #58bd97;
  }
  &.disabled {
    color: #a9a9a9;
    border-color: #cacaca;
    cursor: default;
  }
  &.disabled:hover {
    background: transparent;
  }
  @media ${breakPoints.mobile} {
    padding: 10px 18px;
    font-size: ${(props: IOutlinedButton04UIEmotionProps) => {
      if (props.size === "large") return "14px";
    }};
  }
`;
