import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/Media";

export const Banner = styled.div`
  width: 100%;
  height: 640px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media ${breakPoints.mobile} {
    height: 280px;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const BgImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f9c5d1;
  background-image: linear-gradient(315deg, #f9c5d1 0%, #9795ef 74%);
  z-index: 0;
`;

export const InnerWrap = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  max-width: 1200px;
  @media ${breakPoints.mobile} {
    /* width: calc(100%-30px); */
  }
  @media ${breakPoints.tablet} {
  }
`;

export const UpperWrap = styled.div`
  height: 340px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${breakPoints.mobile} {
    height: 140px;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const LowerWrap = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media ${breakPoints.mobile} {
    height: 140px;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const Title = styled.div`
  font-size: 2.4rem;
  font-weight: 400;
  color: #ffffff;
  line-height: 120%;
  text-align: center;
  @media ${breakPoints.mobile} {
    font-size: 20px;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const RegionWrap = styled.div`
  width: 984px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const Region = styled.div`
  width: 86%;
  height: 60px;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 48px;
    margin-bottom: 12px;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const RegionSearch = styled.div`
  width: 178px;
  height: 40px;
  background: #c6e8db;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    width: 75px;
    border-radius: 100px;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const SearchIcon = styled.div`
  width: 19px;
  height: 19px;
  margin-right: 12px;
  img {
    width: 100%;
    height: 100%;
  }
  @media ${breakPoints.mobile} {
    margin-right: 4px;
  }
  @media ${breakPoints.tablet} {
  }
`;
export const SearchLabel = styled.span`
  color: #626262;
  @media ${breakPoints.mobile} {
    font-weight: 400;
    font-size: 14px;
    color: black;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const SearchReturn = styled.div`
  padding-left: 30px;
  font-size: 20px;
  font-weight: 500;
  .default {
    color: #a9a9a9;
  }
  @media ${breakPoints.mobile} {
    padding-left: 20px;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const Search = styled.div`
  width: 984px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 48px;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const SearchBox = styled.input`
  width: 82%;
  height: 60px;
  background: #ffffff;
  border-radius: 10px;
  padding: 0 24px;
  border: none;
  font-size: 16px;
  ::placeholder {
    color: #a9a9a9;
    font-size: 20px;
    font-weight: 500;
  }
  :focus {
    outline: none;
  }

  @media ${breakPoints.mobile} {
    width: 230px;
    height: 48px;
    margin-left: 10px;
    ::placeholder {
      font-weight: 400;
      font-size: 15px;
    }
  }
  @media ${breakPoints.tablet} {
  }
`;
