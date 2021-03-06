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
  width: 95%;
  max-width: 960px;
  height: 700px;
  padding: 25px 50px;
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
  justify-content: flex-end;
  @media ${breakPoints.mobile} {
    font-size: 24px;
  }
  @media ${breakPoints.tablet} {
  }
  img {
    width: 23px;
    @media ${breakPoints.mobile} {
      width: 18px;
    }
    @media ${breakPoints.tablet} {
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  margin-top: 30px;
  padding-right: 40px;
  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 10px;
    overflow: hidden;
  }
  &::-webkit-scrollbar-thumb {
    background: #d4d4d4;
    border-radius: 10px;
  }
`;

export const MoneyBookColumn = styled.div`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #dddddd;
  margin-bottom: 40px;
  &:last-of-type {
    border-bottom: 0;
  }
  @media ${breakPoints.mobile} {
    margin-bottom: 0;
  }
`;
export const MoneyBookTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 40px;
  .title {
    font-size: 1.1rem;
    font-weight: 500;
  }
  .amount {
    font-size: 1.1rem;
    font-weight: 500;
  }
  @media ${breakPoints.mobile} {
    font-size: 18px;
    padding: 24px 0 36px;
  }
`;
export const MoneyBookCards = styled.div``;
