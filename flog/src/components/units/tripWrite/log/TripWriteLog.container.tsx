import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import TripWriteLogUI from "./TripWriteLog.presenter";
import { SHARE, CREATE_BOARD } from "./TripWriteLog.queries";
export default function TripWriteLog(props) {
  const [isShow, setIsShow] = useState([false, false, false, false]);

  const saveButtonRef = [1, 1, 1, 1].map((x) =>
    useRef<HTMLButtonElement>(null)
  );
  const [share] = useMutation(SHARE);

  const router = useRouter();

  const toggle = (index: any) => () => {
    const temp = new Array(4).fill(false);

    if (isShow[index]) return setIsShow(temp);
    else {
      temp[index] = true;
      setIsShow(temp);
    }
  };
  const shareBtn = async () => {
    console.log("as");
    try {
      const result = await share({
        variables: {
          scheduleId: String(router.query.scheduleId),
        },
      });
      console.log(result);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <TripWriteLogUI
      isMine={props.isMine}
      isShow={isShow}
      toggle={toggle}
      isEdit={props.isEdit}
      index={props.index}
      saveButtonRef={saveButtonRef}
      shareBtn={shareBtn}
    />
  );
}
