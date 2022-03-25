import { Dispatch, SetStateAction } from "react";

export interface IMyDatePickerProps {
  setIsButtonActive: Dispatch<SetStateAction<boolean>>;
  setIsDateActive: Dispatch<SetStateAction<boolean>>;
  title: string;
  people: string;
  theme: string;
  isDateActive: boolean;
}
