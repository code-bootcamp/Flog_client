import styled from "@emotion/styled";

export const List = styled.div`
  width: 95%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 80px;
`;

export const TripList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  grid-gap: 30px;
`;

export const Head = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 70px;
`;

export const Label = styled.div`
  color: #2c3131;
  font-weight: 500;
  font-size: 2rem;
`;

export const Select = styled.select`
  width: 154px;
  height: 56px;
  border: 1px solid #cacaca;
  border-radius: 8px;
  padding-left: 24px;
  color: #626262;
  font-size: 1rem;
  line-height: 150%;
  background: url("/img/icon-mytrip-write-card-lower.svg") no-repeat 90% 50%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  select::-ms-expand {
    display: none;
  }
  :hover {
    cursor: pointer;
  }
`;

export const SelectOption = styled.option``;

export const CardWrapper = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  height: 456px;
  border-radius: 20px;
  background: linear-gradient(
    180deg,
    #a9a9a9 0%,
    rgba(233, 233, 233, 0) 29.34%
  );
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: start;
  position: relative;
`;

export const Mark = styled.div`
  z-index: 2;
  position: absolute;
  img {
    position: relative;
    left: 32px;
  }
`;

export const EditWrap = styled.div`
  z-index: 3;
  position: absolute;
  right: 21px;
  img {
    position: relative;
    top: 21px;
    width: 1.5rem;
    :hover {
      cursor: pointer;
    }
  }
`;

export const Image = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
  border-radius: 20px;
  z-index: 0;
  aspect-ratio: 38 / 32.8;
  cursor: pointer;
  :hover {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: relative;
      top: 50%;
      transform: translateY(-50%) scale(1.2);
      transition: all 0.2s ease-in-out;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 1.2rem;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  line-height: 1.5rem;
  text-align: left;
  margin-bottom: 0.5rem;
  line-height: 120%;
`;

export const Subtitle = styled.div`
  font-size: 1.1rem;
  display: flex;
  flex-direction: row;
  line-height: 140%;
`;

export const Date = styled.div`
  font-size: 1.1rem;
  color: #a9a9a9;
  margin-right: 6px;
`;

export const Region = styled.div`
  font-size: 1.1rem;
  color: #a9a9a9;
  font-weight: 300;
  line-height: 28px;
`;

export const NewList = styled.div`
  margin-top: 60px;
  cursor: pointer;
`;
