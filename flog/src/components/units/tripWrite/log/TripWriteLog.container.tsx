import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useMemo, useRef, useState } from "react";
import TripWriteLogUI from "./TripWriteLog.presenter";
import {
  UPDATE_SHARE,
  PAYMENT_POINT_TRANSACTION,
  FETCH_USER,
  DELETE_BOARD,
  FETCH_BOARD,
  FETCH_SCHEDULE,
} from "./TripWriteLog.queries";

export default function TripWriteLog(props) {
  const [share] = useMutation(UPDATE_SHARE);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [paymentPointTransaction] = useMutation(PAYMENT_POINT_TRANSACTION);

  const router = useRouter();
  const [point, setPoint] = useState(0);
  const [viewport, setViewport] = useState(0);
  // Point ResponsiveToggle Sharing TotalMoney
  const [togglePRST, setTogglePRST] = useState([false, false, false, false]);
  const [modalContents, setModalContents] = useState("");
  const [isShow, setIsShow] = useState([true]);
  const [selected, setSelected] = useState([[]]);

  const { data: myData } = useQuery(FETCH_USER);
  const { data: BoardData } = useQuery(FETCH_BOARD, {
    variables: { scheduleId: String(router.query.scheduleId) },
  });

  const { data: userData } = useQuery(FETCH_SCHEDULE, {
    variables: { scheduleId: String(router.query.scheduleId) },
  });
  const saveButtonRef = useRef([]);

  const changePRST = (index: number) => {
    const temp = [...togglePRST];

    if (temp[index]) temp[index] = false;
    else temp[index] = true;
    console.log("d");
    console.log(temp);
    console.log(index);

    setTogglePRST(temp);
  };
  useEffect(() => {
    const viewportWidth = window.visualViewport.width;
    setViewport(viewportWidth);
  }, []);

  const shareBtn = async () => {
    try {
      await share({
        variables: {
          scheduleId: String(router.query.scheduleId),
        },
      });
      changePRST(2);
      if (!togglePRST[2]) setModalContents("여행 로그 공유가 완료되었습니다");
      else setModalContents("여행로그 공유가 취소되었습니다");
    } catch (error) {
      setModalContents(error.message);
    }
  };

  const donationFunction = async () => {
    try {
      await paymentPointTransaction({
        variables: {
          userId: userData?.fetchSchedule.user.id,
          point: Number(point),
        },
      });
      changePRST(0);
      setTimeout(() => {
        setModalContents("flog 여행을 위한 후원 감사합니다!");
      }, 500);
    } catch (error) {
      setModalContents(error.message);
      changePRST(0);
    }
  };
  const onClickDelete = async () => {
    try {
      const result = await deleteBoard({
        variables: {
          scheduleId: String(router.query.scheduleId),
        },
      });
      console.log(result);
      if (result.data?.deleteBoard)
        setModalContents("여행 로그 삭제가 완료되었습니다.");
      else setModalContents("여행 로그가 없습니다.");
    } catch (error) {
      setModalContents(error.message);
    }
  };
  useEffect(() => {
    console.log(BoardData);
  }, [BoardData]);

  return (
    <TripWriteLogUI
      selected={selected}
      setSelected={setSelected}
      changePRST={changePRST}
      togglePRST={togglePRST}
      point={point}
      setPoint={setPoint}
      isMine={props.isMine}
      isEdit={props.isEdit}
      saveButtonRef={saveButtonRef}
      shareBtn={shareBtn}
      donationFunction={donationFunction}
      myData={myData}
      viewport={viewport}
      modalContents={modalContents}
      setModalContents={setModalContents}
      onClickDelete={onClickDelete}
      BoardData={BoardData}
      userData={userData}
      isShow={isShow}
      setIsShow={setIsShow}
    />
  );
}
