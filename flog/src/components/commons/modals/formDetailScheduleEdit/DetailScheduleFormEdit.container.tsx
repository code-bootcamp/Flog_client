import { useForm } from "react-hook-form";
import DetailScheduleFormEditUI from "./DetailScheduleFormEdit.presenter";

//  // 상위 컴포넌트에 넣을 내용 - detailScheduleFormEdit

//  const [detailScheduleFormEditModal, setDetailScheduleFormEditModal] = useState(false);

//  const onClickDetailScheduleFormEditModal = () => {
//    setDetailScheduleFormEditModal(true);
//  };

//  const onClickExitDetailScheduleFormEditModal = () => {
//    setDetailScheduleFormEditModal(false);
//  };

// const onClickSubmitDetailScheduleFormEditModal = (data: any) => {
//    if (
//      !data?.place ||
//      !data?.startHour ||
//      !data?.startMinutes ||
//      !data?.takenHour ||
//      !data?.takenMinutes
//    )
//      return;
//    console.log(data);
//    // setDetailScheduleFormEditModal(false);
//  };

// return (
//    <button onClick={onClickDetailScheduleFormEditModal}>
//    세부 일정 - useForm
//  </button>
//  {detailScheduleFormEditModal && (
//    <DetailScheduleFormEdit
//      onClickExit={onClickExitDetailScheduleFormEditModal}
//      onClickSubmit={onClickSubmitDetailScheduleFormEditModal}
//    />
//  )}
// )

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
