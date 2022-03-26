import { useRouter } from "next/router";
import PointsUI from "./Points.presenter";

export default function Points() {
  const router = useRouter();
  const onClickMoveToMyPage = () => {
    router.push("/mypage");
  };
  return <PointsUI onClickMoveToMyPage={onClickMoveToMyPage} />;
}
