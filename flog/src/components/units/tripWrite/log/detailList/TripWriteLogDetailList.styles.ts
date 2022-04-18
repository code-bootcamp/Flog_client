import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/Media";

export const DayPlanDetail = styled.div`
  width: 220px;
  padding: 8px 16px;
  background-color: #f1f1f1;
  border-radius: 12px;
  margin-bottom: 12px;
  div {
    color: #818181;
    font-size: 12px;
  }
  :hover {
    background-color: #58bd97;
    div {
      color: #ffffff;
    }
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Main = styled.div`
  position: relative;
  width: 1200px;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
export const ScrollWrap = styled.div``;

export const DayPlanWrapper = styled.div``;
export const DayPlanLabel = styled.div`
  font-weight: 500;
  font-size: 16px;
`;
