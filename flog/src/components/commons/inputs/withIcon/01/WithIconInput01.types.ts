import { ChangeEvent } from "react";

export interface IWithIconInput01Props {
  placeholder: string;
  type: string;
  register?: unknown;
  id?: string;
  iconUrl: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IWithIconInput01UIprops {
  placeholder: string;
  type: string;
  register?: unknown;
  id?: string;
  iconUrl: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
