import * as List from "./MyTripList.styles";
import { v4 as uuid4 } from "uuid";

import { Fragment } from "react";
import OutlinedButton01 from "../../../commons/buttons/outlined/01/OutlinedButton01.container";
import Dropdown01 from "../../../commons/dropdowns/01/Dropdown01.container";
import TripListUIItem from "./MyTripList.presenterRef";

export default function MyTripListUI(props) {
  return (
    <List.ListWrap>
      <List.List>
        <List.Head>
          <List.Label>지난 여행</List.Label>
          <Dropdown01 />
        </List.Head>
        <List.TripList>
          {props.myData?.fetchSchedules.map((el, index) => (
            <Fragment key={uuid4()}>
              <TripListUIItem
                el={el}
                index={index}
                onChangeFile={props.onChangeFile}
              />
            </Fragment>
          ))}
        </List.TripList>
      </List.List>
      <OutlinedButton01
        content="더보기"
        size="large"
        onClick={props.onClickMoreMyTrip}
      />
    </List.ListWrap>
  );
}
