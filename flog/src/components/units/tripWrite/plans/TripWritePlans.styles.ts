import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/Media";

export const Container = styled.div`
  display: block;
  width: 100%;
  height: auto;
`;
export const Contents = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 60px 0 100px 0;
  @media ${breakPoints.mobile} {
    margin: 0 0 70px;
  }
`;

export const InnerWrap = styled.div`
  width: 95%;
  max-width: 1200px;
  min-height: calc(100vh - 560px);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  display: block;
  width: 25%;
  padding: 11px;
  @media ${breakPoints.tablet} {
    width: 50%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const TitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  @media ${breakPoints.mobile} {
    margin-top: 26px;
  }
`;
export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const TitleNumber = styled.div`
  width: 80px;
  height: 80px;
  background: #58bd97;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  span {
    color: #ffffff;
    font-size: 60px;
    font-weight: 700;
  }
  &:after {
    content: "";
    width: 100%;
    height: 4px;
    position: absolute;
    top: calc(50% - 2px);
    background: #ffffff;
  }
`;
export const TitleText = styled.div`
  padding-left: 15px;
  .date {
    font-size: 0.9rem;
    color: #818181;
    margin-bottom: 7px;
  }
  .text {
    font-size: 1.35rem;
    font-weight: 500;
  }
`;
export const PlansBox = styled.div`
  width: 100%;
`;
