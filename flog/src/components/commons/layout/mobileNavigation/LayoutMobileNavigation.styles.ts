import styled from "@emotion/styled";

export const Container = styled.nav`
  width: 100%;
  height: 64px;
  background: #fff;
  border-top: 1px solid #e9e9e9;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
`;

export const NavigationList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.li`
  display: block;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.button`
  background: transparent;
  border: 0;
`;
export const IconBox = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 1px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Icon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const TextBox = styled.div`
  span {
    font-size: 12px;
    color: #626262;
  }
`;
