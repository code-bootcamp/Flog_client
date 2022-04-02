import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TripWriteLogListUI from "./TripWriteLogList.presenter";
import { FETCH_DETAIL_SCHEDULE } from "./TripWriteLogList.queries";

export default function TripWriteLogList(props) {
  const router = useRouter();

  const [selected, setSelected] = useState({ title: "", des: "", index: -1 });
  const { data } = useQuery(FETCH_DETAIL_SCHEDULE, {
    variables: {
      scheduleId: String(router.query.scheduleId),
      day: String(props.index + 1),
    },
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <TripWriteLogListUI
      data={data}
      isEdit={props.isEdit}
      isMine={props.isMine}
      index={props.index}
      setSelected={setSelected}
      selected={selected}
      saveButtonRef={props.saveButtonRef}
    />
  );
}
