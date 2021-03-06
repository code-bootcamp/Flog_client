import { MouseEventHandler } from "react";
import { MOBILE_NAVIGATION_MENUS } from "../Menus";
import * as Mobile from "./LayoutMobileNavigation.styles";

interface ILayoutMobileNavigationUIProps {
  router: any;
  onClickButton: (
    el: string
  ) => MouseEventHandler<HTMLButtonElement> | undefined;
}
export default function LayoutMobileNavigationUI(
  props: ILayoutMobileNavigationUIProps
) {
  return (
    <Mobile.Container>
      <Mobile.NavigationList>
        {MOBILE_NAVIGATION_MENUS.map((el) => (
          <Mobile.Item key={el.title}>
            <Mobile.Button onClick={props.onClickButton(el.url)}>
              <Mobile.IconBox>
                <Mobile.Icon>
                  {props.router.asPath.includes(el.url) ? (
                    <img src={el.iconUnActive} />
                  ) : (
                    <img src={el.iconActive} />
                  )}
                </Mobile.Icon>
              </Mobile.IconBox>
              <Mobile.TextBox>
                <span>{el.title}</span>
              </Mobile.TextBox>
            </Mobile.Button>
          </Mobile.Item>
        ))}
      </Mobile.NavigationList>
    </Mobile.Container>
  );
}
