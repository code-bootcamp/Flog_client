import Dropdown04 from "../../../../commons/dropdowns/04/Dropdown04.container";
import TagSearchBar from "../searchBar/TagSearchBar.container";
import * as Tag from "./TagSearchBanner.styles";

export default function TagSearchBanner(props) {
  return (
    <Tag.Banner>
      <Tag.BgImage />
      <Tag.Contents>
        <Tag.Title>
          <span style={{ fontWeight: 600 }}>6,275개</span>의 여행 족보가
          <br />
          당신을 기다리고 있어요!
        </Tag.Title>
        <Tag.Region>
          <Tag.RegionSearch onClick={props.onClickMapModal}>
            <Tag.SearchIcon>
              <img src="/img/icon-ourtrip-search.svg" alt="검색" />
            </Tag.SearchIcon>
            <Tag.SearchLabel>지역 찾아보기</Tag.SearchLabel>
          </Tag.RegionSearch>
          <Tag.SearchReturn>
            {props.inputs.doName} {props.inputs.cityName}
          </Tag.SearchReturn>
        </Tag.Region>
        <Tag.Search>
          <Dropdown04 />
          {/* {isSelect === "제목" && (
            <TitleSearch
              doName={props.inputs.doName}
              cityName={props.inputs.cityName}
            />
          )} */}
          <TagSearchBar hashTag={props.hashTag} setHashTag={props.setHashTag} />
        </Tag.Search>
      </Tag.Contents>
    </Tag.Banner>
  );
}
