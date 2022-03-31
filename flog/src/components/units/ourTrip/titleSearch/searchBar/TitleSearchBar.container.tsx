import _ from "lodash";
import ContainedButton03 from "../../../../commons/buttons/contained/03/ContainedButton03.container";
import * as Search from "./TitleSearchBar.styles";

export default function TitleSearchBar(props) {
  const onClickSearch = () => {
    console.log(props.inputs);
  };

  const getDebounce = _.debounce((data) => {
    props.setInputs({
      title: String(data),
      doName: props.inputs.doName,
      cityName: props.inputs.cityName,
    });
  }, 200);

  const onChangeTitle = (event) => {
    // console.log(event.target.value);
    getDebounce(event.target.value);

    console.log(props.inputs);
  };

  return (
    <Search.Search>
      <Search.SearchBox
        type="text"
        placeholder="검색어를 입력해주세요."
        onChange={onChangeTitle}
      />
      <ContainedButton03
        content="검색"
        size="large"
        // onClick={props.onClickSearch}
        onClick={onClickSearch}
      />
    </Search.Search>
  );
}
