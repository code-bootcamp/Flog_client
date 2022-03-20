import styled from "@emotion/styled";

export const TripList = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CardWrapper = styled.div`
  width: 280px;
  height: 360px;
  margin: 20px;
`;

export const Wrapper = styled.div`
  border-radius: 20px;
  box-shadow: 0px 0px 10px 0px #00000040;
  display: flex;
  flex-direction: column;
`;

export const Mark = styled.div`
  z-index: 2;
  position: absolute;
  img {
    position: relative;
    left: 25px;
  }
`;

export const Image = styled.div`
  width: 280px;
  height: 280px;
  overflow: hidden;
  position: relative;
  border-radius: 20px 20px 0 0;
  z-index: 0;
  :hover {
    img {
      transform: scale(1.1);
      transition: all 0.2s linear;
    }
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 0px 16px 16px;
  font-family: Noto Sans KR;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 23px;
  text-align: left;
  margin-bottom: 9px;
`;

export const Date = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: #818181;
`;
