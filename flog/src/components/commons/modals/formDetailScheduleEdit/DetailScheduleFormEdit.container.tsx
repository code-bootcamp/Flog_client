import { useForm } from "react-hook-form";
import DetailScheduleFormEditUI from "./DetailScheduleFormEdit.presenter";

interface IDetailScheduleFormEditProps {
  onClickExit: () => void;
  onClickSubmit: () => void;
  id: string;
}

export default function DetailScheduleFormEdit(
  props: IDetailScheduleFormEditProps
) {
  const { register, handleSubmit, setValue } = useForm({
    mode: "onChange",
  });

  return (
    <DetailScheduleFormEditUI
      editContent={props.editContent}
      onClickExit={props.onClickExit}
      onClickSubmit={props.onClickSubmit}
      register={register}
      handleSubmit={handleSubmit}
      setValue={setValue}
    />
  );
}
