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
  width: 600px;
  height: 700px;
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
  justify-content: space-between;
`;

export const Exit = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  img {
    width: 23px;
    :hover {
      cursor: pointer;
    }
  }
`;

export const Contents = styled.div`
  margin-bottom: 3rem;
  @media ${breakPoints.mobile} {
    height: 100%;
    margin-bottom: 0px;
    justify-content: space-between;
  }
  @media ${breakPoints.tablet} {
  }
`;
export const Title = styled.div`
  font-size: 2rem;
  line-height: 53px;
  text-align: center;
  font-weight: 400;
  margin-bottom: 60px;
  @media ${breakPoints.mobile} {
    font-size: 24px;
    margin-bottom: 30px;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  @media ${breakPoints.mobile} {
    flex-direction: column;
    align-items: center;
    align-items: flex-start;
    margin-bottom: 12px;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const Label = styled.div`
  font-size: 1.1rem;
  margin-right: 34px;
  color: #626262;
  @media ${breakPoints.mobile} {
    font-size: 14px;
    margin-right: 0px;
    font-weight: 300;
    margin-bottom: 6px;
  }
  @media ${breakPoints.tablet} {
  }
`;
