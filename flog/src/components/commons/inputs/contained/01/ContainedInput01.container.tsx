import { Input01 } from "./ContainedInput01.styles";
import { IContainedInput01Props } from "./ContainedInput01.types";
export default function ContainedInput01(props: IContainedInput01Props) {
  return (
    <Input01
      placeholder={props.placeholder}
      id={props.id}
      type={props.type}
      {...props.register}
      autoFocus
      disabled={props.disabled}
      error={props.error}
      onChange={props.onChange}
      value={props.value}
      readOnly={props.readOnly}
    />
  );
}
