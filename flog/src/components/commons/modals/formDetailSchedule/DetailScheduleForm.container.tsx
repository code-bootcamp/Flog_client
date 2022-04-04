import { SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DetailScheduleFormUI from "./DetailScheduleForm.presenter";

interface IDetailScheduleFormProps {
  onClickExit: () => void;
  onClickSubmit: () => void;
  viewport: number;
}

export default function DetailScheduleForm(props: IDetailScheduleFormProps) {
  const { register, handleSubmit, setValue } = useForm({
    mode: "onChange",
  });

  const [viewport, setViewport] = useState<SetStateAction<number>>(0);
  useEffect(() => {
    const viewportWidth = window.visualViewport.width;
    setViewport(viewportWidth);
  }, []);

  return (
    <DetailScheduleFormUI
      onClickExit={props.onClickExit}
      onClickSubmit={props.onClickSubmit}
      register={register}
      handleSubmit={handleSubmit}
      setValue={setValue}
      viewport={viewport}
    />
  );
}
