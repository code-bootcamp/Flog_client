import styled from "@emotion/styled";
import SvgMap from "../../src/components/units/maps/Maps.container";
const Cotainer = styled.div`
  display: flex;
  justify-content: center;
`;
export default function Map() {
  return (
    <Cotainer>
      <SvgMap />
    </Cotainer>
  );
}
