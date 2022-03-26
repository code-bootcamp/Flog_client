import styled from "@emotion/styled";
import MyTripBanner from "../../src/components/units/myTrip/banner/MyTripBanner.container";
import MyTripList from "../../src/components/units/myTrip/list/MyTripList.container";

const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function MyTripsPage() {
  return (
    <BodyContainer>
      <MyTripBanner userInfo={false} />
      <MyTripList isMine={true} userInfo={false} />
    </BodyContainer>
  );
}
