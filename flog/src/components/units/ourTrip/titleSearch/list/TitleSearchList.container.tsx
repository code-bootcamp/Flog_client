import * as List from "./TitleSearchList.styles";
import { v4 as uuid4 } from "uuid";
import { useRouter } from "next/router";
import Dropdown01 from "../../../../commons/dropdowns/01/Dropdown01.container";
import OutlinedButton01 from "../../../../commons/buttons/outlined/01/OutlinedButton01.container";

export default function OurTripListUI(props) {
  const router = useRouter();
  return (
    <List.ListWrap>
      <List.List>
        <List.Head>
          <List.Label>여행 족보</List.Label>
          <Dropdown01 />
        </List.Head>
        <List.TripList>
          {props.titleData?.scheduleSearch.map((el, index) => (
            <List.CardWrapper key={uuid4()}>
              <List.Wrapper>
                <List.Image>
                  <img
                    onClick={() => router.push(`/ourTrips/${el.id}`)}
                    src={
                      el.url
                        ? `https://storage.cloud.google.com/${el.url}`
                        : `/img/tripList-default.jpg`
                    }
                    alt="여행이미지"
                  />
                </List.Image>
                <List.Text>
                  <List.Title>{el.title}</List.Title>
                  <List.Subtitle>
                    <ul>
                      <li className="date">
                        {el.startDate.slice(2, 10)} ~ {el.endDate.slice(2, 10)}
                      </li>
                      <li className="location">
                        {el.location.split(".").join(" ")}
                      </li>
                    </ul>
                  </List.Subtitle>
                </List.Text>
              </List.Wrapper>
            </List.CardWrapper>
          ))}
        </List.TripList>
      </List.List>
      <OutlinedButton01
        content="더보기"
        size="large"
        onClick={props.onClickMoreOurTrip}
      />
    </List.ListWrap>
  );
}
