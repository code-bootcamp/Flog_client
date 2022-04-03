import { useState } from "react";
import { useForm } from "react-hook-form";
import Alert from "../../../src/components/commons/modals/alert/Alert.container";
import DetailScheduleForm from "../../../src/components/commons/modals/formDetailSchedule/DetailScheduleForm.container";

export default function dsd() {
  const [detailScheduleFormModal, setDetailScheduleFormModal] = useState(false);

  const onClickDetailScheduleFormModal = () => {
    setDetailScheduleFormModal(true);
  };

  const onClickExitDetailScheduleFormModal = () => {
    setDetailScheduleFormModal(false);
  };

  const { register, handleSubmit, setValue } = useForm({
    mode: "onChange",
  });

  const [alertModal, setAlertModal] = useState(false);

  const onClickAlertModal = () => {
    setAlertModal(true);
  };

  const onClickExitAlertModal = () => {
    setAlertModal(false);
  };

  return (
    <>
      <button onClick={onClickDetailScheduleFormModal}>
        세부 일정 - useForm
      </button>

      {detailScheduleFormModal && (
        <DetailScheduleForm
          onClickExit={onClickExitDetailScheduleFormModal}
          register={register}
          handleSubmit={handleSubmit}
          setValue={setValue}
        />
      )}

      <button onClick={onClickAlertModal}>exit</button>
      {alertModal && (
        <Alert
          onClickExit={onClickExitAlertModal}
          contents="모달입니다!"
          onClickSubmit={() => {
            console.log("hi");
          }}
        />
      )}
    </>
  );
}
