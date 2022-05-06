import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/Media";

export const Main = styled.div`
  width: 100%;
  height: auto;
  h1 {
    margin-bottom: 20px;
  }
  @media ${breakPoints.mobile} {
    padding: 0 16px;
  }
`;
export const hideWrapper = styled.div`
  display: none;
`;

export const EditorWrapper = styled.div`
  display: ${(props) => (props.isShow ? "block" : "none")};
`;

export const ReactWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .ql-editor img {
    max-width: 400px !important;
  }
  h3 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  .ql-editor .ql-size-large {
    font-size: 24px;
  }
  .ql-editor .ql-size-small {
    font-size: 18px;
  }
  padding: 0;
  margin: 0;
`;
export const AddBtn = styled.div`
  padding: 20px;
  border: 1px solid green;
  margin-bottom: 40px;
  :hover {
    cursor: pointer;
    background-color: yellow;
  }
`;

export const PlanWrapper = styled.div`
  margin-top: 14px;
  width: 100%;
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
