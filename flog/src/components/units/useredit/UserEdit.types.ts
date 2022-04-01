import { ChangeEvent, RefObject } from "react";

export interface IUserEditUIProps {
  onClickMoveToMyPage: () => void;
  onClickFileUpload: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
  onClickSubmit: () => void;

  fileUpload: RefObject<HTMLInputElement>;
  data: any;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  inputs: {
    name?: string;
    imgUrl?: string;
    email?: string;
    password?: string;
    number1?: string;
    number2?: string;
    number3?: string;
  };
  pwdType: boolean;
  pwdToggle: () => void;
}
