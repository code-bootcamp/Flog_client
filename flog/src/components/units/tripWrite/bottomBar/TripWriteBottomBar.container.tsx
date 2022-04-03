import { useRouter } from "next/router";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import TripWriteBottomBarUI from "./TripWriteBottomBar.presenter";

export default function TripWriteBottomBar(props) {
  const { moveToPage } = useMoveToPage();
  const router = useRouter();
  const onClickSubmit = () => {
    props.saveButtonRef.forEach((x: any) => x.current?.click());
  };
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

  return (
    <TripWriteBottomBarUI
      router={router}
      onClickSubmit={onClickSubmit}
      moveToPage={moveToPage}
      onClickNextPlans={onClickNextPlans}
      onClickBackMoney={onClickBackMoney}
      onClickNextMoney={onClickNextMoney}
      onClickBackLog={onClickBackLog}
    />
  );
}
