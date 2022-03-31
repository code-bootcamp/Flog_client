import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/Media";

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 25px 0 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media ${breakPoints.mobile} {
    padding: 0 0 25px;
  }
`;
export const AddButton = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
`;
