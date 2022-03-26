import OutlinedButton01 from "../../../commons/buttons/outlined/01/OutlinedButton01.container";
import * as Non from "./MyTripListNotUser.styles";
import * as My from "./MyTripList.styles";
import { IMyTripListUIProps } from "./MyTripList.types";

export default function MyTripListUI(props: IMyTripListUIProps) {
  const Array = [1, 2, 3, 4, 5, 6];

  const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  return (
    <My.List>
      {props.userInfo ? (
        <>
          <My.Head>
            <My.Label>지난 여행</My.Label>
            <My.Select>
              <My.SelectOption selected>최신순</My.SelectOption>
              <My.SelectOption>조회순</My.SelectOption>
              <My.SelectOption>과거순</My.SelectOption>
            </My.Select>
          </My.Head>
          <My.TripList>
            {arr.map((el, index) => (
              <>
                <My.CardWrapper key={index}>
                  <My.Wrapper>
                    {index === 2 && (
                      <My.Mark>
                        <img
                          src="/img/icon-body-marker.svg"
                          alt="공유한 여행"
                        />
                      </My.Mark>
                    )}
                    <My.EditWrap>
                      <img
                        src="/img/icon-body-edit.svg"
                        alt="여행이미지 수정"
                      />
                    </My.EditWrap>
                    <My.Image>
                      <img
                        src={`/img/trips/user/trip-img${index + 1}.jpg`}
                        alt="여행이미지"
                      />
                    </My.Image>
                    <My.Text>
                      <My.Title>엄마와 함께한 제주도여행</My.Title>
                      <My.Subtitle>
                        <My.Date>22.02.03 ~ 22.02.04</My.Date>
                        <My.Region>| 전라남도 전주</My.Region>
                      </My.Subtitle>
                    </My.Text>
                  </My.Wrapper>
                </My.CardWrapper>
              </>
            ))}
          </My.TripList>
          <OutlinedButton01
            content="더보기"
            size="small"
            onClick={props.onClickMore}
          />
        </>
      ) : (
        <>
          <Non.Text>
            지금까지{" "}
            <span style={{ fontWeight: 700, color: "#58BD97" }}>16,930개</span>
            의 여행이
            <br />
            기록되었어요
          </Non.Text>
          <Non.RowContainer>
            <Non.Row1>
              {Array.map((el) => (
                <Non.Image key={el}>
                  <img
                    src={`/img/trips/notUser/trip-img${el}.png`}
                    alt="여행 이미지"
                  />
                </Non.Image>
              ))}
            </Non.Row1>
          </Non.RowContainer>
          <OutlinedButton01
            content="우리의 여행 보러가기"
            size="large"
            onClick={props.onClickMoveToOurTrip}
          />
        </>
      )}
    </My.List>
  );
}
