import { SetStateAction, useEffect, useState } from "react";
import ContainedButton03 from "../../../../commons/buttons/contained/03/ContainedButton03.container";
import Dropdown04 from "../../../../commons/dropdowns/04/Dropdown04.container";
import Dropdown09 from "../../../../commons/dropdowns/09-hashTag/Dropdown09.container";
import TagSearchBar from "../searchBar/TagSearchBar.container";
import * as Tag from "./TagSearchBanner.styles";

export default function TagSearchBanner(props) {
  const [viewport, setViewport] = useState<SetStateAction<number>>(0);
  useEffect(() => {
    const viewportWidth = window.visualViewport.width;
    setViewport(viewportWidth);
  }, []);

  return (
    <Tag.Banner>
      <Tag.BgImage />
      <Tag.InnerWrap>
        <Tag.UpperWrap>
          <Tag.Title>
            <span style={{ fontWeight: 600 }}>6,275개</span>의 여행 족보가
            <br />
            당신을 기다리고 있어요!
          </Tag.Title>
        </Tag.UpperWrap>
        <Tag.LowerWrap>
          <Tag.Contents>
            <Tag.Search>
              <Dropdown04 />
              {viewport <= 767 ? (
                <Dropdown09
                  hashTag={props.hashTag}
                  setHashTag={props.setHashTag}
                />
              ) : (
                <TagSearchBar
                  hashTag={props.hashTag}
                  setHashTag={props.setHashTag}
                />
              )}
            </Tag.Search>
            <Tag.RegionWrap>
              <Tag.Region>
                <Tag.RegionSearch onClick={props.onClickMapModal}>
                  <Tag.SearchIcon>
                    <img src="/img/icon-ourtrip-search.svg" alt="검색" />
                  </Tag.SearchIcon>
                  <Tag.SearchLabel>
                    {viewport <= 767 ? "지역" : "지역 찾아보기"}
                  </Tag.SearchLabel>
                </Tag.RegionSearch>
                <Tag.SearchReturn>
                  {props.inputs.doName ? (
                    <span>
                      {props.inputs.doName} {props.inputs.cityName}
                    </span>
                  ) : (
                    <span className="default">지역을 선택해주세요</span>
                  )}
                </Tag.SearchReturn>
              </Tag.Region>
              {viewport > 767 && (
                <ContainedButton03 content="검색" size="large" />
              )}
            </Tag.RegionWrap>
          </Tag.Contents>
        </Tag.LowerWrap>
      </Tag.InnerWrap>
    </Tag.Banner>
  );
}
