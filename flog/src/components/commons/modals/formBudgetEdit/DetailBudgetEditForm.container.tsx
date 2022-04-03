import { MouseEventHandler } from "react";
import { useForm } from "react-hook-form";
import DetailBudgetEditFormUI from "./DetailBudgetEditForm.presenter";

// 상위 컴포넌트에 넣을 내용 - detailBudgetEditForm

// const [detailBudgetEditFormModal, setDetailBudgetEditFormModal] = useState(false);
// const [isSelect, setIsSelect] = useState([
//   false,
//   false,
//   false,
//   false,
//   false,
//   false,
// ]);
// const [category, setCategory] = useState("");

// const onClickDetailBudgetEditFormModal = () => {
//   setIsSelect([false, false, false, false, false, false]);
//   setCategory("");
//   setDetailBudgetFormModal(true);
// };

// const onClickExitDetailBudgetEditFormModal = () => {
//   setIsSelect([false, false, false, false, false, false]);
//   setCategory("");
//   setDetailBudgetFormModal(false);
// };

// const onClickSubmitDetailBudgetEditFormModal = (data: any) => {
//   if (
//     !data?.contents ||
//     !data?.budget ||
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
// { num: 1, label: "식비", enum: "FOOD" },
// { num: 2, label: "쇼핑", enum: "SHOPPING" },
// { num: 3, label: "교통", enum: "TRANSPORTATION" },
// { num: 4, label: "관광", enum: "TOURISM" },
// { num: 5, label: "숙박", enum: "STAY" },
// { num: 6, label: "기타", enum: "ETC" },
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
//         <button onClick={onClickDetailBudgetEditFormModal}>
//           세부 예산 - useForm
//         </button>
//         {detailBudgetFormModal && (
//           <DetailBudgetForm
//             onClickExit={onClickExitDetailBudgetEditFormModal}
//             onClickSubmit={onClickSubmitDetailBudgetEditFormModal}
//             onClickCategory={onClickCategory}
//             TRIP_CATEGORY={TRIP_CATEGORY}
//             isSelect={isSelect}
//           />
//         )}
//       </div>
//     </>
//   )
// }

interface IDetailBudgetFormProps {
  onClickExit: () => void;
  onClickSubmit: () => void;
  onClickCategory: (
    index: number
  ) => MouseEventHandler<HTMLDivElement> | undefined;
  TRIP_CATEGORY: [];
  isSelect: boolean;
}

export default function DetailBudgetEditForm(props: IDetailBudgetFormProps) {
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  return (
    <DetailBudgetEditFormUI
      onClickExit={props.onClickExit}
      onClickSubmit={props.onClickSubmit}
      onClickCategory={props.onClickCategory}
      TRIP_CATEGORY={props.TRIP_CATEGORY}
      isSelect={props.isSelect}
      register={register}
      handleSubmit={handleSubmit}
      clickContents={props.clickContents}
    />
  );
}
