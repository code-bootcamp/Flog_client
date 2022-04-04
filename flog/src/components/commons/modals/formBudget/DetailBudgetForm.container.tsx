import { MouseEventHandler } from "react";
import { useForm } from "react-hook-form";
import DetailBudgetFormUI from "./DetailBudgetForm.presenter";

interface IDetailBudgetFormProps {
  onClickExit: () => void;
  onClickSubmit: () => void;
  onClickCategory: (
    index: number
  ) => MouseEventHandler<HTMLDivElement> | undefined;
  TRIP_CATEGORY: [];
  isSelect: boolean;
}

export default function DetailBudgetForm(props: IDetailBudgetFormProps) {
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
