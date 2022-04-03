import { useRouter } from "next/router";
import { useState } from "react";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import TripWriteBottomBarUI from "./TripWriteBottomBar.presenter";

export default function TripWriteBottomBar(props) {
  const [alertModal, setAlertModal] = useState(false);
  const [modalContents, setModalContents] = useState("");
  const { moveToPage } = useMoveToPage();
  const router = useRouter();

  const onClickNextPlans = () => {
    props.submitDetailSchedule();
  };
  const onClickBackMoney = () => {
    props.submitDetailBudget();
    router.push(`/myTrips/${router.query.scheduleId}/plans`);
  };
  const onClickNextMoney = () => {
    props.submitDetailBudget();
    router.push(`/myTrips/${router.query.scheduleId}/log`);
  };
  const onClickBackLog = () => {
    router.push(`/myTrips/${router.query.scheduleId}/money`);
  };

  const onClickSubmit = () => {
    props.saveButtonRef.forEach((x: any) => x.current?.click());

    setModalContents("저장이 완료되었습니다");
    setAlertModal(true);
  };

  const onClickExitAlertModal = () => {
    setAlertModal(false);
  };

  const onClickSubmitAlertModal = () => {
    setAlertModal(false);
    router.push(`/myTrips/${router.query.scheduleId}/`);
  };

  return (
    <TripWriteBottomBarUI
      router={router}
      onClickSubmit={onClickSubmit}
      moveToPage={moveToPage}
      onClickNextPlans={onClickNextPlans}
      onClickBackMoney={onClickBackMoney}
      onClickNextMoney={onClickNextMoney}
      onClickBackLog={onClickBackLog}
      alertModal={alertModal}
      modalContents={modalContents}
      onClickExitAlertModal={onClickExitAlertModal}
      onClickSubmitAlertModal={onClickSubmitAlertModal}
    />
  );
}
