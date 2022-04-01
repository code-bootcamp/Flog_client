import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useMemo, useRef, useState } from "react";
import TripWriteLogListUI from "./TripWriteLogList.presenter";
import {
  FETCH_DETAIL_SCHEDULE,CREATE_BOARD
} from "./TripWriteLogList.queries";

export default function TripWriteLogList(props) {
  const router = useRouter();

  const [selected, setSelected] = useState({ title:"",des:""})
  const { data } = useQuery(FETCH_DETAIL_SCHEDULE, {
    variables: {
      scheduleId: String(router.query.scheduleId),
      day: String(props.index + 1)
    }
  });
 

  
  
                                       

  useEffect(() => {
    console.log(data)
  },[data])
  const isMine = false;

  return (
    <TripWriteLogListUI
      data={data}
      isEdit={props.isEdit}
      isMine={isMine}
      index={props.index}
      setSelected={setSelected}
      selected={selected}
      saveButtonRef={props.saveButtonRef}
    />
  );
}
