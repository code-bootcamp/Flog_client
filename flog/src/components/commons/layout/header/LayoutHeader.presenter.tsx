import Link from "next/link";
import Alert from "../../modals/alert/Alert.container";
import { NAVIGATION_MENUS } from "../Menus";
import * as Header from "./LayoutHeader.styles";
import { ILayoutHeaderUIProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderUIProps) {
  return (
    <Header.Container>
      <Header.InnerWrap>
        <Header.Logo onClick={props.moveToPage("/main")}>
          <h1>Flog</h1>
        </Header.Logo>
        <Header.MenuBar>
          <Header.Navigation>
            <ul>
              {NAVIGATION_MENUS.map((el) => (
                <li key={el.title}>
                  <Link href={{ pathname: el.url }} passHref>
                    <span>{el.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Header.Navigation>
          <Header.Hamburger>
            <Header.HamburgerBtn onClick={props.onClickHamburgerBtn}>
              <Header.HamburgerBtnLeft>
                <img src={"/img/icon-header-user.png"} alt="유저 아이콘" />
              </Header.HamburgerBtnLeft>
              <Header.HamburgerBtnRight>
                <img
                  src={"/img/icon-header-hbg.png"}
                  alt="햄버거 메뉴 열기 버튼"
                />
              </Header.HamburgerBtnRight>
            </Header.HamburgerBtn>
            {props.isActive && (
              <Header.HamburgerMenu>
                {props.accessToken ? (
                  <ul>
                    <li>
                      <span onClick={props.moveToPage("/mypage")}>
                        마이페이지
                      </span>
                    </li>
                    <li>
                      <span onClick={props.onClickLogout}>로그아웃</span>
                    </li>
                  </ul>
                ) : (
                  <ul>
                    <li>
                      <span onClick={props.moveToPage("/login")}>로그인</span>
                    </li>
                  </ul>
                )}
              </Header.HamburgerMenu>
            )}
          </Header.Hamburger>
        </Header.MenuBar>
      </Header.InnerWrap>
      {props.alertModal && (
        <Alert
          onClickExit={props.onClickExitAlertModal}
          onClickSubmit={props.onClickSubmitAlertModal}
          contents={props.modalContents}
        />
      )}
    </Header.Container>
  );
}
