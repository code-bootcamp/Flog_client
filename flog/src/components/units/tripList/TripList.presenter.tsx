import Dropdown01 from "../../commons/dropdowns/01/Dropdown01.container";
import * as List from "./TripsList.styles";

export default function TripListUI(props) {
  console.log(props.shareData, props.myData);
  return (
    <>
      {props.isMine ? (
        <List.List>
          <List.Head>
            <List.Label>지난 여행</List.Label>
            <Dropdown01 />
          </List.Head>
          <List.TripList>
            {props.myData?.fetchShareSchedules.map((el, index) => (
              <>
                <List.CardWrapper key={el.id}>
                  <List.Wrapper>
                    <List.Mark>
                      <img src="/img/icon-body-marker.svg" alt="공유한 여행" />
                    </List.Mark>
                    <List.EditWrap>
                      <img
                        src="/img/icon-body-edit.svg"
                        alt="여행이미지 수정"
                      />
                    </List.EditWrap>
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
      ) : (
        <List.List>
          <List.Head>
            <List.Label>여행 족보</List.Label>
            <Dropdown01 />
          </List.Head>
          <List.TripList>
            {props.shareData?.fetchShareSchedules.map((el, index) => (
              <>
                <List.CardWrapper key={el.id}>
                  <List.Wrapper>
                    {props.shareData?.fetchShareSchedules.isShare && (
                      <List.Mark>
                        <img
                          src="/img/icon-body-marker.svg"
                          alt="공유한 여행"
                        />
                      </List.Mark>
                    )}
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
      )}
    </>
  );
}
