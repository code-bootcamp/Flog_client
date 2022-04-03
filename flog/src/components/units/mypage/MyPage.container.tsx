import { useMutation, useQuery } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { IQuery } from "../../../commons/types/generated/types";
import MyPageUI from "./MyPage.presenter";
import { CREATE_POINT_TRANSACTION, FETCH_USER } from "./MyPage.queries";

export default function MyPage() {
  const router = useRouter();
  const { data,refetch } = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER);
  const [pointModal, setPointModal] = useState(false);
  const [point, setPoint] = useState(0);
  const [pointSelect, setPointSelect] = useState(true);
  const [alertModal, setAlertModal] = useState(false);
  const [modalContents, setModalContents] = useState("");
  const [createPointTransaction] = useMutation(CREATE_POINT_TRANSACTION);

  const paymentSubmit = async (rsp) => {
    try {
      await createPointTransaction({
        variables: {
          impUid: rsp.imp_uid,
          amount: Number(point),
        },
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickCoverChange = () => {
    alert("커버 변경 클릭!");
  };

  const onClickPointModal = () => {
    setPointModal(true);
  };

  const onClickExitPointModal = () => {
    setPointModal(false);
  };

  const onClickSubmitPointModal = () => {
    setPointModal(false);
    const IMP = window.IMP;
    IMP.init("imp71807976");
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "Flog 포인트 충전",
        amount: point,
        buyer_email: data?.fetchUser.email,
        buyer_name: data?.fetchUser.nickName,
        buyer_tel: data?.fetchUser.phoneNumber || "010-1111-1111",
        buyer_addr: "서울특별시 구로구",
        buyer_postcode: "00101",
      },
      (rsp) => {
        if (rsp.success) {
          console.log(rsp);
          paymentSubmit(rsp);
          setAlertModal(true);
          setModalContents(`${point} 포인트가 충전되었습니다.`);
        
        } else {
          setAlertModal(true);
          setModalContents("결제가 취소되었습니다.");
        }
      }
    );
    refetch()
  };

  const onChangePoint = (event) => {
    setPoint(event.target.value);
    setPointSelect(false);
  };

  const onClickExitAlertModal = () => {
    setAlertModal(false);
    setPointModal(false);
  };

  const onClickSubmitAlertModal = () => {
    setAlertModal(false);
    setPointModal(false);
  };

  const onClickMoveToDetail = (url: string) => () => {
    router.push(url);
  };
  const onClickNoLink = () => {
    alert("준비중입니다.");
  };

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <MyPageUI
        onClickCoverChange={onClickCoverChange}
        onClickMoveToDetail={onClickMoveToDetail}
        onClickNoLink={onClickNoLink}
        data={data}
        pointModal={pointModal}
        point={point}
        pointSelect={pointSelect}
        onClickExitPointModal={onClickExitPointModal}
        onClickPointModal={onClickPointModal}
        onClickSubmitPointModal={onClickSubmitPointModal}
        onChangePoint={onChangePoint}
        onClickExitAlertModal={onClickExitAlertModal}
        onClickSubmitAlertModal={onClickSubmitAlertModal}
        alertModal={alertModal}
        modalContents={modalContents}
      />
    </>
  );
}
