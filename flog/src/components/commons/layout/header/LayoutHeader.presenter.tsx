import Link from "next/link";
import { HAMBURGER_MENUS, NAVIGATION_MENUS } from "../Menus";
import * as Header from "./LayoutHeader.styles";

export default function LayoutHeaderUI() {
  return (
    <Header.Container>
      <Header.InnerWrap>
        <Header.Logo>
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
            <Header.HamburgerBtn>
              <Header.HamburgerBtnLeft>
                <img src={"/img/icon-header-user.png"} alt="" />
              </Header.HamburgerBtnLeft>
              <Header.HamburgerBtnRight>
                <img src={"/img/icon-header-hbg.png"} alt="" />
              </Header.HamburgerBtnRight>
            </Header.HamburgerBtn>
            <Header.HamburgerMenu>
              <ul>
                {HAMBURGER_MENUS.map((el) => (
                  <li key={el.title}>
                    <span>{el.title}</span>
                  </li>
                ))}
              </ul>
            </Header.HamburgerMenu>
          </Header.Hamburger>
        </Header.MenuBar>
      </Header.InnerWrap>
    </Header.Container>
  );
}
