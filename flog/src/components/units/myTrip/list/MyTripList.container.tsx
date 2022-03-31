import OutlinedButton01 from "../../../commons/buttons/outlined/01/OutlinedButton01.container";
import * as Non from "./MyTripListNotUser.styles";
import * as My from "./MyTripList.styles";
import { IMyTripListUIProps } from "./MyTripList.types";
import TripList from "../../tripList/TripList.container";
import { v4 as uuid4 } from "uuid";

export default function MyTripList(props) {
  const Array = [1, 2, 3, 4, 5, 6];

  const onClickMoveToOurTrip = () => {
    alert("우리의 여행 보러가기 function");
  };

  return (
    <My.List>
      {props.userData && props.myData ? (
        <TripList
          isMine={props.isMine}
          myData={props.myData}
          fetchMore={props.fetchMore}
          onClickMore={props.onClickMore}
        />
      ) : (
        <Non.Wrap>
          <Non.Text>
            지금까지{" "}
            <span style={{ fontWeight: 700, color: "#58BD97" }}>16,930개</span>
            의 여행이
            <br />
            기록되었어요
          </Non.Text>
          <Non.TripList>
            {Array.map((el) => (
              <Non.Image key={uuid4()}>
                <img
                  src={`/img/trips/notUser/trip-img${el}.png`}
                  alt="여행이미지"
                />
              </Non.Image>
            ))}
          </Non.TripList>
          <OutlinedButton01
            content="우리의 여행 보러가기"
            size="large"
            onClick={onClickMoveToOurTrip}
          />
        </Non.Wrap>
      )}
    </My.List>
  );
}
