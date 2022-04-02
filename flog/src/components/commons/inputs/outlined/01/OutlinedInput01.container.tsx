import { Input01 } from "./OutlinedInput01.styles";
import { IOutlinedInput01Props } from "./OutlinedInput01.types";
export default function OutlinedInput01(props: IOutlinedInput01Props) {
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
      version={props.version}
      defaultValue={props.defaultValue}
    />
  );
}
