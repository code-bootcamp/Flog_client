import { MouseEventHandler } from "react";
import { useForm } from "react-hook-form";
import DetailBudgetEditFormUI from "./DetailBudgetEditForm.presenter";

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
