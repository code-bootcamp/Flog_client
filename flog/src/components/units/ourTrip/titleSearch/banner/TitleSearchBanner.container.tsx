import _ from "lodash";
import { SetStateAction, useEffect, useState } from "react";
import ContainedButton03 from "../../../../commons/buttons/contained/03/ContainedButton03.container";
import Dropdown04 from "../../../../commons/dropdowns/04/Dropdown04.container";
import * as Title from "./TitleSearchBanner.styles";

export default function TitleSearchBanner(props) {
  const getDebounce = _.debounce((data) => {
    props.setInputs({
      title: String(data),
      doName: props.inputs.doName,
      cityName: props.inputs.cityName,
    });
  }, 200);

  const onChangeTitle = (event) => {
    getDebounce(event.target.value);
  };

  const [viewport, setViewport] = useState<SetStateAction<number>>(0);
  useEffect(() => {
    const viewportWidth = window.visualViewport.width;
    setViewport(viewportWidth);
  }, []);

  return (
    <Title.Banner>
      <Title.BgImage />
      <Title.InnerWrap>
        <Title.UpperWrap>
          <Title.Title>
            <span style={{ fontWeight: 600 }}>6,275개</span>의 여행 족보가
            <br />
            당신을 기다리고 있어요!
          </Title.Title>
        </Title.UpperWrap>
        <Title.LowerWrap>
          <Title.Contents>
            <Title.Region>
              <Title.RegionSearch onClick={props.onClickMapModal}>
                <Title.SearchIcon>
                  <img src="/img/icon-ourtrip-search.svg" alt="검색" />
                </Title.SearchIcon>
                <Title.SearchLabel>
                  {viewport <= 767 ? "지역" : "지역 찾아보기"}
                </Title.SearchLabel>
              </Title.RegionSearch>
              <Title.SearchReturn>
                {props.inputs.doName ? (
                  <span>
                    {props.inputs.doName} {props.inputs.cityName}
                  </span>
                ) : (
                  <span className="default">지역을 선택해주세요</span>
                )}
              </Title.SearchReturn>
            </Title.Region>
            <Title.Search>
              <Dropdown04 />
              <Title.SearchBox
                type="text"
                placeholder="검색어를 입력해주세요."
                onChange={onChangeTitle}
              />
              {viewport > 767 && (
                <ContainedButton03
                  content="검색"
                  size="large"
                  onClick={props.onClickSearch}
                />
              )}
            </Title.Search>
          </Title.Contents>
        </Title.LowerWrap>
      </Title.InnerWrap>
    </Title.Banner>
  );
}
