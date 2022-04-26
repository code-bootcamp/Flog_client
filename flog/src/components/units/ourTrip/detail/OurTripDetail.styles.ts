import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/Media";

export const Container = styled.div`
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  display: ${(props) => (props.isShow ? "block" : "none")};
  margin-top: 30px;
  height: 700px;
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #eeeeee;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(#58bd97, #58bd97);
  }
  @media ${breakPoints.mobile} {
    position: relative;
    width: 100%;
    top: auto;
    height: auto;
    overflow: auto;
  }
`;
export const Contents = styled.div`
  padding: 0 0 33px 10px;
  height: auto;

  margin: 0 0 100px;
  @media ${breakPoints.mobile} {
    width: 100%;
    /* margin: 0 0 0 22px; */
    padding-left:  22px;
  }
`;


export const Day = styled.div`
  padding: 0 0 10px 22px;
  border-left: 2px solid #58bd97;
  display: flex;
  font-size: 24px;
  font-weight: 500;
  margin-left: 10px;
  div {
    margin-right: 10px;
  }
  @media ${breakPoints.mobile} {
    margin-left: 22px;
  }
`;

export const DayContents = styled.div`
  width:100%;

  font-size: 16px;
  border-left: 2px solid #58bd97;
  position: relative;
  .ql-size-large {
    font-size: 24px;
    display: inline-block;
    margin: 43px 0 26px 0 !important;
    :before {
      content: "";
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #58bd97;
      position: absolute;
      left: -11px;
      margin-right: 60px;
    }
  }
  .ql-size-large.focused {
    font-weight: 600;
    color: #58bd97 !important;
  }
  p {
    padding-left: 68px;
  }
  img {
    text-align: center;
    display: block;
    width: 100%;
    max-width: 400px;
    margin: 10px auto;
  }
  .ql-size-small {
    font-size: 18px;
    color: #818181;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    padding-left: 29px;

    p {
      padding-left: 0;
      position: relative;
    }
    .ql-size-large {
      font-size: 18px;
      margin-bottom: 0;

      margin: 20px 10px 10px 0 !important;
      position: relative;
      :before {
        content: "";
        width: 12px;
        height: 12px;
        background-color: #58bd97;
        position: absolute;
        left: -35.5px;
        top: 5px;
        margin-right: 60px;
      }
    }
    .ql-size-small {
      font-size: 14px;
    }
    img {
      width: calc(100% - 30px);
      margin: 10px 0;

    }
  } 
`;

export const Bar = styled.div`
  width: calc(100% - 30px);
  max-width: 1200px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const MoveBack = styled.div`
  font-size: 18px;
  color: #58bd97;
  img {
    margin-right: 12px;
  }
`;
export const BtnGroup = styled.div`
  display: flex;
  button {
    margin-left: 10px;
  }
`;
export const PlanBox = styled.div`
  display: flex;
  padding: 24px 20px;
  width: calc(260 * 100% / 1200);
  border: 1px solid #fff;
  flex-direction: column;

  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;

export const DetailBox = styled.div``;
export const PlanWrapper = styled.div`
  margin-top: 14px;
  width: 100%;
`;

export const DayWrapper = styled.div`
  padding-top: 10px;

  span {
    font-size: 20px;
    font-weight: 500;
    padding-left: 10px;
  }
  img {
    margin: 0 15px 2px;
    width: 14px;

    :hover {
      cursor: pointer;
    }
  }
`;

export const DayPlanWrapper = styled.div`
  margin-top: 22px;
`;

export const DayPlanDetail = styled.div`
  width: 100%;
  padding: 8px 16px;
  background-color: #f1f1f1;
  border-radius: 12px;
  margin-bottom: 12px;
  div {
    color: #818181;
    font-size: 12px;
  }
`;

export const DayPlanLabel = styled.div`
  font-weight: 500;
  font-size: 16px;
`;
