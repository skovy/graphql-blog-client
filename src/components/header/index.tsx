import * as React from "react";

import { config } from "config";
import styled from "styled-components";
import { Container } from "../container";
import { HeaderTitle } from "./title";
import { HeaderTopbar } from "./topbar";
import { Write } from "./write";

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 ${config.sizings.lg};
`;

class Header extends React.Component {
  public render() {
    return (
      <div>
        <HeaderTopbar />
        <Container>
          <Links>
            <HeaderTitle />
            <Write />
          </Links>
        </Container>
      </div>
    );
  }
}

export { Header };
