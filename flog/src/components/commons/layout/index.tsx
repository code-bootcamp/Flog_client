import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactChild } from "react";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutHeader from "./header/LayoutHeader.container";

const NONE_FOOTER_PATHS = [
  "/login",
  "/myTrips/write/plans",
  "/myTrips/write/money",
  "/myTrips/write/log",
];

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
  return (
    <Container>
      <LayoutHeader />
      <Body>{props.children}</Body>
      {!NONE_FOOTER_PATHS.includes(router.asPath) && <LayoutFooter />}
    </Container>
  );
}
