import { ChangeEvent } from "react";

export interface ITotalBudget {
  budgetSelect: boolean | undefined;
  onChangeTotalBudget: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickExit: () => void;
  onClickSubmit: () => void;
}
