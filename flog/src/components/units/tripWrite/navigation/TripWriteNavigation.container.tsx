import { useRouter } from "next/router";
import TripWriteNavigationUI from "./TripWriteNavigation.presenter";

const TRIP_WRITE_NAVIGATION = [
  { title: "일정등록", url: "/myTrips/write/plans" },
  { title: "예산/지출", url: "/myTrips/write/money" },
  { title: "여행로그", url: "/myTrips/write/log" },
];

export default function TripWriteNavigation() {
  const router = useRouter();
  const onClickNav = (url: string) => () => {
    alert(url);
  };
  console.log(router.asPath);
  return (
    <TripWriteNavigationUI
      TRIP_WRITE_NAVIGATION={TRIP_WRITE_NAVIGATION}
      onClickNav={onClickNav}
      router={router}
    />
  );
}
