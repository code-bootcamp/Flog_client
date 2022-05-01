import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/Media";

export const PlanBtnGroup = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  > button:nth-of-type(1) {
    margin-bottom: 20px;
  }
`;

export const PlanWrapper = styled.div`
  width: 100%;
`;

export const XButton = styled.div`
  font-size: 21px;
  position: absolute;
  z-index: 20;
  right: 10px;
  top: 10px;
  font-size: 25px;
  color: #626262;
  cursor: pointer;
  display: none;

  @media ${breakPoints.mobile} {
    display: block;
  }
`;

export const isShow = styled.div`
  display: ${(props) => (props.isShow ? "block" : "none")};
  margin-top: 24px;
  padding: 0 24px;
  max-height: 200px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const PlanBox = styled.div`
  display: flex;
  position: sticky;
  top: 0px;
  width: 100%;
  z-index: 5;
  min-height: 600px;
  padding: 50px 0;
  border: 1px solid #fff;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  @media ${breakPoints.mobile} {
    border-radius: 0;

  }
`;

export const BtnGroup = styled.div`
  display: flex;
  div {
    padding: 28px 48px;
    border-right: 1px solid #e9e9e9;
    :hover {
      cursor: pointer;
    }
    &.share {
      display: flex;
      img {
        margin-right: 12px;
      }
    }
    &.delete {
      color: #e25c5c;
    }
  }
`;

export const DayWrapper = styled.div`
  padding-top: 10px;
  position: relative;
`;

export const Day = styled.div`
  position: relative;
  padding: 10px 24px;
  font-size: 20px;
  font-weight: 500;
  border-bottom: 1px solid #f1f1f1;
  border-top: 1px solid #f1f1f1;
`;
export const ToggleImg = styled.img`
  top: 28px;
  right: 25px;
  width: 16px;
  position: absolute;

  :hover {
    cursor: pointer;
  }
`;

export const moveBtn = styled.button`
  width: 100%;
  border-radius: 40px;
  background-color: #fff;
  color: #58bd97;
  height: 40px;

  border: 1px solid #58bd97;

  :hover {
    background: #a1dac5;
    border-color: #a1dac5;
    color: #fff;
  }
`;

export const UserInfo = styled.div`
  border-bottom: 1px solid #e9e9e9;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0 24px 24px;
  img {
    margin-right: 20px;
    width: 60px;
  }
  > div {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
  > button {
    width: 100%;
    margin-top: 12px;
  }
`;
export const Name = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
export const Email = styled.div`
  font-size: 14px;
  color: #7d7d7d;
`;
