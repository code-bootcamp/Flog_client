import styled from "@emotion/styled";

export const Navigation = styled.div`
  width: 100%;
  height: 60px;
  background: #ffffff;
`;

export const NavigationList = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.div`
  list-style: none;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 5px;

  button {
    height: auto;
    background: #ffffff;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    padding: 10px 20px;
    border-radius: 30px;

    cursor: pointer;
    &:hover {
      background: #f8f8f8;
    }
  }
  &.onNow {
    button {
      color: #58bd97;
      position: relative;
      &:after {
        content: "";
        display: block;
        width: calc(90% - 50px);
        height: 2px;
        background: #58bd97;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`;

export const Button = styled.button``;
