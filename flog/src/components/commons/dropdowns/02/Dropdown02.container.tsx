import { useState } from "react";
import * as Drop from "./Dropdown02.styles";

interface IDorpDown02Props {
  inputs: any;
  setInputs: any;
}
export default function Dropdown02(props: IDorpDown02Props) {
  const [isThemeActive, setIsThemeActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const LIST = [
    ["테마를 선택해주세요"],
    ["혼자 여행", "ALONE"],
    ["우정 여행", "FRIEND"],
    ["커플 여행", "COUPLE"],
    ["가족 여행", "FAMILY"],
    ["반려동물 여행", "PET"],
  ];
  const onClickSelectBtn = () => {
    setIsThemeActive((prev) => !prev);
    console.log(isThemeActive);
  };

  const onClickOption = (index: number) => () => {
    setIsThemeActive((prev) => !prev);
    onClickSelectBtn();
    props.setInputs({ ...props.inputs, theme: LIST[index][1] });
    setSelectedOption(LIST[index][0]);
  };

  return (
    <>
      <Drop.SelectButton onClick={onClickSelectBtn}>
        <Drop.Selected>{selectedOption || "테마를 선택해주세요"}</Drop.Selected>
        <Drop.SelectIcon>
          <img src="/img/icon-modal-dropdown.svg" />
        </Drop.SelectIcon>
        {isThemeActive === true && (
          <Drop.Option>
            <ul>
              {LIST.map((el, index) => (
                <li key={index}>
                  <span onClick={onClickOption(index)}>{el[0]}</span>
                </li>
              ))}
            </ul>
          </Drop.Option>
        )}
      </Drop.SelectButton>
    </>
  );
}
