import TripWritePlansAddUI from "./TripWritePlansAdd.presenter";
import { ITripWritePlansCardProps } from "./TripWritePlansAdd.types";

export default function TripWritePlansAdd(props: ITripWritePlansCardProps) {
  return <TripWritePlansAddUI onClick={props.onClick} />;
}
