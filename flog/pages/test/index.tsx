import { useState } from "react";
import Point from "../../src/components/commons/modals/chargePoint/ChargePoint.container";
import Exit from "../../src/components/commons/modals/exit/Exit.container";
import DetailBudget from "../../src/components/commons/modals/newBudget/detailBudget/DetailBudget.container";
import TotalBudget from "../../src/components/commons/modals/newBudget/totalBudget/TotalBudget.container";
import NewDetailScheduleModal from "../../src/components/commons/modals/newSchedule/detailSchedule/DetailSchedule.container";
import NewTripScheduleModal from "../../src/components/commons/modals/newSchedule/mainSchedule/MainSchedule.container";

export default function testPage() {
  // 상위 컴포넌트에 넣을 내용 - point
  const [pointModal, setPointModal] = useState(false);
  const [point, setPoint] = useState(0);
  const [pointSelect, setPointSelect] = useState(true);

  const onClickPointModal = () => {
    setPointModal(true);
  };

  const onClickExitPointModal = () => {
    setPointModal(false);
  };

  const onClickSubmitPointModal = () => {
    setPointModal(false);
  };

  const onChangePoint = (event) => {
    setPoint(event.target.value);
    setPointSelect(false);
  };

  // 상위 컴포넌트에 넣을 내용 - exit
  const [exitModal, setExitModal] = useState(false);

  const onClickExitModal = () => {
    setExitModal(true);
  };

  const onClickExitExitModal = () => {
    setExitModal(false);
  };

  const onClickSubmitExitModal = () => {
    setExitModal(false);
  };

  // 상위 컴포넌트에 넣을 내용 - 신규 일정 생성
  const [newScheduleModal, setNewScheduleModal] = useState(false);

  const onClickNewScheduleModal = () => {
    setNewScheduleModal(true);
  };

  const onClickExitNewScheduleModal = () => {
    setNewScheduleModal(false);
  };

  const onClickSubmitNewScheduleModal = () => {
    setNewScheduleModal(false);
  };

  // 상위 컴포넌트에 넣을 내용 - 세부 일정 생성
  const [detailScheduleModal, setDetailScheduleModal] = useState(false);

  const onClickDetailScheduleModal = () => {
    setDetailScheduleModal(true);
  };

  const onClickExitDetailScheduleModal = () => {
    setDetailScheduleModal(false);
  };

  const onClickSubmitDetailScheduleModal = () => {
    setDetailScheduleModal(false);
  };

  // //상위 컴포넌트에 넣을 내용 - budget
  const [detailBudgetModal, setDetailBudgetModal] = useState(false);

  const onClickDetailBudgetModal = () => {
    setDetailBudgetModal(true);
  };

  const onClickExitDetailBudgetModal = () => {
    setDetailBudgetModal(false);
  };

  const onClickSubmitDetailBudgetModal = () => {
    setDetailBudgetModal(false);
  };

  // 상위 컴포넌트에 넣을 내용 - total Budget
  const [totalBudgetModal, setTotalBudgetModal] = useState(false);
  const [totalBuget, setTotalBudget] = useState(0);
  const [budgetSelect, setBudgetSelect] = useState(true);

  const onClickTotalBudgetModal = () => {
    setTotalBudgetModal(true);
  };

  const onClickExitTotalBudgetModal = () => {
    setTotalBudgetModal(false);
  };

  const onClickSubmitTotalBudgetModal = () => {
    setTotalBudgetModal(false);
  };

  const onChangeTotalBudget = (event) => {
    setTotalBudget(event.target.value);
    setBudgetSelect(false);
  };

  return (
    <div>
      <button onClick={onClickPointModal}>포인트 후원하기</button>
      {pointModal && (
        <Point
          onClickExit={onClickExitPointModal}
          onClickSubmit={onClickSubmitPointModal}
          onChangePoint={onChangePoint}
          pointSelect={pointSelect}
        />
      )}

      <button onClick={onClickExitModal}>exit</button>
      {exitModal && (
        <Exit
          onClickExit={onClickExitExitModal}
          onClickSubmit={onClickSubmitExitModal}
        />
      )}

      <button onClick={onClickNewScheduleModal}>신규 일정 생성</button>
      {newScheduleModal && (
        <NewTripScheduleModal
          onClickExit={onClickExitNewScheduleModal}
          onClickSubmit={onClickSubmitNewScheduleModal}
        />
      )}

      <button onClick={onClickDetailScheduleModal}>세부 일정 생성</button>
      {detailScheduleModal && (
        <NewDetailScheduleModal
          onClickExit={onClickExitDetailScheduleModal}
          onClickSubmit={onClickSubmitDetailScheduleModal}
        />
      )}

      <button onClick={onClickDetailBudgetModal}>세부 예산 생성</button>
      {detailBudgetModal && (
        <DetailBudget
          onClickExit={onClickExitDetailBudgetModal}
          onClickSubmit={onClickSubmitDetailBudgetModal}
        />
      )}

      <button onClick={onClickTotalBudgetModal}>예산 설정하기</button>
      {totalBudgetModal && (
        <TotalBudget
          onClickExit={onClickExitTotalBudgetModal}
          onClickSubmit={onClickSubmitTotalBudgetModal}
          onChangeTotalBudget={onChangeTotalBudget}
          budgetSelect={budgetSelect}
        />
      )}
    </div>
  );
}
