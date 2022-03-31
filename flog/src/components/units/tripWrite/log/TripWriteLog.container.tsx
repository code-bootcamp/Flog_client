import { useRef, useState } from "react";
import TripWriteLogUI from "./TripWriteLog.presenter";

export default function TripWriteLog(props) {
  const [isShow, setIsShow] = useState([false,false, false, false]);

  const saveButtonRef = useRef<HTMLButtonElement>(null)


  const isMine = false;
  const toggle = (index: any) => () => {
    const temp = new Array(4).fill(false);

    if (isShow[index]) return setIsShow(temp);
    else {
      temp[index] = true;
      setIsShow(temp);
    }
  };

  return <TripWriteLogUI 
  isMine={isMine}
  isShow={isShow}
  toggle={toggle}
  isEdit={props.isEdit}
  index={props.index}
  saveButtonRef={saveButtonRef}
  />;
}
