import { useRouter } from "next/router";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import TripWriteNavigationUI from "./TripWriteNavigation.presenter";

const TRIP_WRITE_NAVIGATION = [
  { title: "일정등록", url: "/myTrips/write/plans" },
  { title: "예산/지출", url: "/myTrips/write/money" },
  { title: "여행로그", url: "/myTrips/write/log" },
];

export default function TripWriteNavigation() {
  const { moveToPage } = useMoveToPage();
  const router = useRouter();
  return (
    <TripWriteNavigationUI
      TRIP_WRITE_NAVIGATION={TRIP_WRITE_NAVIGATION}
      router={router}
      moveToPage={moveToPage}
    />
  );
}
