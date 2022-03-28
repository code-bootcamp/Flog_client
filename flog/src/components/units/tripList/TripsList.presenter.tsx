import Dropdown01 from "../../commons/dropdowns/01/Dropdown01.container";
import * as List from "./TripsList.styles";

export default function TripListUI(props) {
  const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  return (
    <List.List>
      <List.Head>
        <List.Label>{props.isMine ? "지난 여행" : "여행 족보"}</List.Label>
        <Dropdown01 />
        {/* <List.Select>
          <List.SelectOption selected>최신순</List.SelectOption>
          <List.SelectOption>조회순</List.SelectOption>
          <List.SelectOption>과거순</List.SelectOption>
        </List.Select> */}
      </List.Head>
      <List.TripList>
        {arr.map((_el, index) => (
          <>
            <List.CardWrapper key={index}>
              <List.Wrapper>
                {index === 2 && (
                  <List.Mark>
                    <img src="/img/icon-body-marker.svg" alt="공유한 여행" />
                  </List.Mark>
                )}
                {props.isMine && (
                  <List.EditWrap>
                    <img src="/img/icon-body-edit.svg" alt="여행이미지 수정" />
                  </List.EditWrap>
                )}

                <List.Image>
                  <img
                    src={`/img/trips/user/trip-img${index + 1}.jpg`}
                    alt="여행이미지"
                  />
                </List.Image>
                <List.Text>
                  <List.Title>엄마와 함께한 제주도여행</List.Title>
                  <List.Subtitle>
                    <List.Date>22.02.03 ~ 22.02.04</List.Date>
                    <List.Region>| 전라남도 전주</List.Region>
                  </List.Subtitle>
                </List.Text>
              </List.Wrapper>
            </List.CardWrapper>
          </>
        ))}
      </List.TripList>
    </List.List>
  );
}
