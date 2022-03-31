import ContainedButton03 from "../../../commons/buttons/contained/03/ContainedButton03.container";
import Dropdown04 from "../../../commons/dropdowns/04/Dropdown04.container";
import * as Our from "./OurTripBanner.styles";

export default function OurTripBannerUI(props) {
  return (
    <Our.Banner>
      <Our.BgImage />
      <Our.InnerWrap>
        <Our.BannerWrap>
          <Our.Title>
            <span style={{ fontWeight: 600 }}>6,275개</span>의 여행 족보가
            <br />
            당신을 기다리고 있어요!
          </Our.Title>
          <Our.Contents>
            <Our.Region>
              <Our.RegionSearch onClick={props.onClickMapModal}>
                <Our.SearchIcon>
                  <img src="/img/icon-ourtrip-search.svg" alt="검색" />
                </Our.SearchIcon>
                <Our.SearchLabel>지역 찾아보기</Our.SearchLabel>
              </Our.RegionSearch>
              <Our.SearchReturn>
                {props.inputs.doName} {props.inputs.cityName}
              </Our.SearchReturn>
            </Our.Region>
            <Our.Search>
              <Dropdown04 />
              <Our.SearchBox
                type="text"
                placeholder="검색 테마를 선택해주세요."
                onChange={props.onChangeTitle}
                disabled={true}
              />
              <ContainedButton03
                content="검색"
                size="large"
                onClick={props.onClickSearch}
              />
            </Our.Search>
          </Our.Contents>
        </Our.BannerWrap>
      </Our.InnerWrap>
    </Our.Banner>
  );
}
