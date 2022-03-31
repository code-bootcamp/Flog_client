import { useState } from "react";
import * as Drop from "./Dropdown08.styles";
export default function Dropdown08(props) {
  const [isMinutesActive, setIsMinutesActive] = useState(false);
  const [isMinutesSelected, setIsMinutesSelected] = useState(null);

  let num = -1;
  const MINUTES = new Array(60).fill(1).map((el) => {
    num = num + el;
    return num;
  });

  const onClickSelectBtn = () => {
    setIsMinutesActive((prev) => !prev);
  };

  const onClickOption = (index) => () => {
    setIsMinutesActive((prev) => !prev);
    onClickSelectBtn();
    setIsMinutesSelected(MINUTES[index]);
    props.setValue("startMinutes", MINUTES[index]);
  };

  // console.log(isMinutesSelected);

  return (
    <>
      <Drop.SelectButton onClick={onClickSelectBtn}>
        <Drop.Selected>
          {isMinutesSelected}
          <Drop.Hour>분</Drop.Hour>
        </Drop.Selected>
        <Drop.SelectIcon>
          <img src="/img/icon-modal-dropdown.svg" />
        </Drop.SelectIcon>
        {isMinutesActive && (
          <Drop.Option>
            <ul>
              {MINUTES.map((el, index) => (
                <li key={index}>
                  <span onClick={onClickOption(index)}>{el}</span>
                </li>
              ))}
            </ul>
          </Drop.Option>
        )}
      </Drop.SelectButton>
    </>
  );
}
