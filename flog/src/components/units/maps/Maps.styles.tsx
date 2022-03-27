import styled from "@emotion/styled";
export const Main = styled.div`
  padding-top: 80px;
  height: 700px;
  width: 700px;
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
  font-size: 35px;
  color: #58bd97;
  margin-bottom: 20px;
`;
export const Subtitle = styled.span`
  font-weight: 500;
  font-size: 25px;
  color: #58bd97;
  height: 30px;
  z-index: 9;
`;
export const Text = styled.text`
  display: none;
  font-size: 30px;
  padding: 20px;
  text-anchor: middle;
  alignment-baseline: middle;
  background-color: #e25c5c;
  fill: red;
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
  padding: 13px 20px;
  position: absolute;
  left: 6%;
  top: 19%;
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
