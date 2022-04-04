import { useState } from "react";
import * as Drop from "./Dropdown10.styles";
export default function Dropdown10(props) {
  const LIST = ["500", "1000", "2000", "3000", "4000", "5000", "10000"];
  const [isSelect, setIsSelect] = useState("금액을 선택해주세요");
  const [isActive, setIsActive] = useState(false);

  const onClickSelectBtn = () => {
    setIsActive((prev) => !prev);
  };

  const onClickOption = (el: string) => () => {
    setIsSelect(el);
    props.setPoint(Number(el));
    props.setPointSelect(false);
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
