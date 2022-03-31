import { ChangeEvent, SetStateAction } from "react";

export interface ILayoutFooterProps {
  viewport: SetStateAction<number>;
}

export interface ILayoutFooterUIProps {
  onClickSiteMap: (url: string) => () => void;
  onChangeNewsletterInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickNewsletterSubmit: () => void;
  email: string;
  viewport: SetStateAction<number>;
  alertModal: boolean;
  modalContents: string;
  onClickAlertModal: () => void;
  onClickExitAlertModal: () => void;
  onClickSubmitAlertModal: () => void;
}
