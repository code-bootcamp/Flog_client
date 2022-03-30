import * as Search from "./TagSearchBar.styles";
import { useState } from "react";
import ContainedButton03 from "../../../../commons/buttons/contained/03/ContainedButton03.container";

export default function TagSearchBar(props) {
  const [isSelect, setIsSelect] = useState([
    { theme: "혼자서", value: "혼자서", checked: false, index: 0 },
    { theme: "우정여행", value: "친구", checked: false, index: 1 },
    { theme: "가족여행", value: "가족", checked: false, index: 2 },
    { theme: "커플여행", value: "커플", checked: false, index: 3 },
    { theme: "반려동물여행", value: "반려동물", checked: false, index: 4 },
  ]);

  const onChangeCheck = (el) => (event) => {
    let temp = isSelect.map((el, idx) => {
      return { ...el, checked: idx === Number(event.target.id) };
    });
    setIsSelect(temp);
    props.setHashTag(el.value);
  };

  const onClickTagSearch = () => {
    alert("태그 검색하기");
  };

  return (
    <Search.Search>
      <Search.SearchBox>
        {isSelect.map((el, idx) => (
          <label className="checkbox" key={el.theme}>
            <input
              type="checkbox"
              id={idx}
              onChange={onChangeCheck(el)}
              // onChange={onChangeCheck(el, index)}
              checked={Boolean(el.checked)}
            />
            <span className="checkbox_icon"></span>
            <span className="checkbox_text">{el.theme}</span>
          </label>
        ))}
      </Search.SearchBox>
      <ContainedButton03
        content="검색"
        size="large"
        onClick={onClickTagSearch}
      />
    </Search.Search>
  );
}
