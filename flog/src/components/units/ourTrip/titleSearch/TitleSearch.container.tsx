import ContainedButton03 from "../../../commons/buttons/contained/03/ContainedButton03.container";
import * as Search from "./TitleSearch.styles";

export default function TitleSearch(props) {
  return (
    <Search.Search>
      <Search.SearchBox
        type="text"
        placeholder="검색어를 입력해주세요."
        onChange={props.onChangeTitle}
      />
      <ContainedButton03 content="검색" size="large" />
    </Search.Search>
  );
}
