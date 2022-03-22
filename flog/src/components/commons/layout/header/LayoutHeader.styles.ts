import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
  background: #ffffff;
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
    font-size: 24px;
    font-weight: 600;
    color: #58bd97;
    cursor: pointer;
  }
`;

export const MenuBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Navigation = styled.div`
  width: auto;
  height: auto;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    li {
      list-style: none;
      display: block;
      span {
        display: block;
        font-size: 1rem;
        font-weight: 500;
        margin-right: 30px;
        padding: 0 10px;
        line-height: 80px;
        cursor: pointer;
      }
    }
  }
`;
export const Hamburger = styled.div`
  width: auto;
  position: relative;
`;
export const HamburgerBtn = styled.button`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #58bd97;
  border: none;
  border-radius: 30px;
  padding: 8px 15px 6px 10px;
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
  right: 0;
  width: 140px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  background: #ffffff;
  overflow: hidden;
  ul {
    li {
      list-style: none;
      span {
        display: block;
        font-size: 0.9rem;
        font-weight: 500;
        padding: 7px 20px;
        cursor: pointer;
      }
    }
    li:first-of-type {
      span {
        padding-top: 12px;
      }
    }
    li:last-of-type {
      span {
        padding-top: 10px;
        padding-bottom: 12px;
        border-top: 1px solid #d4d4d4;
      }
    }
    li:hover {
      background: #f6f6f6;
    }
  }
`;
