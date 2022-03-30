import Dropdown01 from "../../../../commons/dropdowns/01/Dropdown01.container";
import * as List from "./TagSearchList.styles";

export default function TagSearchList(props) {
  // console.log(props.hashTagData);
  return (
    <>
      <List.List>
        <List.Head>
          <List.Label>여행 족보</List.Label>
          <Dropdown01 />
        </List.Head>
        <List.TripList>
          {props.hashTagData?.scheduleHashTagSearch.map((el, index) => (
            <>
              <List.CardWrapper key={el.id}>
                <List.Wrapper>
                  <List.Image>
                    <img
                      src={`/img/trips/user/trip-img${index + 1}.jpg`}
                      alt="여행이미지"
                    />
                  </List.Image>
                  <List.Text>
                    <List.Title>{el.title}</List.Title>
                    <List.Subtitle>
                      <List.Date>{el.startDate} ~ </List.Date>
                      <List.Date>{el.endDate}</List.Date>
                      <List.Region>| {el.location}</List.Region>
                    </List.Subtitle>
                  </List.Text>
                </List.Wrapper>
              </List.CardWrapper>
            </>
          ))}
        </List.TripList>
      </List.List>
    </>
  );
}
