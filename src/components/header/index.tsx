import * as React from "react";
import styled from "styled-components";

import * as config from "config";
import Container from "../container";

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

const Description = styled.h2`
  font-family: ${config.fonts.primary};
  font-size: ${config.sizings.lg};
  color: ${config.colors.brand};
  border-left: ${config.sizings.sm} solid ${config.colors.brand};
  margin: 0 0 ${config.sizings.lg};
  padding: 0 0 0 ${config.sizings.base};
  font-weight: ${config.weights.light};
`;

class Header extends React.Component<{}> {
  public render() {
    return (
      <div>
        <Topbar />
        <Container>
          <Title>
            blog
          </Title>
          <Description>
            long-winded thoughts on things, objects, stuff, information and more.
          </Description>
        </Container>
      </div>
    );
  }
}

export default Header;
