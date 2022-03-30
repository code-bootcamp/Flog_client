import { useEffect, useState } from "react";
import Dropdown01 from "../../src/components/commons/dropdowns/01/Dropdown01.container";
// import Dropdown02 from "../../src/components/commons/dropdowns/02/Dropdown02.container";
import Point from "../../src/components/commons/modals/chargePoint/ChargePoint.container";
import Exit from "../../src/components/commons/modals/exit/Exit.container";
import DetailBudgetForm from "../../src/components/commons/modals/formBuget/DetailBugetForm.container";
import DetailScheduleForm from "../../src/components/commons/modals/formDetailSchedule/DetailScheduleForm.container";
import MapModal from "../../src/components/commons/modals/map/MapModal.container";
import TotalBudget from "../../src/components/commons/modals/newBudget/totalBudget/TotalBudget.container";

import TripList from "../../src/components/units/tripList/TripList.container";

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
    console.log(event.target.value);
  };

  // 상위 컴포넌트에 넣을 내용 - MapModal
  const [mapModal, setMapModal] = useState(false);

  const onClickMapModal = () => {
    setMapModal(true);
  };

  const onClickExitMapModal = () => {
    setMapModal(false);
  };

  const onClickSubmitMapModal = () => {
    setMapModal(false);
    // onClickNewScheduleModal();
    setTimeout(onClickNewScheduleModal, 500);
  };

  // 상위 컴포넌트에 넣을 내용 - detailBudgetForm

  const [detailBudgetFormModal, setDetailBudgetFormModal] = useState(false);
  const [isSelect, setIsSelect] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [category, setCategory] = useState("");

  const onClickDetailBudgetFormModal = () => {
    setDetailBudgetFormModal(true);
    setIsSelect([false, false, false, false, false, false]);
  };

  const onClickExitDetailBudgetFormModal = () => {
    setDetailBudgetFormModal(false);
  };

  const onClickSubmitDetailBudgetFormModal = (data: any) => {
    if (!data?.contents || !data?.budget || !data?.hour || !data?.minutes) {
      return;
    }
    console.log(data, category);
    // setDetailBudgetFormModal(false);
  };

  const TRIP_CATEGORY = [
    { num: 1, label: "식비" },
    { num: 2, label: "쇼핑" },
    { num: 3, label: "교통" },
    { num: 4, label: "관광" },
    { num: 5, label: "숙박" },
    { num: 6, label: "기타" },
  ];

  const onClickCategory = (index: number) => () => {
    const temp = [false, false, false, false, false, false];
    temp[index] = true;
    setIsSelect([...temp]);
    setCategory(TRIP_CATEGORY[index].label);
  };

  // 상위 컴포넌트에 넣을 내용 - detailScheduleForm

  const [detailScheduleFormModal, setDetailScheduleFormModal] = useState(false);

  const onClickDetailScheduleFormModal = () => {
    setDetailScheduleFormModal(true);
  };

  const onClickExitDetailScheduleFormModal = () => {
    setDetailScheduleFormModal(false);
  };

  const onClickSubmitDetailScheduleFormModal = (data: any) => {
    if (
      !data?.place ||
      !data?.startHour ||
      !data?.startMinutes ||
      !data?.takenHour ||
      !data?.takenMinutes
    )
      return;
    console.log(data);
    // setDetailScheduleFormModal(false);
  };

  return (
    <>
      <div>
        <button onClick={onClickDetailBudgetFormModal}>
          세부 예산 - useForm
        </button>
        {detailBudgetFormModal && (
          <DetailBudgetForm
            onClickExit={onClickExitDetailBudgetFormModal}
            onClickSubmit={onClickSubmitDetailBudgetFormModal}
            onClickCategory={onClickCategory}
            TRIP_CATEGORY={TRIP_CATEGORY}
            isSelect={isSelect}
          />
        )}
        <button onClick={onClickDetailScheduleFormModal}>
          세부 일정 - useForm
        </button>
        {detailScheduleFormModal && (
          <DetailScheduleForm
            onClickExit={onClickExitDetailScheduleFormModal}
            onClickSubmit={onClickSubmitDetailScheduleFormModal}
          />
        )}

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

        <button onClick={onClickTotalBudgetModal}>예산 설정하기</button>
        {totalBudgetModal && (
          <TotalBudget
            onClickExit={onClickExitTotalBudgetModal}
            onClickSubmit={onClickSubmitTotalBudgetModal}
            onChangeTotalBudget={onChangeTotalBudget}
            budgetSelect={budgetSelect}
          />
        )}
        <Dropdown01 />
        {/* <Dropdown02 /> */}
        <button onClick={onClickMapModal}>map</button>
        {mapModal && (
          <MapModal
            onClickExit={onClickExitMapModal}
            onClickSubmit={onClickSubmitMapModal}
          />
        )}
      </div>
      <TripList />
    </>
  );
}
