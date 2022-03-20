import styled from "@emotion/styled";
import TripListCard from "../../src/components/units/tripList/card/TripListCard.contatiner";

const NewTrip = styled.div`
  width: 100%;
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

const NewList = styled.div``;

export default function MyTripsPage() {
  return (
    <>
      <NewTrip>
        <BoxWrapper>
          <ButtonWrapper>
            <Button>
              <img
                src="/images/tripList/newTrip.svg"
                alt="새로운 여행 만들기"
              />
            </Button>
            <Text>새로운 여행 만들기</Text>
          </ButtonWrapper>
        </BoxWrapper>
      </NewTrip>
      <TripListCard />
      <NewList>
        <img src="/images/tripList/newList.svg" alt="여행리스트 더 불러오기" />
      </NewList>
    </>
  );
}
