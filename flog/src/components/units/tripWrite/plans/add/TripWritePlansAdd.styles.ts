import styled from "@emotion/styled";

export const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
`;
export const AddButton = styled.button`
  border: 0;
  background: transparent;
  width: 100%;
  height: 100%;
  padding: 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .icon {
    margin-bottom: 8px;
  }
  .text {
    font-size: 14px;
    color: #58bd97;
    font-weight: 500;
  }
`;
