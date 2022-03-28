import styled from "@emotion/styled";
export const Main = styled.div`
  height: 480px;
  width: 500px;
  position: relative;
  display: flex;
  border-radius: 15px;
  flex-direction: column;
  background-color: #f1f1f1;
  align-items: center;
`;
export const Contents = styled.div`
  display: flex;
  fill: #fff;
  flex-direction: column;
  position: absolute;
  top: 10px;
  margin-top: 40px;
`;

export const Text = styled.text`
  font-size: 35px;
  font-weight: 500;
  padding: 20px;
  text-anchor: middle;
  alignment-baseline: middle;
  fill: #2c3131;
  cursor: pointer;
  :hover {
    fill: #2c3131;
  }
  :hover ~ Path {
    cursor: pointer;
    fill: #2c3131;
  }
`;
export const Path = styled.path`
  stroke-linejoin: round;
  stroke: #d6ecfa;
  stroke-width: 4;
  :hover {
    cursor: pointer;
    fill: #eaf7f2;
  }
  :hover + Text {
    display: block;
  }
`;
export const CityWrapper = styled.div`
  transition: 2s;
  display: none;
  position: absolute;
  opacity: 0;
  margin-top: 40px;
`;

export const BackBtn = styled.div`
  padding: 13px 20px;
  position: absolute;
  font-size: 20px;
  left: 1%;
  top: 15px;
  font-weight: 300;

  z-index: 2;
  color: #58bd97;
  :hover {
    cursor: pointer;
  }
  img {
    margin-right: 11px;
  }
`;
