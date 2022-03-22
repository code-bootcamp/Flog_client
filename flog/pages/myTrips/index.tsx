import styled from "@emotion/styled";
import TripList from "../../src/components/units/tripList/TripList.container";

const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BodyInnerWrap = styled.div`
  width: 95%;
  max-width: 1200px;
`;

const NewTrip = styled.div`
  width: 100%;
  margin-bottom: 60px;
`;

const BoxWrapper = styled.div`
  /* width: 1240px; */
  height: 280px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Button = styled.div`
  margin-bottom: 15px;
`;

const Text = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #58bd97;
`;

export default function MyTripsPage() {
  return (
    <BodyContainer>
      <BodyInnerWrap>
        <NewTrip>
          <BoxWrapper>
            <ButtonWrapper>
              <Button>
                <img
                  src="/img/icon-body-new-green.png"
                  alt="새로운 여행 만들기"
                />
              </Button>
              <Text>새로운 여행 만들기</Text>
            </ButtonWrapper>
          </BoxWrapper>
        </NewTrip>
        <TripList />
      </BodyInnerWrap>
    </BodyContainer>
  );
}
