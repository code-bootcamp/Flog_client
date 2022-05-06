import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/Media";

export const Container = styled.div`
  width: 100%;
  display: ${(props) => (props.isShow ? "block" : "none")};
  min-height: 700px;
  /* overflow-y: scroll; */
  /* ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #eeeeee;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(#58bd97, #58bd97);
  } */
`;
export const Contents = styled.div`
  padding: 0 0 33px 10px;
  height: auto;
  margin: 0 0 100px;
  > div {
    position: relative;
    @media ${breakPoints.mobile} {
      .line {
        background-color: #58bd97;
        width: 2px;
        top: 30px;
        position: absolute;
        z-index: 3;
        height: 30px;
      }
    }
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    padding-left: 22px;
  }
`;

export const Day = styled.div`
  padding: 0 0 40px 0;
  display: flex;
  font-size: 24px;
  font-weight: 500;
  div {
    margin-right: 10px;
  }
  @media ${breakPoints.mobile} {
    margin-left: 22px;
    padding: 0;
  }
`;

export const DayContents = styled.div`
  width: 100%;
  font-size: 16px;
  position: relative;
  .ql-size-large:after {
    content: "";
    width: 2px;
    position: absolute;
    height: 25px;
    left: 0;
    top: 10px;
    border-left: 2px solid #58bd97;
    @media ${breakPoints.mobile} {
      display: none;
    }
  }
  .ql-size-large {
    font-weight: 500;
    font-size: 24px;
    display: inline-block;
    margin: 0 !important;
    :before {
      content: "";
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #58bd97;
      position: absolute;
      left: -9.5px;
      margin: 5px 0 0;
    }
  }
  .ql-size-large.focused {
    font-weight: 600;
    color: #58bd97 !important;
  }
  P:nth-of-type(2) {
    border: 2px solid #fff;
  }
  p:first-of-type {
    display: none;
  }
  p {
    padding: 0 68px;
    border-left: 2px solid #58bd97;
  }
  img {
    text-align: center;
    display: block;
    width: 100%;
    padding: 10px 0;
    max-width: 400px;
    margin: 0 auto;
  }
  .ql-size-small {
    font-size: 18px;
    color: #818181;
  }
  @media ${breakPoints.mobile} {
    width: 100%;

    p {
      padding: 0 29px;
      position: relative;
    }
    .ql-size-large {
      font-size: 18px;
      margin: 20px 10px 10px 0 !important;
      position: relative;
      :before {
        width: 12px;
        height: 12px;
        left: -35.5px;
      }
    }
    .ql-size-small {
      font-size: 14px;
    }
    img {
      width: calc(100% - 30px);
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
