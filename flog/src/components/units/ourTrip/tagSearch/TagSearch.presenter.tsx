import * as Search from "./TagSearch.styles";
import ContainedButton03 from "../../../commons/buttons/contained/03/ContainedButton03.container";
import { useState } from "react";

export default function TagSearchUI(props) {
  const [isSelect, setIsSelect] = useState([false, false, false, false, false]);

  const TRIP_THEME = [
    { theme: "혼자서", value: "ALONE" },
    { theme: "우정여행", value: "FRIEND" },
    { theme: "가족여행", value: "FAMILY" },
    { theme: "커플여행", value: "COUPLE" },
    { theme: "반려동물여행", value: "PET" },
  ];

  const onClickCheck = (el, index: number) => () => {
    console.log(el.value);
  };

  return (
    <Search.Search>
      <Search.SearchBox>
        {TRIP_THEME.map((el, index) => (
          <label className="checkbox" key={el.theme}>
            <input type="checkbox" onClick={onClickCheck(el, index)} />
            <span className="checkbox_icon"></span>
            <span className="checkbox_text">{el.theme}</span>
          </label>
        ))}
      </Search.SearchBox>
      <ContainedButton03
        content="검색"
        size="large"
        onClick={props.onClickSearch}
      />
    </Search.Search>
  );
}
