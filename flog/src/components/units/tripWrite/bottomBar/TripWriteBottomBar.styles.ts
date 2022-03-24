import styled from "@emotion/styled";

export const Container = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: #fff;
  box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: center;

  align-items: center;
`;
export const InnerWrap = styled.div`
  width: calc(100% - 30px);
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ExitBox = styled.div`
  padding-left: 30px;
`;
export const ExitButton = styled.button`
  padding: 10px 20px;
  border-radius: 30px;
  border: 0;
  background: transparent;
  cursor: pointer;
  span {
    font-size: 1rem;
  }
  :hover {
    background: #f6f6f6;
  }
`;
export const SubmitBox = styled.div`
  button {
    margin-left: 12px;
  }
`;
