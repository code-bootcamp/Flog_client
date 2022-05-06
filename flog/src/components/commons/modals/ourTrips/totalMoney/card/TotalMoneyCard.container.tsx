import { insertCommaPrice } from "../../../../../../commons/utils/insertComma";
import * as M from "./TotalMoneyCard.styles";

export default function TotalMoneyCard(props) {
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
    <M.MoneyBox>
      {props.el.contents.map((contents, index) => (
        <M.Card key={index}>
          <M.Contents>
            <M.ContentsLeftBox>
              <M.IconBox>
                <img src={selectStatusIcon(contents.status)} />
              </M.IconBox>
              <M.TextBox>
                <span className="context">{contents.context}</span>
                <span className="memo">{contents.memo}</span>
              </M.TextBox>
            </M.ContentsLeftBox>
            <M.Amount>
              {`${insertCommaPrice(String(contents.amount))}원`}
            </M.Amount>
          </M.Contents>
        </M.Card>
      ))}
    </M.MoneyBox>
  );
}
