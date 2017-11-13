import * as React from "react";

import { Container } from "../container";
import { Link } from "../link";
import { HeaderTitle } from "./title";
import { HeaderTopbar } from "./topbar";

// The header of the entire blog
class Header extends React.Component {
  public render() {
    return (
      <div>
        <HeaderTopbar />
        <Container>
          <HeaderTitle>
            <Link to="/">
              myblog
            </Link>
          </HeaderTitle>
        </Container>
      </div>
    );
  }
}

export { Header };
