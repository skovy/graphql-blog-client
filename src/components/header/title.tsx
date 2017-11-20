import * as React from "react";
import styled from "styled-components";

import { Link } from "components/link";
import { config } from "config";

interface Props {
  className?: string;
}

class HeaderTitleBase extends React.Component<Props> {
  public render() {
    const { className } = this.props;

    return (
      <h1 className={className}>
        <Link to="/">
          GraphQLBlog
        </Link>
      </h1>
    );
  }
}

const HeaderTitle = styled(HeaderTitleBase)`
  font-family: ${config.fonts.primary};
  font-size: ${config.sizings.lg};
  padding: 0;
`;

export { HeaderTitle };
