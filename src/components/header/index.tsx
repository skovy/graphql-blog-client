import * as React from "react";

import { Container } from "../container";
import { HeaderTitle } from "./title";
import { HeaderTopbar } from "./topbar";

class Header extends React.Component {
  public render() {
    return (
      <div>
        <HeaderTopbar />
        <Container>
          <HeaderTitle />
        </Container>
      </div>
    );
  }
}

export { Header };
