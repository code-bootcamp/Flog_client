import Dropdown01 from "../../commons/dropdowns/01/Dropdown01.container";
import * as List from "./TripsList.styles";
import { v4 as uuid4 } from "uuid";

export default function TripListUI(props) {
  // console.log(props.shareData, props.myData);
  return (
    <>
      {props.isMine ? (
        <List.List>
          <List.Head>
            <List.Label>지난 여행</List.Label>
            <Dropdown01 />
          </List.Head>
          <List.TripList>
            {props.myData?.fetchSchedules.map((el, index) => (
              <>
                <List.CardWrapper key={uuid4()}>
                  <List.Wrapper>
                    {el.isShare === "1" ? (
                      <List.Mark>
                        <img
                          src="/img/icon-body-marker.svg"
                          alt="공유한 여행"
                        />
                      </List.Mark>
                    ) : (
                      ""
                    )}
                    <List.EditWrap onClick={props.onClickUploadBanner}>
                      <img
                        src="/img/icon-body-edit.svg"
                        alt="여행이미지 수정"
                      />
                    </List.EditWrap>
                    <input
                      type="file"
                      onChange={props.onChangeFile}
                      ref={props.fileRef}
                      style={{ display: "none" }}
                    />
                    <List.Image>
                      <img
                        src={
                          el.url
                            ? `https://storage.googleapis.com/${el.url}`
                            : `/img/trips/user/trip-img${1}.jpg`
                        }
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
                <List.CardWrapper key={uuid4()}>
                  <List.Wrapper>
                    {props.myData?.fetchSchedules.isShare === "1" ? (
                      <List.Mark>
                        <img
                          src="/img/icon-body-marker.svg"
                          alt="공유한 여행"
                        />
                      </List.Mark>
                    ) : (
                      ""
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
