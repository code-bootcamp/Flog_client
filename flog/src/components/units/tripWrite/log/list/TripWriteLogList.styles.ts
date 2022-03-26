import styled from "@emotion/styled";
export const Main = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
`;
export const PlanBtnGroup = styled.div`
  display: flex;
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
  padding: 24px 20px;
  width: calc(26000% / 1200);
  border: 1px solid #fff;
  flex-direction: column;

  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;
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
    margin-left: 15px;
    margin-bottom: 2px;
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
