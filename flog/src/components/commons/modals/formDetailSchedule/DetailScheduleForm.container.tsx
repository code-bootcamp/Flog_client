import { useState } from "react";
import { useForm } from "react-hook-form";
import DetailScheduleFormUI from "./DetailScheduleForm.presenter";

//  // 상위 컴포넌트에 넣을 내용 - detailScheduleForm

//  const [detailScheduleFormModal, setDetailScheduleFormModal] = useState(false);

//  const onClickDetailScheduleFormModal = () => {
//    setDetailScheduleFormModal(true);
//  };

//  const onClickExitDetailScheduleFormModal = () => {
//    setDetailScheduleFormModal(false);
//  };

// const onClickSubmitDetailScheduleFormModal = (data: any) => {
//    if (
//      !data?.place ||
//      !data?.startHour ||
//      !data?.startMinutes ||
//      !data?.takenHour ||
//      !data?.takenMinutes
//    )
//      return;
//    console.log(data);
//    // setDetailScheduleFormModal(false);
//  };

// return (
//    <button onClick={onClickDetailScheduleFormModal}>
//    세부 일정 - useForm
//  </button>
//  {detailScheduleFormModal && (
//    <DetailScheduleForm
//      onClickExit={onClickExitDetailScheduleFormModal}
//      onClickSubmit={onClickSubmitDetailScheduleFormModal}
//    />
//  )}
// )

export default function DetailScheduleForm(props) {
  const { register, handleSubmit, setValue } = useForm({
    mode: "onChange",
  });

  return (
    <DetailScheduleFormUI
      onClickExit={props.onClickExit}
      onClickSubmit={props.onClickSubmit}
      register={register}
      handleSubmit={handleSubmit}
      setValue={setValue}
    />
  );
}
