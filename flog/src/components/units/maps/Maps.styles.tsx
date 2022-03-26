import styled from "@emotion/styled";
export const Main = styled.div`
  padding-top: 100px;
  height: 800px;
  width: 800px;
  position: relative;
  display: flex;
  border-radius: 15px;
  flex-direction: column;
  background-color: #c6e8db;
  align-items: center;
`;
export const Contents = styled.div`
  display: flex;
  fill: #fff;
  flex-direction: column;
  margin-top: 40px;
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 40px;
  color: #58bd97;
  margin-bottom: 20px;
`;
export const Subtitle = styled.span`
  font-weight: 500;
  font-size: 30px;
  color: #58bd97;
  height: 30px;
  z-index: 9;
`;
export const Text = styled.text`
  display: none;
  font-size: 20px;
  padding: 20px;
  text-anchor: middle;
  alignment-baseline: middle;
  stroke: #e25c5c;
  background-color: #e25c5c;
  fill: #e25c5c;
  :hover {
    cursor: pointer;
    fill: black;
  }
  :hover ~ Path {
    cursor: pointer;
    fill: black;
  }
`;
export const Path = styled.path`
  stroke-linejoin: round;
  stroke: #d6ecfa;
  stroke-width: 4;
  :hover {
    fill: #58bd97;
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
  margin-top: 70px;
`;

export const BackBtn = styled.button`
  padding: 15px 30px;
  position: absolute;
  left: 7%;
  top: 25%;
  font-weight: 700;
  border-radius: 50px;
  border: none;
  z-index: 2;
  color: #58bd97;
  :hover {
    color: #fff;
    background-color: #58bd97;
  }
`;
