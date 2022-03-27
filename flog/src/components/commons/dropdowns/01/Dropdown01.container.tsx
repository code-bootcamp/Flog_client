import { useState } from "react";
import * as Drop from "./Dropdown01.styles";
export default function Dropdown01() {
  const LIST = ["최신순", "인기순", "과거순"];

  const [isSelect, setIsSelect] = useState(LIST[0]);
  const [isActive, setIsActive] = useState(false);

  const onClickSelectBtn = () => {
    setIsActive((prev) => !prev);
  };

  const onClickOption = (el) => () => {
    setIsSelect(el);
  };

  return (
    <>
      <Drop.SelectButton onClick={onClickSelectBtn}>
        <Drop.Selected>{isSelect}</Drop.Selected>
        <Drop.SelectIcon>
          <img src="/img/icon-modal-dropdown.svg" />
        </Drop.SelectIcon>
        {isActive && (
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
