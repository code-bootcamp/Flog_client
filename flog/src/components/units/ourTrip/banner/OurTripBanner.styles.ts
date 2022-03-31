import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/Media";

export const Banner = styled.div`
  width: 100%;
  height: 640px;
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
`;

export const BannerWrap = styled.div`
  width: 95%;
  max-width: 1200px;
`;

export const Title = styled.div`
  font-size: 2.4rem;
  font-weight: 400;
  color: #ffffff;
  line-height: 120%;
  text-align: center;
  margin-bottom: 60px;
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
  @media ${breakPoints.mobile} {
    width: 100%;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const Region = styled.div`
  width: 984px;
  height: 60px;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  @media ${breakPoints.mobile} {
    width: 80%;
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
    width: 50px;
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
`;
export const SearchLabel = styled.span`
  color: #626262;
`;

export const SearchReturn = styled.div`
  margin-left: 30px;
  font-size: 20px;
  font-weight: 500;
`;

export const Search = styled.div`
  width: 984px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const SearchBox = styled.input`
  width: 664px;
  height: 60px;
  background: #ffffff;
  border-radius: 10px;
  padding: 0 24px;
  border: none;
  font-size: 16px;
  ::placeholder {
    color: #a9a9a9;
  }
  :focus {
    outline: none;
  }

  @media ${breakPoints.mobile} {
    width: 150px;
  }
  @media ${breakPoints.tablet} {
  }
`;
