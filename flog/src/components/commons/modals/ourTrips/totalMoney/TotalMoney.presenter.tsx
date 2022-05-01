import { insertCommaPrice } from "../../../../../commons/utils/insertComma";
import TotalMoneyCard from "./card/TotalMoneyCard.container";
import * as M from "./TotalMoney.styles";

export default function TotalMoneyModalUI(props) {
  return (
    <M.Container>
      <M.ModalWrapper>
        <M.Modal>
          <M.Title>
            <img
              src="/img/icon-modal-exit.svg"
              alt="나가기버튼"
              onClick={props.onClickExit}
            />
          </M.Title>
          <M.Content>
            {props.moneyList.map((el: any, index: number) => (
              <M.MoneyBookColumn key={index}>
                <M.MoneyBookTitle>
                  <span className="title">
                    {el.date === "ready"
                      ? "여행 준비"
                      : el.date.slice(-5).replace("-", ".")}
                  </span>
                  <span className="amount">
                    {`${
                      props.dailyAmount[index]
                        ? insertCommaPrice(String(props.dailyAmount[index]))
                        : "0"
                    }`}
                    원
                  </span>
                </M.MoneyBookTitle>
                <M.MoneyBookCards>
                  <TotalMoneyCard el={el} tripDates={props.tripDates} />
                </M.MoneyBookCards>
              </M.MoneyBookColumn>
            ))}
          </M.Content>
        </M.Modal>
      </M.ModalWrapper>
    </M.Container>
  );
}
