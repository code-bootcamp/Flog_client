import TripWritePlansAddUI from "./TripWritePlansAdd.presenter";
import { ITripWritePlansCardProps } from "./TripWritePlansAdd.queries";

export default function TripWritePlansAdd(props: ITripWritePlansCardProps) {
  return <TripWritePlansAddUI onClick={props.onClick} />;
}
