import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/Media";

export const Container = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: #fff;
  box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 11;
  align-items: center;
  @media ${breakPoints.mobile} {
    bottom: 63px;
    height: 60px;
  }
`;
export const InnerWrap = styled.div`
  width: calc(100% - 30px);
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ExitBox = styled.div`
  padding-left: 30px;
  @media ${breakPoints.mobile} {
    padding-left: 0;
  }
`;
export const ExitButton = styled.button`
  padding: 10px 20px;
  border-radius: 30px;
  border: 0;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  span {
    font-size: 1rem;
  }
  :hover {
    background: #f6f6f6;
  }
  @media ${breakPoints.mobile} {
    padding-left: 0;
  }
`;
export const SubmitBox = styled.div`
  button {
    margin-left: 12px;
  }
`;
