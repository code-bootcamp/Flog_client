import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/Media";

export const Container = styled.div`
  width: 338px;
  height: 56px;
  position: relative;
  display: inline-block;
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 40px;
  }
`;
export const Input01 = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  padding: 0 24px 0 54px;
  color: #a9a9a9;
  border: 1px solid #cacaca;
  font-size: 16px;
  background: transparent;
  position: relative;
  color: #2c3131;

  ::placeholder {
    color: #a9a9a9;
  }

  :focus {
    outline: none;
    color: #2c3131;
  }
  @media ${breakPoints.mobile} {
    font-size: 14px;
  }
`;
export const Icon = styled.span`
  display: block;
  position: absolute;
  top: 50%;
  left: 24px;
  transform: translateY(-50%);
`;
