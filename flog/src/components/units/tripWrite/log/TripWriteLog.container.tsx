import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import TripWriteLogUI from "./TripWriteLog.presenter";
import {
  UPDATE_SHARE,
  FETCH_SCHEDULE,
  PAYMENT_POINT_TRANSACTION,
  FETCH_USER,
  DELETE_BOARD,
} from "./TripWriteLog.queries";

export default function TripWriteLog(props) {
  const router = useRouter();
  const [pointModal, setPointModal] = useState(false);
  const [point, setPoint] = useState(0);
  const [responsiveToggle, setResponsiveToggle] = useState(false);
  const [pointSelect, setPointSelect] = useState(true);
  const [sharing, setSharing] = useState(false);
  const [alertModal, setAlertModal] = useState(false);
  const [modalContents, setModalContents] = useState("");
  const [totalMoney, setTotalMoney] = useState(false);

  const onClickAlertModal = () => {
    setModalContents("flog 여행을 위한 후원 감사합니다!");
    setAlertModal(true);
  };

  const onClickExitAlertModal = () => {
    setAlertModal(false);
  };

  const onClickSubmitAlertModal = () => {
    setAlertModal(false);
  };

  const onClickExitTotalMoneyModal = () => {
    setTotalMoney(false);
  };

  const onClickSubmitTotalMoneyModal = () => {
    setTotalMoney(false);
  };

  const { data: userData } = useQuery(FETCH_SCHEDULE, {
    variables: { scheduleId: String(router.query.scheduleId) },
  });
  const { data: myData } = useQuery(FETCH_USER);

  const saveButtonRef = [1, 1, 1, 1].map((el) =>
    useRef<HTMLButtonElement>(null)
  );
  const [share] = useMutation(UPDATE_SHARE);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const [paymentPointTransaction] = useMutation(PAYMENT_POINT_TRANSACTION);

  const [viewport, setViewport] = useState(0);
  useEffect(() => {
    const viewportWidth = window.visualViewport.width;
    setViewport(viewportWidth);
  }, []);

  useEffect(() => {
    if (!userData) return;
    if (userData?.fetchSchedule?.isShare === "1") {
      setSharing(true);
    }
  }, [userData]);

  const [isShow, setIsShow] = useState([true, false, false, false]);

  const toggle = (index: any) => () => {
    const temp = new Array(4).fill(false);
    if (isShow[index]) return setIsShow(temp);
    else {
      temp[index] = true;
      setIsShow(temp);
    }
  };
  const shareBtn = async () => {
    try {
      const result = await share({
        variables: {
          scheduleId: String(router.query.scheduleId),
        },
      });
      setSharing((prev) => !prev);
    } catch (error) {
      setModalContents(error.message);
      setAlertModal(true);
    }
  };

  const donationFunction = async () => {
    try {
      const result = await paymentPointTransaction({
        variables: {
          userId: userData?.fetchSchedule.user.id,
          point: Number(point),
        },
      });
      setPointModal(false);
      setTimeout(() => {
        onClickAlertModal();
      }, 500);
    } catch (error) {
      setModalContents(error.message);
      setAlertModal(true);
    }
  };
  const onClickDelete = async () => {
    console.log('delete')

    try {
      const result = await deleteBoard({
        variables: {
          scheduleId: String(router.query.scheduleId),
        },
      });
      setModalContents("삭제가 완료되었습니다.");
      setAlertModal(true);
    } catch (error) {
      setModalContents(error.message);
      setAlertModal(true);
    }
  }
  useEffect(() => {
    console.log(userData)
  },[userData])

  return (
    <TripWriteLogUI
      setPoint={setPoint}
      setPointSelect={setPointSelect}
      isMine={props.isMine}
      isShow={isShow}
      toggle={toggle}
      isEdit={props.isEdit}
      index={props.index}
      saveButtonRef={saveButtonRef}
      shareBtn={shareBtn}
      userData={userData}
      pointModal={pointModal}
      setPointModal={setPointModal}
      pointSelect={pointSelect}
      donationFunction={donationFunction}
      setResponsiveToggle={setResponsiveToggle}
      responsiveToggle={responsiveToggle}
      myData={myData}
      sharing={sharing}
      setSharing={setSharing}
      viewport={viewport}
      onClickExitAlertModal={onClickExitAlertModal}
      onClickSubmitAlertModal={onClickSubmitAlertModal}
      modalContents={modalContents}
      alertModal={alertModal}
      onClickExitTotalMoneyModal={onClickExitTotalMoneyModal}
      onClickSubmitTotalMoneyModal={onClickSubmitTotalMoneyModal}
      totalMoney={totalMoney}
      setTotalMoney={setTotalMoney}
      onClickDelete={onClickDelete}
    />
  );
}
