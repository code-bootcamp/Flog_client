export interface ILayoutHeaderUIProps {
  moveToPage: (page: string) => () => void;
  onClickHamburgerBtn: () => void;
  onClickLogout: () => void;
  accessToken: string | undefined;
  isActive: boolean;
  onClickExitAlertModal: () => void;
  onClickSubmitAlertModal: () => void;
  alertModal: boolean;
  modalContents: string;
  hbgMenuRef: any;
  router: any;
}
