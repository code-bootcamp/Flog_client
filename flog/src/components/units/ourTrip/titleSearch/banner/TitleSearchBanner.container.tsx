import Dropdown04 from "../../../../commons/dropdowns/04/Dropdown04.container";
import TitleSearchBar from "../searchBar/TitleSearchBar.container";
import * as Title from "./TitleSearchBanner.styles";

export default function TitleSearchBanner(props) {
  return (
    <Title.Banner>
      <Title.BgImage />
      <Title.Contents>
        <Title.Title>
          <span style={{ fontWeight: 600 }}>6,275개</span>의 여행 족보가
          <br />
          당신을 기다리고 있어요!
        </Title.Title>
        <Title.Region>
          <Title.RegionSearch onClick={props.onClickMapModal}>
            <Title.SearchIcon>
              <img src="/img/icon-ourtrip-search.svg" alt="검색" />
            </Title.SearchIcon>
            <Title.SearchLabel>지역 찾아보기</Title.SearchLabel>
          </Title.RegionSearch>
          <Title.SearchReturn>
            {props.inputs.doName} {props.inputs.cityName}
          </Title.SearchReturn>
        </Title.Region>
        <Title.Search>
          <Dropdown04 />
          <TitleSearchBar
            doName={props.inputs.doName}
            cityName={props.inputs.cityName}
          />
        </Title.Search>
      </Title.Contents>
    </Title.Banner>
  );
}
