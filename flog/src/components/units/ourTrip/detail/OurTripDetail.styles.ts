import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  position: relative  !important;
  top: ${props => props.isMine? "-190px  " :' -400px'};

  padding-top: 30px;
  height: auto;
`;
export const Contents = styled.div`
  padding: 0 0 33px 10px;
  height: auto;
  margin: 15px 0 100px;
`;

export const InnerWrap = styled.div`
  width: calc(100% - 30px);
  max-width: 1200px;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
`;
export const Day = styled.div`
  margin: 0 0 8px 12px;
  display: flex;
  font-size: 26px;
  font-weight: 500;
  div {
    margin-right: 10px;
  }
`;
export const Line = styled.div`
  height: 500px;
`;
export const Empty = styled.div`
  color:  #58BD97;
  font-size: 20px;
  margin: 100px 0 0 150px;

`;
export const DayContents = styled.div`
  font-size: 16px;
  border-left: 2px solid #58bd97;
  position: relative;
  p {
    padding-left:60px;
  }
  .ql-size-large {
    font-size: 24px;
    display: inline-block;
    margin: 43px 10px 26px 0 !important;
    
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
  .focused {
      background-color: #D1EAE1 !important;
      display: inline-block;
      

  }
  img {
    width: 300px;
    text-align: center;
    display: block;
    margin: 10px auto;
    
  }
  .ql-size-small {
    font-size: 18px;
    color: #818181;
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
