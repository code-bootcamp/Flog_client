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
  width: 560px;
  height: 700px;
  padding: 25px;
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  width: 100%;
`;

export const Title = styled.div`
  font-weight: 400;
  font-size: 30px;
  width: 100%;
  display: flex;
  color: #2c3131;
  justify-content: space-between;
  @media ${breakPoints.mobile} {
    font-size: 24px;
  }
  @media ${breakPoints.tablet} {
  }
  img {
    width: 23px;
    :hover {
      cursor: pointer;
    }
    @media ${breakPoints.mobile} {
      width: 18px;
    }
    @media ${breakPoints.tablet} {
    }
  }
`;

export const Subtitle = styled.div`
  width: 100%;
  position: absolute;
  z-index: 9;
  align-items: flex-start;
  top: 50px;
  left: 0px;
  @media ${breakPoints.mobile} {
    top: 37px;
    left: 0px;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const DoName = styled.span`
  font-weight: 300;
  font-size: 22px;
  color: #a9a9a9;
  img {
    margin-left: 7px;
    margin-right: 5px;
  }
`;

export const CityName = styled.span`
  font-weight: 400;
  font-size: 22px;
  color: #626262;
`;

export const Exit = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;
