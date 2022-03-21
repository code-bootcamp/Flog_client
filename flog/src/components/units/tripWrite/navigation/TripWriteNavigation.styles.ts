import styled from "@emotion/styled";

export const Navigation = styled.div`
  width: 100%;
  height: 60px;
  background: #ffffff;
  ul {
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    li {
      list-style: none;
      display: block;
      height: 100%;
      padding: 0 25px;
      button {
        height: 100%;
        background: #ffffff;
        border: 0;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        :hover {
          color: #58bd97;
        }
      }
      &.onNow {
        button {
          color: #58bd97;
          position: relative;
        }
        button:after {
          content:"";
          display:block;
          width: 90%;
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
