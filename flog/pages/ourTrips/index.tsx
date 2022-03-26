import styled from "@emotion/styled";
import OurTripBanner from "../../src/components/units/ourTrip/banner/OurTripBanner.container";
import TripList from "../../src/components/units/tripList/TripList.container";

export default function OurTripsPage() {
  const BodyContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  return (
    <BodyContainer>
      <OurTripBanner />
      <TripList isMine={false} />
    </BodyContainer>
  );
}
