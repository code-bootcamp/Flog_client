import styled from "@emotion/styled";
export const Main = styled.div`
  position: relative;
  padding: 19px 0 0;
  width: 1200px; 
`;
export const PlanBtnGroup = styled.div`
  display: flex;
  padding-top: 24px;

  flex-direction: column;
`;

export const EditorWrapper = styled.div`
  width: 860px;
  position: absolute;
  top: ${(props) =>
    props.index === 0
      ? "-45px"
      : props.index === 1
      ? "-79px"
      : props.index === 2
      ? "-113px"
      : "-147px"};
  right: 0;
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
  width: 220px;
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


