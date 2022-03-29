import { useState } from "react";
import * as Drop from "./Dropdown02.styles";
export default function Dropdown02(props) {
  const [isThemeActive, setIsThemeActive] = useState(false);
  const LIST = [
    "혼자 여행",
    "우정 여행",
    "커플 여행",
    "가족 여행",
    "반려동물 여행",
  ];

  const onClickSelectBtn = () => {
    setIsThemeActive((prev) => !prev);
  };

  const onClickOption = (el) => () => {
    setIsThemeActive(false);
    cons;
    props.setInputs({ ...props.inputs, theme: el });
  };

  return (
    <>
      <Drop.SelectButton onClick={onClickSelectBtn}>
        <Drop.Selected>
          {props.inputs.theme || "테마를 선택해주세요"}
        </Drop.Selected>
        <Drop.SelectIcon>
          <img src="/img/icon-modal-dropdown.svg" />
        </Drop.SelectIcon>
        {isThemeActive && (
          <Drop.Option>
            <ul>
              {LIST.map((el) => (
                <li key={el}>
                  <span onClick={onClickOption(el)}>{el}</span>
                </li>
              ))}
            </ul>
          </Drop.Option>
        )}
      </Drop.SelectButton>
    </>
  );
}
