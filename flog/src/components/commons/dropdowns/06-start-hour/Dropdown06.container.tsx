import { useState } from "react";
import * as Drop from "./Dropdown06.styles";

interface IDropdown06Props {
  setValue: any;
}
export default function Dropdown06(props: IDropdown06Props) {
  const [isHourActive, setIsHourActive] = useState(false);
  const [isHourSelected, setIsHourSelected] = useState(null || Number);

  let num = -1;
  const HOUR = new Array(24).fill(1).map((el) => {
    num = num + el;
    return num;
  });

  const onClickSelectBtn = () => {
    setIsHourActive((prev) => !prev);
  };

  const onClickOption = (index: number) => () => {
    setIsHourActive((prev) => !prev);
    onClickSelectBtn();
    setIsHourSelected(HOUR[index]);
    props.setValue("startHour", HOUR[index]);
  };

  return (
    <>
      <Drop.SelectButton onClick={onClickSelectBtn}>
        <Drop.Selected>
          {isHourSelected}
          <Drop.Hour>시</Drop.Hour>
        </Drop.Selected>
        <Drop.SelectIcon>
          <img src="/img/icon-modal-dropdown.svg" />
        </Drop.SelectIcon>
        {isHourActive && (
          <Drop.Option>
            <ul>
              {HOUR.map((el, index) => (
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
