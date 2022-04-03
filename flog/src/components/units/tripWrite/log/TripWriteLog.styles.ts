import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/Media";

export const Container = styled.div`
  width: 100%;
  height: auto;
`;
export const Contents = styled.div`
  width: 100%;
  background-color:yellow;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${breakPoints.mobile} {
    align-items: flex-end;

  }
`;
export const ToggleResponsive = styled.div`
  background-image: url("/img/mytrips-responsive.png");
  width: 56px;
  height: 56px;
`;
export const InnerWrap = styled.div`
  width: 95%;
  @media ${breakPoints.mobile} {
    position: fixed;
    /* display:none; */
    width: 70%;
    z-index:6;
    background-color:#fff;
    top: 0;
    overflow: hidden;
    display: ${(props) => (props.isShow ? "block" : "none")}
  }
  max-width: 1200px;
  height: ${(props) => props.isEdit? "700px": "auto"};
  display: flex;
  margin-top: 40px;

`;

export const isShow = styled.div`
  display: ${(props) => (props.isShow ? "block" : "none")};

`;

export const PlanBox = styled.div`
  display: flex;

  z-index: 5;
  top: 10px;
  left: 0;
  /* height: ${(props) => props.isEdit? "700px": "auto"} */

  // height 미정
  padding: 24px 20px;
  border: 1px solid #fff;
  width: 260px;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  margin-bottom: 100px;
`;
export const XButton = styled.div`
  font-size:21px;
  position:absolute;
  z-index: 20;
  right: 20px;
  top: 20px;
  color: #626262;
`;

export const Bar = styled.div`
  padding-left: 39px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e9e9e9;
  @media ${breakPoints.mobile} {
    padding-left: 0;
  }
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
  @media ${breakPoints.mobile} {
  }
`;
export const BtnGroup = styled.div`
  display: flex;
  height:60px;
      text-align:center;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
  
  div {
    @media ${breakPoints.mobile} {
    /* width: 100%; */
  }
    height:60px;
    text-align:center;
    display: flex;
    padding:0 16px;
    align-items: center;
    border-right: 1px solid #e9e9e9;

    :hover {
      cursor: pointer;
    }
    &.share {
      display: flex;
      @media ${breakPoints.mobile} {
        flex-grow: 1;
      }
      img {
        margin-right: 12px;
        width: 17px;
        height: 20px;
      }
    }
    &.delete {
      color: #e25c5c;
    }
  }
`;

export const PlanBtnGroup = styled.div`
  display: flex;
  padding-top: 24px;

  flex-direction: column;
`;

export const DetailBox = styled.div``;

export const PlanWrapper = styled.div`
  margin-top: 14px;
  width: 100%;
`;

export const DayWrapper = styled.div`
  padding-top: 10px;
  position: relative;
  width: 380px;
`;

export const Day = styled.span`
  position: relative;
  font-size: 20px;
  font-weight: 500;
  padding-left: 10px;
`;
export const ToggleImg = styled.img`
  top: 18px;
  left: 68px;
  width: 16px;
  position: absolute;

  :hover {
    cursor: pointer;
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
  overflow: hidden;
  img {
    margin-bottom: 7px;
    width: 98px;
    height:98px;
    border-radius:50%
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
