import * as React from "react";
import styled from "styled-components";

import * as config from "config";
import Container from "../container";

const Topbar = styled.div`
  border-top: ${config.sizings.sm} solid ${config.colors.brand};
  margin-bottom: ${config.sizings.base};
`;

const Title = styled.h1`
  font-size: ${config.sizings.xl};
  margin: 0 0 ${config.sizings.lg};
  padding: 0;
`;

const Description = styled.h2`
  font-size: ${config.sizings.lg};
  color: ${config.colors.brand};
  border-left: ${config.sizings.sm} solid ${config.colors.brand};
  margin: 0;
  padding: 0 0 0 ${config.sizings.base};
`;

class Header extends React.Component<{}> {
  public render() {
    return (
      <div>
        <Topbar />
        <Container>
          <Title>
            Blog
          </Title>
          <Description>
            Long-winded thoughts on things, objects, stuff and information.
          </Description>
        </Container>
      </div>
    );
  }
}

export default Header;
