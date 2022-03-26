import * as Search from "./TagSearch.styles";
import ContainedButton03 from "../../../commons/buttons/contained/03/ContainedButton03.container";

export default function TagSearchUI(props) {
  return (
    <Search.Search>
      <Search.SearchBox>
        <input type="checkbox" />
        <span>hi</span>
      </Search.SearchBox>

      <ContainedButton03
        content="검색"
        size="large"
        onClick={props.onClickSearch}
      />
    </Search.Search>
  );
}
