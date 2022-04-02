import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import PointsUI from "./Points.presenter";
import {FETCH_POINT_HISTORY} from "./Points.queries"
export default function Points() {
  const router = useRouter();
  const {data} = useQuery(FETCH_POINT_HISTORY)
  const onClickMoveToMyPage = () => {
    router.push("/mypage");
  };
  useEffect(() => {
    console.log(data)
  },[data])
  return <PointsUI onClickMoveToMyPage={onClickMoveToMyPage} data={data}/>;
}
