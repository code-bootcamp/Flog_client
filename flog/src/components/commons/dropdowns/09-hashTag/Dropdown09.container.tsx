import { useState } from "react";
import * as Drop from "./Dropdown09.styles";

interface IDropdown09Props {
  setInputs: any;
  inputs: any;
}
export default function Dropdown09(props) {
  const [isTagActive, setIsTagActive] = useState(false);
  const [isTagSelected, setIsTagSelected] = useState("");
  const LIST = [
    ["혼자서", "혼자서"],
    ["우정여행", "친구"],
    ["가족여행", "가족"],
    ["커플여행", "커플"],
    ["반려동물여행", "반려동물"],
  ];

  const onClickSelectBtn = () => {
    setIsTagActive((prev) => !prev);
  };

  const onClickOption = (index: number) => () => {
    setIsTagActive((prev) => !prev);
    onClickSelectBtn();
    props.setHashTag(LIST[index][1]);
    setIsTagSelected(LIST[index][0]);
  };

  return (
    <>
      <Drop.SelectButton onClick={onClickSelectBtn}>
        <Drop.Selected>{isTagSelected || "태그를 선택해주세요"}</Drop.Selected>
        <Drop.SelectIcon>
          <img src="/img/icon-modal-dropdown.svg" />
        </Drop.SelectIcon>
        {isTagActive && (
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
