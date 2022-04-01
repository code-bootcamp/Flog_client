import { Dispatch, SetStateAction } from "react";
// interface IInputs {
//   title: string;
//   theme: string;
//   people: string;
//   startDate: Date | null | undefined;
//   endDate: Date | null | undefined;
//   doName: string;
//   cityName: string;
// }

export interface IMyDatePickerProps {
  inputs?: any;
  setInputs?: any;
  setIsButtonActive: Dispatch<SetStateAction<boolean>>;
  setIsDateActive: Dispatch<SetStateAction<boolean>>;
  title: string;
  people: string;
  theme: string;
  isDateActive: boolean;
}
