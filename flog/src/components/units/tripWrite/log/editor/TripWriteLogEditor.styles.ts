import styled from "@emotion/styled";

export const Main = styled.div`
  width: 860px;
  margin-top: 12px;
  position: relative;
  background-color: yellow;
  h1 {
    margin-bottom: 20px;
  }
`;
export const hideWrapper = styled.div`
  display: none;
  position: absolute;
`;

export const EditorWrapper = styled.div`
  position: absolute;
  right: 0;

  display: ${(props) => (props.isShow ? "block" : "none")};
`;
export const ReactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .ql-editor img {
    max-width: 200px !important;
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
