import { useState } from "react";
import * as Drop from "./Dropdown08.styles";

interface IDropdown08Props {
  setValue: any;
}
export default function Dropdown08(props: IDropdown08Props) {
  const [isMinutesActive, setIsMinutesActive] = useState(false);
  const [isMinutesSelected, setIsMinutesSelected] = useState(null || Number);

  let num = -1;
  const MINUTES = new Array(60).fill(1).map((el) => {
    num = num + el;
    return num;
  });

  const onClickSelectBtn = () => {
    setIsMinutesActive((prev) => !prev);
  };

  const onClickOption = (index: number) => () => {
    setIsMinutesActive((prev) => !prev);
    onClickSelectBtn();
    setIsMinutesSelected(MINUTES[index]);
    props.setValue("takenMinutes", MINUTES[index]);
  };

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
