import WithIconInput01UI from "./WithIconInput01.presenter";
import { IWithIconInput01Props } from "./WithIconInput01.types";

export default function WithIconInput01(props: IWithIconInput01Props) {
  return (
    <WithIconInput01UI
      placeholder={props.placeholder}
      id={props.id}
      type={props.type}
      {...props.register}
      iconUrl={props.iconUrl}
      value={props.value}
      onChange={props.onChange}
    />
  );
}
