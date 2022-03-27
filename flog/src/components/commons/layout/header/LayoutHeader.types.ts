export interface ILayoutHeaderUIProps {
  onClickLogo: () => void;
  onClickHamburgerBtn: () => void;
  onClickMoveToHamburger: (url: string) => () => void;
  isActive: boolean;
  isLogIn: boolean;
}
