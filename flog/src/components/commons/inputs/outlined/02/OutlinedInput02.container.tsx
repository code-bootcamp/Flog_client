import { Input02 } from "./OutlinedInput02.styles";
import { IOutlinedInput01Props } from "./OutlinedInput02.types";
export default function OutlinedInput01(props: IOutlinedInput01Props) {
  return (
    <Input02
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
