import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/Media";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(44, 49, 49, 0.7);
  z-index: 900;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  background-color: #ffffff;
  border-radius: 20px;
  width: 480px;
  height: 360px;
  padding: 44px;
  border: none;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  @media ${breakPoints.mobile} {
    width: 100vw;
    height: 100vh;
    border: none;
    border-radius: 0px;
    padding: 20px;
    left: 0px;
    top: 0px;
    transform: translate(0, 0);
  }
  @media ${breakPoints.tablet} {
  }
`;
export const Modal = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Contents = styled.div`
  @media ${breakPoints.mobile} {
    height: 100%;
    margin-bottom: 0px;
    justify-content: space-between;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const Exit = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  /* margin-bottom: 2rem; */
  img {
    width: 23px;
    :hover {
      cursor: pointer;
    }
  }
`;

export const Title = styled.div`
  font-size: 1.7rem;
  line-height: 53px;
  text-align: center;
  margin-bottom: 1rem;
  @media ${breakPoints.mobile} {
    font-size: 24px;
    margin-bottom: 36px;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const Input = styled.input`
  width: 360px;
  height: 56px;
  border: 1px solid #a9a9a9;
  border-radius: 8px;
  text-align: center;
  line-height: 150%;
  color: #626262;
  font-size: 16px;
  ::placeholder {
    color: #a9a9a9;
  }
  :focus {
    border: 1px solid #58bd97;
    outline: none;
    color: #2c3131;
  }
  margin-bottom: 2rem;
`;
