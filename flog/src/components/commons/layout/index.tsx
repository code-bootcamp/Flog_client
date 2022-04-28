import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactChild, SetStateAction, useEffect, useState } from "react";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutMobileNavigation from "./mobileNavigation/LayoutMobileNavigation.container";

interface ILayoutProps {
  children: ReactChild;
}

const Container = styled.div`
  width: 100%;
  height: auto;
`;
const Body = styled.section`
  width: 100%;
  height: auto;
`;

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const [viewport, setViewport] = useState<SetStateAction<number>>(0);
  useEffect(() => {
    const viewportWidth = window.visualViewport.width;
    setViewport(viewportWidth);
  }, []);

  const NONE_FOOTER_PATHS = [
    "/login",
    `/myTrips/[scheduleId]/plans`,
    `/myTrips/[scheduleId]/money`,
    `/myTrips/[scheduleId]/log`,
    "/signUp",
  ];
  const NONE_MOBILE_NAVI_PATHS = ["/login", "/signUp"];

  return (
    <Container>
      <LayoutHeader />
      <Body>{props.children}</Body>
      {!NONE_FOOTER_PATHS.includes(router.pathname) && (
        <LayoutFooter viewport={viewport} />
      )}
      {viewport <= 767 && !NONE_MOBILE_NAVI_PATHS.includes(router.pathname) && (
        <LayoutMobileNavigation />
      )}
    </Container>
  );
}
