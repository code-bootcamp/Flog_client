import * as Drop from "./Dropdown03.styles";
export default function Dropdown03(props) {
  const LIST = ["1명", "2명", "3명", "4명", "단체 여행"];

  const onClickSelectBtn = () => {
    props.setIsPeopleActive((prev) => !prev);
  };

  const onClickOption = (el) => () => {
    props.setIsPeopleSelect(el);
    if (props.title && props.isDateActive && props.isThemeSelect) {
      props.setIsButtonActive(true);
    }
  };

  return (
    <>
      <Drop.SelectButton onClick={onClickSelectBtn}>
        <Drop.Selected>
          {props.isPeopleSelect ? props.isPeopleSelect : "인원을 선택해주세요"}
        </Drop.Selected>
        <Drop.SelectIcon>
          <img src="/img/icon-modal-dropdown.svg" />
        </Drop.SelectIcon>
        {props.isPeopleActive && (
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
