import * as React from "react";
import styled from "styled-components";

import * as config from "config";
import { Container } from "../container";
import { Link } from "../link";

const Topbar = styled.div`
  border-top: ${config.sizings.sm} solid ${config.colors.brand};
  margin-bottom: ${config.sizings.base};
`;

const Title = styled.h1`
  font-family: ${config.fonts.primary};
  font-size: ${config.sizings.xl};
  margin: 0 0 ${config.sizings.lg};
  padding: 0;
`;

class Header extends React.Component<{}> {
  public render() {
    return (
      <div>
        <Topbar />
        <Container>
          <Title>
            <Link to="/">
              blog
            </Link>
          </Title>
        </Container>
      </div>
    );
  }
}

export { Header };
