import { useState } from "react";
import ContainedButton03 from "../../../commons/buttons/contained/03/ContainedButton03.container";
import TagSearch from "../tagSearch/TagSearch.container";
import TitleSearch from "../titleSearch/TitleSearch.container";
import * as Our from "./OurTripBanner.styles";

export default function OurTripBannerUI(props) {
  // default는 title
  const [isSearchToggle, setIsSearchToggle] = useState(true);

  const [isSelect, setIsSelect] = useState("제목");

  const [isActive, setIsActive] = useState(false);

  const onClickSelectBtn = () => {
    setIsActive((prev) => !prev);
  };

  const onClickOption = (el) => () => {
    if (el === "여행 테마") {
      setIsSelect("여행 테마");
    }
    if (el === "제목") {
      setIsSelect("제목");
    }
  };

  const onClickSearch = () => {
    alert("검색하기");
  };

  console.log(isSelect);

  return (
    <Our.Banner>
      <Our.BgImage />
      <Our.Contents>
        <Our.Title>
          <span style={{ fontWeight: 600 }}>6,275개</span>의 여행 족보가
          <br />
          당신을 기다리고 있어요!
        </Our.Title>
        <Our.Region>
          <Our.RegionSearch onClick={props.onClickOpenMap}>
            <Our.SearchIcon>
              <img src="/img/icon-ourtrip-search.svg" alt="검색" />
            </Our.SearchIcon>
            <Our.SearchLabel>지역 찾아보기</Our.SearchLabel>
          </Our.RegionSearch>
          <Our.SearchReturn>제주도</Our.SearchReturn>
        </Our.Region>

        {isSearchToggle && (
          <Our.Search>
            <Our.SelectBtn onClick={onClickSelectBtn}>
              <Our.Selected>{isSelect}</Our.Selected>
              <Our.SelectIcon>
                <img src="/img/icon-ourtrip-select-arrow.svg" />
              </Our.SelectIcon>
              {isActive && (
                <Our.SelectOption>
                  <ul>
                    {["제목", "여행 테마"].map((el) => (
                      <li key={el}>
                        <span onClick={onClickOption(el)}>{el}</span>
                      </li>
                    ))}
                  </ul>
                </Our.SelectOption>
              )}
            </Our.SelectBtn>
            {isSelect === "제목" && <TitleSearch />}
            {isSelect === "여행 테마" && <TagSearch />}
          </Our.Search>
        )}
      </Our.Contents>
    </Our.Banner>
  );
}
