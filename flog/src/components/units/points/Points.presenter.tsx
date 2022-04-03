import Dropdown01 from "../../commons/dropdowns/01/Dropdown01.container";
import Pagination01 from "../../commons/paginations/01/Pagination01.container";
import * as Points from "./Points.styles";
import { IPointsUIProps } from "./Points.types";
import { SAMPLE_DATA_POINTS } from "./SampleDataPoints";

export default function PointsUI(props: IPointsUIProps) {
  return (
    <Points.Container>
      <Points.InnerWrap>
        <Points.Navigator>
          <span onClick={props.onClickMoveToMyPage}>마이 페이지 &gt; </span>
          <span className="now">포인트 이용내역</span>
        </Points.Navigator>
        <Points.Title>
          <Points.TitleText>
            <h2>포인트 이용내역</h2>
          </Points.TitleText>
          <Points.TitleDropdown>
            <Dropdown01 />
          </Points.TitleDropdown>
        </Points.Title>
        <Points.Contents>
          { props.data?.fetchPointHistory.map((el, index) => (
            <Points.Item key={index}>
              <Points.Status>
                {el.status === "CHARGE" && <span className="charge">충전</span>}
                {el.status === "PAYMENT" && (
                  <span className="payment">사용</span>
                )}
                {el.status === "EARN" && <span className="earn">적립</span>}
                {el.status === "CANCEL" && <span className="cancle">취소</span>}
              </Points.Status>
              <Points.ItemText>
                <div className="tit">
                  {el.status === "CHARGE" && "포인트 충전"}
                  {el.status === "PAYMENT" && "여행 족보 후원"}
                  {el.status === "EARN" && "여행 족보 후원"}
                  {el.status === "CANCEL" && "결제 취소"}
                </div>
                <div className="date">{el.createdAt.slice(0,10)}</div>
              </Points.ItemText>
              <Points.ItemAmount>
                <div className="changed">{el.changed} P</div>
                <div className="amount">{el.current} P</div>
              </Points.ItemAmount>
            </Points.Item>
          ))}
        </Points.Contents>
        <Pagination01 />
      </Points.InnerWrap>
    </Points.Container>
  );
}
