import { useState } from "react";
import ContainedButton03 from "../../../commons/buttons/contained/03/ContainedButton03.container";
import Dropdown04 from "../../../commons/dropdowns/04/Dropdown04.container";
import TagSearch from "../tagSearch/TagSearch.container";
import TitleSearch from "../titleSearch/TitleSearch.container";
import * as Our from "./OurTripBanner.styles";

export default function OurTripBannerUI(props) {
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
          {/* <Our.SelectBtn onClick={onClickSelectBtn}>
            <Our.Selected>{isSelect}</Our.Selected>
            <Our.SelectIcon>
              <img src="/img/icon-ourtrip-select-arrow.svg" />
            </Our.SelectIcon>

            {isActive && (
              <Our.SelectOption>
                <ul>
                  {["전체보기", "제목", "여행 테마"].map((el) => (
                    <li key={el}>
                      <span onClick={onClickOption(el)}>{el}</span>
                    </li>
                  ))}
                </ul>
              </Our.SelectOption>
            )}
          </Our.SelectBtn> */}
          {/* {isSelect === "제목" && (
            <TitleSearch
              doName={props.inputs.doName}
              cityName={props.inputs.cityName}
            />
          )}
          {isSelect === "여행 테마" && (
            <TagSearch
              doName={props.inputs.doName}
              cityName={props.inputs.cityName}
              onClickTagSearch={props.onClickTagSearch}
            />
          )} */}
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
    </Our.Banner>
  );
}
