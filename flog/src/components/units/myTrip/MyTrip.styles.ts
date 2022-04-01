import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/Media";

export const ListWrap = styled.div`
  width: 95%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${breakPoints.mobile} {
    width: calc(100%-30px);
  }
  @media ${breakPoints.tablet} {
  }
`;

export const List = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${breakPoints.mobile} {
    padding: 40px 0px;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const Text = styled.div`
  font-size: 2.4rem;
  color: #2c3131;
  line-height: 120%;
  text-align: center;

  @media ${breakPoints.mobile} {
    font-size: 20px;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const TripList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  grid-gap: 32px;
  padding: 80px 0px;
  @media ${breakPoints.mobile} {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 8px;
    grid-row-gap: 12px;
    padding: 40px 0px;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
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
