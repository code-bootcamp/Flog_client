import ContainedButton01UI from "./ContainedButton01.presenter";
import { IContainedButton01Props } from "./ContainedButton01.types";

export default function ContainedButton01(props: IContainedButton01Props) {
  return (
    <ContainedButton01UI
      content={props.content}
      size={props.size}
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.type}
    />
  );
}
