import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/Media";
export const Main = styled.div`
  position: relative;
  padding: 19px 0 0;
  width: 95%;
  max-width: 1200px;
  @media ${breakPoints.mobile} {
  }
`;
export const PlanBtnGroup = styled.div`
  display: flex;
  padding-top: 24px;

  flex-direction: column;
`;

export const EditorWrapper = styled.div`
  width: 860px;
`;

export const Container = styled.div`
  width: 100%;
  height: auto;
`;
export const Contents = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px 0 100px;
`;

export const DetailBox = styled.div``;
export const PlanWrapper = styled.div`
  margin-top: 14px;
  width: 100%;
`;

export const DayPlanWrapper = styled.div`
  margin-top: 22px;
`;

export const DayPlanDetail = styled.div`
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
  }
`;

export const DayPlanLabel = styled.div`
  font-weight: 500;
  font-size: 16px;
`;

export const isShow = styled.div`
  display: ${(props) => (props.isShow ? "block" : "none")};
  margin-top: 24px;
  max-height: 200px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const PlanBox = styled.div`
  display: flex;
  z-index: 5;
  top: 10px;
  left: 0;
  position: sticky;
  height: 1000px;
  padding: 24px 20px;
  margin-right: 80px;
  width: calc(26000% / 1200);
  border: 1px solid #fff;
  flex-direction: column;

  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;
export const Bar = styled.div`
  padding-left: 39px;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e9e9e9;
`;
export const MoveBack = styled.div`
  font-size: 18px;
  color: #58bd97;
  :hover {
    cursor: pointer;
  }
  img {
    margin-right: 12px;
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
  padding: 10px 0;
  font-size: 20px;

  font-weight: 500;
  padding-left: 10px;
  border-bottom: 1px solid #f1f1f1;
  border-top: 1px solid #f1f1f1;
`;
export const ToggleImg = styled.img`
  top: 28px;
  right: 10px;
  width: 16px;
  position: absolute;

  :hover {
    cursor: pointer;
  }
`;

export const moveBtn = styled.button`
  width: 100%;
  margin-bottom: 20px;
  background: ${(props) => (props.isMine ? "#fff" : "#58bd97")};
  border-radius: 40px;
  color: ${(props) => (props.isMine ? "#58bd97" : "#fff")};
  height: 40px;

  border: ${(props) => (props.isMine ? "1px solid #58bd97 " : "none")};

  :hover {
    background: #a1dac5;
    border-color: #a1dac5;
    color: ${(props) => (props.isMine ? "#fff" : "")};
  }
`;

export const UserInfo = styled.div`
  border-bottom: 1px solid #e9e9e9;
  padding: 8px 0 24px;
  width: 100%;
  text-align: center;
  img {
    margin-bottom: 7px;
  }
`;
export const Name = styled.div`
  font-size: 16px;
  font-weight: 700;
`;
export const Email = styled.div`
  margin-bottom: 13px;
  font-size: 12px;
  color: #7d7d7d;
`;

export const InnerWrap = styled.div`
  width: calc(100% - 30px);
  max-width: 1200px;
  display: flex;
  margin-top: 20px;
  height: 1500px;
`;
