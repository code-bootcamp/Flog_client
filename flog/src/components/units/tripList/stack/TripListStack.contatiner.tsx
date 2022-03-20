import * as T from "./TripListStack.styles";

const arr = [0, 0, 0, 0, 0, 0];

export default function TripListStack() {
  return (
    <T.TripList>
      {arr.map((el, index) => (
        <>
          <T.CardWrapper key={index}>
            <T.Wrapper>
              {index === 2 && (
                <T.Mark>
                  <img
                    src="/images/tripList/marker.svg"
                    alt="공유한 여행 표시"
                  />
                </T.Mark>
              )}
              <T.Image>
                <img
                  src="https://images.unsplash.com/photo-1579169558076-260989da7cc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="여행이미지"
                />
              </T.Image>
              <T.Text>
                <T.Title>엄마랑 1박2일 제주도여행</T.Title>
                <T.Date>2022.02.03-2022.02.04</T.Date>
              </T.Text>
            </T.Wrapper>
          </T.CardWrapper>
          {index === 2 && <br></br>}
        </>
      ))}
    </T.TripList>
  );
}
