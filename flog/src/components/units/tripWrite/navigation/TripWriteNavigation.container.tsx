import { useRouter } from "next/router";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import TripWriteNavigationUI from "./TripWriteNavigation.presenter";

export default function TripWriteNavigation() {
  const { moveToPage } = useMoveToPage();
  const router = useRouter();

  const TRIP_WRITE_NAVIGATION = [
    {
      title: "일정등록",
      url: `/myTrips/${router.query.scheduleId}/plans`,
      pageName: "plans",
    },
    {
      title: "예산/지출",
      url: `/myTrips/${router.query.scheduleId}/money`,
      pageName: "money",
    },
    {
      title: "여행로그",
      url: `/myTrips/${router.query.scheduleId}/log`,
      pageName: "log",
    },
  ];

  return (
    <TripWriteNavigationUI
      TRIP_WRITE_NAVIGATION={TRIP_WRITE_NAVIGATION}
      router={router}
      moveToPage={moveToPage}
    />
  );
}
