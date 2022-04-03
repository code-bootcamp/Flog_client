import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import TripWriteMoneyCardUI from "./TripWriteMoneyCard.presenter";
import { UPDATE_MONEYBOOK } from "./TripWriteMoneyCard.queries";

export default function TripWriteMoneyCard(props) {
  const router = useRouter();
  const [clickContents, setClickContents] = useState([]);
  const [detailBudgetEditFormModal, setDetailBudgetEditFormModal] =
    useState(false);
  const [isSelect, setIsSelect] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [category, setCategory] = useState("");
  const [clickDates, setClickDates] = useState("");
  const [updateMoneybook] = useMutation(UPDATE_MONEYBOOK);

  const selectStatusIcon = (status) => {
    if (status === "FOOD") return "/img/icon-mytrip-write-money-food.svg";
    if (status === "SHOPPING")
      return "/img/icon-mytrip-write-money-shopping.svg";
    if (status === "TRANSPORTATION")
      return "/img/icon-mytrip-write-money-transport.svg";
    if (status === "TOURISM") return "/img/icon-mytrip-write-money-tourism.svg";
    if (status === "STAY") return "/img/icon-mytrip-write-money-stay.svg";
    if (status === "ETC") return "/img/icon-mytrip-write-money-etc.svg";
  };

  const onClickExitDetailBudgetEditFormModal = () => {
    setIsSelect([false, false, false, false, false, false]);
    setCategory("");
    setDetailBudgetEditFormModal(false);
  };

  const onClickSubmitDetailBudgetEditFormModal = async (data: any) => {
    if (!data?.contents || !data?.budget || !category) {
      props.setModalContents(
        "카테고리, 내용, 금액이 모두 입력되었는지 확인해주세요."
      );
      props.setAlertModal(true);
      setIsSelect([false, false, false, false, false, false]);
      setCategory("");
      return;
    }

    try {
      await updateMoneybook({
        variables: {
          updateMoneyBookInput: {
            date: clickDates,
            status: category,
            amount: Number(data.amount) || Number(clickContents.amount),
            time: "",
            context: data.contents,
            memo: data.memo,
          },
          budgetId: props.budgetId,
          moneyBookId: clickContents.id,
        },
      });
      router.reload();
    } catch (error) {
      props.setModalContents(error.message);
      props.setAlertModal(true);
    }
    setIsSelect([false, false, false, false, false, false]);
    setCategory("");
    setDetailBudgetEditFormModal(false);
  };

  const TRIP_CATEGORY = [
    { num: 1, label: "식비", enum: "FOOD" },
    { num: 2, label: "쇼핑", enum: "SHOPPING" },
    { num: 3, label: "교통", enum: "TRANSPORTATION" },
    { num: 4, label: "관광", enum: "TOURISM" },
    { num: 5, label: "숙박", enum: "STAY" },
    { num: 6, label: "기타", enum: "ETC" },
  ];

  const onClickCategory = (index: number) => () => {
    const temp = [false, false, false, false, false, false];
    temp[index] = true;
    setIsSelect([...temp]);
    setCategory(TRIP_CATEGORY[index].enum);
  };

  const onClickCardContents = (contents, datesIndex) => () => {
    setClickContents(contents);
    const originCategoryArr = isSelect;
    const categoryArr = originCategoryArr.map((el, index) => {
      if (contents.status === TRIP_CATEGORY[index].enum) {
        setCategory(TRIP_CATEGORY[index].enum);
        return true;
      }
      if (contents.status !== TRIP_CATEGORY[index].enum) return false;
    });
    setIsSelect(categoryArr);
    setClickDates(props.tripDates[datesIndex]);
    setDetailBudgetEditFormModal(true);
  };

  return (
    <TripWriteMoneyCardUI
      el={props.el}
      selectStatusIcon={selectStatusIcon}
      onClickCardContents={onClickCardContents}
      detailBudgetEditFormModal={detailBudgetEditFormModal}
      isSelect={isSelect}
      onClickExitDetailBudgetEditFormModal={
        onClickExitDetailBudgetEditFormModal
      }
      onClickSubmitDetailBudgetEditFormModal={
        onClickSubmitDetailBudgetEditFormModal
      }
      onClickCategory={onClickCategory}
      TRIP_CATEGORY={TRIP_CATEGORY}
      clickContents={clickContents}
    />
  );
}
