import TripWriteBanner from "../banner/TripWritebanner.container";
import TripWriteNavigation from "../navigation/TripWriteNavigation.container";
import * as Write from "./TripWritePlans.styles";

export default function TripWritePlansUI() {
  return (
    <Write.Container>
      <TripWriteBanner />
      <TripWriteNavigation />
      <Write.Contents></Write.Contents>
    </Write.Container>
  );
}
