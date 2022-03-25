import { ChangeEventHandler } from "react";

export interface ITotalBudget {
  budgetSelect: boolean | undefined;
  onChangeTotalBudget: ChangeEventHandler<HTMLSelectElement> | undefined;
  onClickExit: () => void;
  onClickSubmit: () => void;
}
