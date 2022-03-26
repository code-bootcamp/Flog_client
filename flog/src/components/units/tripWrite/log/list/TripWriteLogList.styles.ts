import styled from "@emotion/styled";
export const Main = styled.div`
  width: 1200px;
  display: flex;
  height: 2000px;
`;
export const PlanBtnGroup = styled.div`
  display: flex;
  padding-top: 24px;

  flex-direction: column;
`;
export const moveBtn = styled.button`
  width: 100%;
  margin-bottom: 20px;
  background: #58bd97;
  border-radius: 40px;
  color: #fff;
  height: 40px;
  border: none;
  :hover {
    background: #a1dac5;
    border-color: #a1dac5;
  }
`;
export const PlanBox = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  height: 1100px;
  // height 미정
  padding: 24px 20px;
  margin-right: 80px;
  width: calc(26000% / 1200);
  border: 1px solid #fff;
  width: 260px;
  flex-direction: column;

  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
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
export const PlanWrapper = styled.div`
  margin-top: 14px;
  width: 100%;
`;
export const DayWrapper = styled.div`
  padding-top: 10px;
  div {
    position: relative;
  }
  span {
    font-size: 20px;
    font-weight: 500;
    padding-left: 10px;
  }
  img {
    position: absolute;
    margin-bottom: 2px;
    width: 18px;
    top: 5px;
    left: 30%;
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
  color: #818181;

  div {
    font-size: 12px;
  }
  :hover {
    background: #58bd97;
  }
`;

export const DayPlanLabel = styled.h5`
  font-weight: 500;
  color: black;
  margin-bottom: 4px;
  font-size: 16px;
`;
export const EditorWrapper = styled.div``;
