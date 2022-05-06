import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/Media";

export const Container = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
  background: #ffffff;
  @media ${breakPoints.mobile} {
    height: 48px;
  }
`;
export const InnerWrap = styled.div`
  width: 95%;
  max-width: 1200px;
  max-height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.div`
  h1 {
    font-family: "Montserrat Alternates", sans-serif;
    font-size: 30px;
    font-weight: 700;
    color: #58bd97;
    cursor: pointer;
    @media ${breakPoints.mobile} {
      font-size: 24px;
    }
  }
`;

export const MenuBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Navigation = styled.nav`
  width: auto;
  height: auto;
  margin-right: 70px;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    li {
      list-style: none;
      display: block;
      a {
        display: block;
        font-size: 1rem;
        font-weight: 500;
        padding: 10px 20px;
        border-radius: 30px;
        cursor: pointer;
        transition: all 0.3s ease;
        &.isNow {
          color: #58bd97;
        }
      }
    }
    li:hover {
      span {
        background: #f4f4f4;
      }
    }
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;
export const Hamburger = styled.div`
  width: auto;
  position: relative;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;
export const HamburgerBtn = styled.button`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #7dcbae;
  border: none;
  border-radius: 30px;
  padding: 8px 15px 5px 10px;
  cursor: pointer;
`;
export const HamburgerBtnLeft = styled.div`
  height: auto;
`;
export const HamburgerBtnRight = styled.div`
  height: auto;
  margin-left: 10px;
`;
export const HamburgerMenu = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  width: 140px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  background: #ffffff;
  overflow: hidden;
  ul {
    li {
      list-style: none;
      span {
        display: block;
        font-size: 0.9rem;
        font-weight: 400;
        padding: 12px 20px;
        cursor: pointer;
      }
    }
    li:first-of-type {
      span {
        padding-top: 15px;
      }
    }
    li:last-of-type {
      span {
        padding-top: 10px;
        padding-bottom: 15px;
        border-top: 1px solid #e9e9e9;
      }
    }
    li:hover {
      color: #58bd97;
    }
  }
`;
