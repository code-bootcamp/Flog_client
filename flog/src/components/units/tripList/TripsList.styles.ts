import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/Media";

export const List = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${breakPoints.mobile} {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const TripList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  grid-gap: 30px;
  @media ${breakPoints.mobile} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 8px;
    padding-left: 8px;
    padding-right: 8px;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const Head = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 70px;
  @media ${breakPoints.mobile} {
    margin-bottom: 40px;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const Label = styled.div`
  color: #2c3131;
  font-weight: 500;
  font-size: 2rem;
  @media ${breakPoints.mobile} {
    font-weight: 400;
    font-size: 20px;
  }
  @media ${breakPoints.tablet} {
  }
`;

// export const Select = styled.select`
//   width: 154px;
//   height: 56px;
//   border: 1px solid #cacaca;
//   border-radius: 8px;
//   padding-left: 24px;
//   color: #626262;
//   font-size: 1rem;
//   line-height: 150%;
//   background: url("/img/icon-mytrip-write-card-lower.svg") no-repeat 90% 50%;
//   -webkit-appearance: none;
//   -moz-appearance: none;
//   appearance: none;
//   select::-ms-expand {
//     display: none;
//   }
//   :hover {
//     cursor: pointer;
//   }
// `;

// export const SelectOption = styled.option``;

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
  @media ${breakPoints.mobile} {
    height: 300px;
    border-radius: 10px;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const Mark = styled.div`
  z-index: 2;
  position: absolute;
  img {
    position: relative;
    left: 32px;
  }
  @media ${breakPoints.mobile} {
    img {
      position: relative;
      width: 17px;
      left: 18px;
    }
  }
  @media ${breakPoints.tablet} {
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
  @media ${breakPoints.mobile} {
    right: 12px;
    img {
      width: 17px;
      top: 10px;
    }
  }
  @media ${breakPoints.tablet} {
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
  @media ${breakPoints.mobile} {
    border-radius: 10px;
  }
  @media ${breakPoints.tablet} {
  }
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
  padding-right: 5px;
  padding-left: 5px;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  line-height: 1.5rem;
  text-align: left;
  margin-bottom: 0.5rem;
  line-height: 120%;
  @media ${breakPoints.mobile} {
    font-weight: 300;
    font-size: 16px;
    line-height: 140%;
    word-break: keep-all;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const Subtitle = styled.div`
  font-size: 1.1rem;
  display: flex;
  flex-direction: row;
  line-height: 140%;
  @media ${breakPoints.mobile} {
    font-weight: 300;
    font-size: 16px;
    line-height: 140%;
    word-break: keep-all;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const Date = styled.div`
  font-size: 20px;
  color: #a9a9a9;
`;

export const Region = styled.div`
  font-size: 20px;
  color: #a9a9a9;
  font-weight: 200;
  border-left: 1px #cacaca solid;
`;

export const NewList = styled.div`
  margin-top: 60px;
  cursor: pointer;
`;
