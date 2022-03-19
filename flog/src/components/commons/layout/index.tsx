import styled from "@emotion/styled";
import { ReactChild } from "react";
import LayoutHeader from "./header/LayoutHeader.container";

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
  return (
    <Container>
      <LayoutHeader />
      <Body>{props.children}</Body>
    </Container>
  );
}
