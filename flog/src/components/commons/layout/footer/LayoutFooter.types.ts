import { ChangeEvent } from "react";

export interface ILayoutFooterUIProps {
  onClickSiteMap: (url: string) => () => void;
  onChangeNewsletterInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickNewsletterSubmit: () => void;
  email: string;
}
