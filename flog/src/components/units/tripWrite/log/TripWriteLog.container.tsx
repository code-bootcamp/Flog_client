import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import TripWriteLogUI from "./TripWriteLog.presenter";
import {
  UPDATE_SHARE,
  FETCH_SCHEDULE,
  PAYMENT_POINT_TRANSACTION,
  FETCH_USER,
} from "./TripWriteLog.queries";

export default function TripWriteLog(props) {
  const router = useRouter();
  const [pointModal, setPointModal] = useState(false);
  const [point, setPoint] = useState(0);
  const [pointSelect, setPointSelect] = useState(true);
  const [sharing, setSharing] = useState(false);

  const { data: userData } = useQuery(FETCH_SCHEDULE, {
    variables: { scheduleId: String(router.query.scheduleId) },
  });
  const { data: myData } = useQuery(FETCH_USER);
  const saveButtonRef = [1, 1, 1, 1].map((el) =>
    useRef<HTMLButtonElement>(null)
  );
  const [share] = useMutation(UPDATE_SHARE);
  const [paymentPointTransaction] = useMutation(PAYMENT_POINT_TRANSACTION);

  const [viewport, setViewport] = useState(0);
  useEffect(() => {
    const viewportWidth = window.visualViewport.width;
    setViewport(viewportWidth);
  }, []);

  useEffect(() => {
    // console.log(userData);

    if (!userData) return;
    if (userData?.fetchSchedule?.isShare === "1") {
      setSharing(true);
    }
  }, [userData]);

  const shareBtn = async () => {
    console.log("as");
    try {
      const result = await share({
        variables: {
          scheduleId: String(router.query.scheduleId),
        },
      });
      setSharing((prev) => !prev);
      // console.log(result);
    } catch (error) {
      alert(error.message);
    }
  };
  const onChangePoint = (event) => {
    setPoint(event.target.value);
    setPointSelect(false);
  };

  const donation = async () => {
    try {
      const result = await paymentPointTransaction({
        variables: {
          userId: userData?.fetchSchedule.user.id,
          point: Number(point),
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
      isEdit={props.isEdit}
      saveButtonRef={saveButtonRef}
      shareBtn={shareBtn}
      userData={userData}
      pointModal={pointModal}
      setPointModal={setPointModal}
      onChangePoint={onChangePoint}
      pointSelect={pointSelect}
      donation={donation}
      myData={myData}
      sharing={sharing}
      setSharing={setSharing}
      viewport={viewport}
    />
  );
}
