import { useState } from "react";
import DetailBudgetUI from "./DetailBudget.presenter";
import { IDetailBudgetProps } from "./DetailBudget.types";

// //상위 컴포넌트에 넣을 내용 - budget
// const [detailBudgetModal, setDetailBudgetModal] = useState(false);

// const onClickDetailBudgetModal = () => {
//   setDetailBudgetModal(true);
// };

// const onClickExitDetailBudgetModal = () => {
//   setDetailBudgetModal(false);
// };

// const onClickSubmitDetailBudgetModal = () => {
//   setDetailBudgetModal(false);
// };

// return(
//    <button onClick={onClickDetailBudgetModal}>세부 예산 생성</button>
//    {detailBudgetModal && (
//       <DetailBudget
//         onClickExit={onClickExitDetailBudgetModal}
//         onClickSubmit={onClickSubmitDetailBudgetModal}
//       />
//     )}
// )

export default function DetailBudget(props: IDetailBudgetProps) {
  const [contents, setContents] = useState("");
  const [budget, setBudget] = useState(0);
  const [startHour, setStartHour] = useState(0);
  const [startMinutes, setStartMinutes] = useState(0);
  const [category, setCategory] = useState("");

  const [memo, setMemo] = useState("");

  const [isButtonActive, setIsButtonActive] = useState(false);

  const [isSelect, setIsSelect] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value && budget) {
      setIsButtonActive(true);
    }
  };

  const onChangeBudget = (event) => {
    setBudget(event.target.value);
    if (event.target.value && contents) {
      setIsButtonActive(true);
    }
  };

  const onChangeStartHour = (event) => {
    setStartHour(event.target.value);
  };

  const onChangeStartMinutes = (event) => {
    setStartMinutes(event.target.value);
  };

  const onChangeMemo = (event) => {
    setMemo(event.target.value);
  };

  const TRIP_CATEGORY = [
    { num: 1, label: "식비" },
    { num: 2, label: "쇼핑" },
    { num: 3, label: "교통" },
    { num: 4, label: "관광" },
    { num: 5, label: "숙박" },
    { num: 6, label: "기타" },
  ];

  const onClickCategory = (index: number) => () => {
    const temp = [false, false, false, false, false, false];
    temp[index] = true;
    setIsSelect([...temp]);
    setCategory(TRIP_CATEGORY[index].label);
  };
  console.log(contents, budget, startHour, startMinutes, category, memo);

  return (
    <DetailBudgetUI
      isSelect={isSelect}
      isButtonActive={isButtonActive}
      onClickExit={props.onClickExit}
      onClickSubmit={props.onClickSubmit}
      onChangeContents={onChangeContents}
      onChangeBudget={onChangeBudget}
      onChangeStartHour={onChangeStartHour}
      onChangeStartMinutes={onChangeStartMinutes}
      onChangeMemo={onChangeMemo}
      onClickCategory={onClickCategory}
      TRIP_CATEGORY={TRIP_CATEGORY}
    />
  );
}
