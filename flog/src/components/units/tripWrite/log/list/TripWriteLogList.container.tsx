import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TripWriteLogListUI from "./TripWriteLogList.presenter";
import { FETCH_DETAIL_SCHEDULE } from "./TripWriteLogList.queries";

export default function TripWriteLogList(props) {
  const router = useRouter();
  const [isShow, setIsShow] = useState([false,false,false,false]);


  const [selected, setSelected] = useState({ title: "", des: "", index: -1 });
  const { data:data1 } = useQuery(FETCH_DETAIL_SCHEDULE, {
    variables: {
      scheduleId: String(router.query.scheduleId),
      day: '1'
    },
  });
  const { data:data2 } = useQuery(FETCH_DETAIL_SCHEDULE, {
    variables: {
      scheduleId: String(router.query.scheduleId),
      day: '2'
    },
  });
  const { data:data3 } = useQuery(FETCH_DETAIL_SCHEDULE, {
    variables: {
      scheduleId: String(router.query.scheduleId),
      day: '3'
    },
  });
  const { data:data4 } = useQuery(FETCH_DETAIL_SCHEDULE, {
    variables: {
      scheduleId: String(router.query.scheduleId),
      day: '4'
    },
  });

  useEffect(() => {console.log(data1, data2, data3, data4)},[data1, data2, data3,data4])

  const toggle = (index: any) => () => {
    const temp = new Array(4).fill(false);

    if (isShow[index]) return setIsShow(temp);
    else {
      temp[index] = true;
      setIsShow(temp);
    }
  };
  return (
    <TripWriteLogListUI
      data1={data1}
      data2={data2}
      data3={data3}
      data4={data4}
      isEdit={props.isEdit}
      isMine={props.isMine}
      index={props.index}
      setSelected={setSelected}
      selected={selected}
      saveButtonRef={props.saveButtonRef}
      toggle={toggle}
      isShow={isShow}
    />
  );
}
