import styled from "@emotion/styled";

export const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BodyInnerWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TripList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  grid-gap: 40px;
`;

export const CardWrapper = styled.div`
  width: 100%;
  height: 360px;
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
  width: 100%;
  height: 280px;
  overflow: hidden;
  position: relative;
  border-radius: 20px 20px 0 0;
  z-index: 0;
  :hover {
    img {
      top: 50%;
      transform: translateY(-50%) scale(1.2);
      transition: all 0.2s ease-in-out;
    }
  }
  img {
    max-width: 100%;
    height: auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 0px 16px 16px;
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

export const NewList = styled.div`
  margin-top: 60px;
`;
