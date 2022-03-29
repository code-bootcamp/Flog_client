import * as Add from "./TripWriteMoneyAdd.styles";

export default function TripWriteMoneyAddUI(props) {
  return (
    <Add.Container>
      <Add.AddButton onClick={props.onClick}>
        <img src="/img/icon-mytrip-write-money-add.svg" />
      </Add.AddButton>
    </Add.Container>
  );
}
