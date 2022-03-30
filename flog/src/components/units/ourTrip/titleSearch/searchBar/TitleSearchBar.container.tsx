import ContainedButton03 from "../../../../commons/buttons/contained/03/ContainedButton03.container";
import * as Search from "./TitleSearchBar.styles";

export default function TitleSearchBar(props) {
  const onClickSearch = () => {
    alert("제목 검색하기");
  };

  const onChangeTitle = (event) => {
    console.log(event.target.value);
  };

  return (
    //  <TitleSearchUI
    //    onClickSearch={onClickSearch}
    //    onChangeTitle={onChangeTitle}
    //    doName={props.doName}
    //    cityName={props.cityName}
    //  />

    <Search.Search>
      <Search.SearchBox
        type="text"
        placeholder="검색어를 입력해주세요."
        onChange={props.onChangeTitle}
      />
      <ContainedButton03
        content="검색"
        size="large"
        onClick={props.onClickSearch}
      />
    </Search.Search>
  );
}
