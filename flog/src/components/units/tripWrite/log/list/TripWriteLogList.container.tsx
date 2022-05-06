import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TripWriteLogListUI from "./TripWriteLogList.presenter";

export default function TripWriteLogList(props) {
  const router = useRouter();

  useEffect(() => {
    if (!props.userData) return;
    if (props.togglePRST[2]) return;
    if (props.userData?.fetchSchedule?.isShare === "1") {
      // props.setTogglePRST([false, false, true, false]);
      props.changePRST(2);
    }
  }, [props.userData]);

  const toggle = (index: any) => () => {
    const temp = new Array(4).fill(false);
    if (props.isShow[index]) return props.setIsShow(temp);
    else {
      temp[index] = true;
      props.setIsShow(temp);
    }
  };

  return (
    <TripWriteLogListUI
      isMine={props.isMine}
      isEdit={props.isEdit}
      saveButtonRef={props.saveButtonRef}
      userData={props.userData}
      toggle={toggle}
      changePRST={props.changePRST}
      setSelected={props.setSelected}
      isShow={props.isShow}
    />
  );
}
