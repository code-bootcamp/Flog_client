import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/Media";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(44, 49, 49, 0.7);
  z-index: 900;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  background-color: #ffffff;
  border-radius: 20px;
  width: 95%;
  max-width: 1200px;
  height: 700px;
  padding: 25px;
  border: none;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  @media ${breakPoints.mobile} {
    width: 100vw;
    height: 100vh;
    border: none;
    border-radius: 0px;
    padding: 20px;
    left: 0px;
    top: 0px;
    transform: translate(0, 0);
  }
  @media ${breakPoints.tablet} {
  }
`;
export const Modal = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  width: 100%;
`;

export const Title = styled.div`
  font-weight: 400;
  font-size: 30px;
  width: 100%;
  display: flex;
  color: #2c3131;
  justify-content: flex-end;
  @media ${breakPoints.mobile} {
    font-size: 24px;
  }
  @media ${breakPoints.tablet} {
  }
  img {
    width: 23px;
    :hover {
      cursor: pointer;
    }
    @media ${breakPoints.mobile} {
      width: 18px;
    }
    @media ${breakPoints.tablet} {
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20px;
  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 10px;
    overflow: hidden;
  }
  &::-webkit-scrollbar-thumb {
    background: #d4d4d4;
    border-radius: 10px;
  }
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
export const ScheduleTitle = styled.div`
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
