import { useForm } from "react-hook-form";
import DetailBudgetFormUI from "./DetailBudgetForm.presenter";

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
    />
  );
}
