import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import OurTripDetailUI from "./OurTripDetail.presenter";
import {FETCH_BOARD, SHARE} from "./OurTripDetail.queries"

export default function OurTripDetail() {
  const router = useRouter()
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      scheduleId:String(router.query.scheduleId),
    }
  });
  
  useEffect(() => {
    console.log(data)

  },[data])

 
  return <OurTripDetailUI data={data}   />;
}
