import styled from "@emotion/styled";

export const Banner = styled.div`
  width: 100%;
  height: 640px;
  position: relative;
`;

export const BgImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: url("/img/ourtrips-banner-img1.png") no-repeat center; */
  /* background-size: cover; */
  /* background: linear-gradient(to right, blue, pink); */
  background-color: #f9c5d1;
  background-image: linear-gradient(315deg, #f9c5d1 0%, #9795ef 74%);
  z-index: 0;
`;

export const Contents = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: 2.4rem;
  font-weight: 400;
  color: #ffffff;
  line-height: 120%;
  text-align: center;
  margin-bottom: 60px;
`;

export const Search = styled.div`
  width: 984px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
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
`;

export const SelectBtn = styled.div`
  width: 160px;
  height: 60px;
  background: #ffffff;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 28px;
  padding-right: 28px;
  cursor: pointer;
`;

export const Selected = styled.div``;

export const SelectIcon = styled.div`
  width: 20px;
  height: 12px;
  position: relative;
  margin-left: 7px;

  img {
    position: relative;
    bottom: 3px;
  }
`;

export const SelectOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 4px 0px; */
  position: absolute;
  height: 83px;
  left: 0px;
  top: 65px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  ul {
    li {
      list-style: none;
      text-align: center;
      width: 160px;
      height: 40px;
      border-radius: 10px;
      :hover {
        color: #58bd97;
      }
      span {
        display: block;
        font-size: 0.9rem;
        font-weight: 400;
        padding: 12px 20px;
        cursor: pointer;
        text-align: center;
      }
    }
    li:last-of-type {
      span {
        border-top: 1px solid #e9e9e9;
      }
    }
  }
`;

export const SearchBox = styled.div`
  width: 664px;
  height: 60px;
  background: #ffffff;
  border-radius: 10px;
`;
