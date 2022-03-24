import TripWriteMoneyCardUI from "./TripWriteMoneyCard.presenter";

export default function TripWriteMoneyCard(props) {
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

  return (
    <TripWriteMoneyCardUI
      contents={props.contents}
      selectStatusIcon={selectStatusIcon}
    />
  );
}
