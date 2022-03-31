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
const Body = styled.div`
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
    `/myTrips/${router.query.scheduleId}/plans`,
    `/myTrips/${router.query.scheduleId}/money`,
    `/myTrips/${router.query.scheduleId}/log`,
  ];

  return (
    <Container>
      <LayoutHeader />
      <Body>{props.children}</Body>
      {!NONE_FOOTER_PATHS.includes(router.asPath) && (
        <LayoutFooter viewport={viewport} />
      )}
      {viewport <= 767 && <LayoutMobileNavigation />}
    </Container>
  );
}
