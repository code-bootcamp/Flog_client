import { useState } from "react";
import * as Drop from "./Dropdown02.styles";
export default function Dropdown02(props) {
  const [isThemeActive, setIsThemeActive] = useState(false);
  const LIST = [
    ["테마를 선택해주세요"],
    ["혼자 여행", "ALONE"],
    ["우정 여행", "FRIEND"],
    ["커플 여행", "COUPLE"],
    ["가족 여행", "FAMILY"],
    ["반려동물 여행", "PET"],
  ];
  let index = 0;
  const onClickSelectBtn = () => {
    setIsThemeActive((prev) => !prev);
    console.log(isThemeActive);
  };

  const onClickOption = (el) => () => {
    setIsThemeActive((prev) => !prev);
    onClickSelectBtn();
    props.setInputs({ ...props.inputs, theme: el });
    console.log(isThemeActive);
    console.log(el);
  };

  return (
    <>
      <Drop.SelectButton onClick={onClickSelectBtn}>
        <Drop.Selected>{LIST[index]}</Drop.Selected>
        <Drop.SelectIcon>
          <img src="/img/icon-modal-dropdown.svg" />
        </Drop.SelectIcon>
        {isThemeActive === true && (
          <Drop.Option>
            <ul>
              {LIST.map((el, index) => (
                <li key={index}>
                  <span onClick={onClickOption(el[1])}>{el[0]}</span>
                </li>
              ))}
            </ul>
          </Drop.Option>
        )}
      </Drop.SelectButton>
    </>
  );
}
