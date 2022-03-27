import * as Drop from "./Dropdown02.styles";
export default function Dropdown02(props) {
  const LIST = [
    "혼자 여행",
    "우정 여행",
    "커플 여행",
    "가족 여행",
    "반려동물 여행",
  ];

  const onClickSelectBtn = () => {
    props.setIsThemeActive((prev) => !prev);
  };

  const onClickOption = (el) => () => {
    props.setIsThemeSelect(el);
    if (props.title && props.isDateActive && props.isPeopleSelect) {
      props.setIsButtonActive(true);
    }
  };

  return (
    <>
      <Drop.SelectButton onClick={onClickSelectBtn}>
        <Drop.Selected>
          {props.isThemeSelect ? props.isThemeSelect : "테마를 선택해주세요"}
        </Drop.Selected>
        <Drop.SelectIcon>
          <img src="/img/icon-modal-dropdown.svg" />
        </Drop.SelectIcon>
        {props.isThemeActive && (
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
