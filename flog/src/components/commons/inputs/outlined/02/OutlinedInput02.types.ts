import { ChangeEvent } from "react";

export interface IOutlinedInput01Props {
  placeholder: string;
  type: string;
  register?: unknown;
  id?: string;
  disabled?: boolean;
  error?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  readOnly?: boolean;
}
export interface IInputProps {
  error?: boolean;
}
