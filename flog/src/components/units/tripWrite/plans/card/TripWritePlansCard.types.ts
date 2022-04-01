import { SetStateAction } from "react";

export interface ITripWritePlansCardProps {
  content: never[][];
  day: number | string;
  date: string;
}

export interface ITripWritePlansCardUIProps {
  content: never[][];
  detailScheduleFormModal: SetStateAction<boolean>;
  onClickDetailScheduleFormModal: () => void;
  onClickExitDetailScheduleFormModal: () => void;
  onClickSubmitDetailScheduleFormModal: (data: any) => Promise<void>;
}
