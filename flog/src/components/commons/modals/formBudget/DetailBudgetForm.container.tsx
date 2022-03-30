import { useForm } from "react-hook-form";
import DetailBudgetFormUI from "./DetailBudgetForm.presenter";
import { IDetailBudgetFormProps } from "./DetailBudgetForm.types";

// 상위 컴포넌트에 넣을 내용 - detailBudgetForm

// const [detailBudgetFormModal, setDetailBudgetFormModal] = useState(false);
// const [isSelect, setIsSelect] = useState([
//   false,
//   false,
//   false,
//   false,
//   false,
//   false,
// ]);
// const [category, setCategory] = useState("");

// const onClickDetailBudgetFormModal = () => {
//   setIsSelect([false, false, false, false, false, false]);
//   setCategory("");
//   setDetailBudgetFormModal(true);
// };

// const onClickExitDetailBudgetFormModal = () => {
//   setIsSelect([false, false, false, false, false, false]);
//   setCategory("");
//   setDetailBudgetFormModal(false);
// };

// const onClickSubmitDetailBudgetFormModal = (data: any) => {
//   if (
//     !data?.contents ||
//     !data?.budget ||
//     !data?.hour ||
//     !data?.minutes ||
//     !category
//   ) {
//     alert("데이터없음!!");
//     setIsSelect([false, false, false, false, false, false]);
//     setCategory("");
//     return;
//   }
//   console.log(data, category);
//   setIsSelect([false, false, false, false, false, false]);
//   setCategory("");
//   setDetailBudgetFormModal(false);
// };

// const TRIP_CATEGORY = [
//   { num: 1, label: "식비" },
//   { num: 2, label: "쇼핑" },
//   { num: 3, label: "교통" },
//   { num: 4, label: "관광" },
//   { num: 5, label: "숙박" },
//   { num: 6, label: "기타" },
// ];

// const onClickCategory = (index: number) => () => {
//   const temp = [false, false, false, false, false, false];
//   temp[index] = true;
//   setIsSelect([...temp]);
//   setCategory(TRIP_CATEGORY[index].label);
// };

// export default function Test(){
//   return (
//     <>
//       <div>
//         <button onClick={onClickDetailBudgetFormModal}>
//           세부 예산 - useForm
//         </button>
//         {detailBudgetFormModal && (
//           <DetailBudgetForm
//             onClickExit={onClickExitDetailBudgetFormModal}
//             onClickSubmit={onClickSubmitDetailBudgetFormModal}
//             onClickCategory={onClickCategory}
//             TRIP_CATEGORY={TRIP_CATEGORY}
//             isSelect={isSelect}
//           />
//         )}
//       </div>
//     </>
//   )
// }

export default function DetailBudgetForm(props) {
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  return (
    <DetailBudgetFormUI
      onClickExit={props.onClickExit}
      onClickSubmit={props.onClickSubmit}
      onClickCategory={props.onClickCategory}
      TRIP_CATEGORY={props.TRIP_CATEGORY}
      isSelect={props.isSelect}
      register={register}
      handleSubmit={handleSubmit}
      date={props.date}
    />
  );
}
