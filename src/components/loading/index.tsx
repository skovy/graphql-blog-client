import * as React from "react";
import styled from "styled-components";

import { config } from "config";

interface Props {
  className?: string;
  text?: string;
}

class LoadingBase extends React.Component<Props> {
  public render() {
    const { className, text } = this.props;

    return (
      <div className={className}>
        <i className="fa fa-circle-o-notch fa-spin" /> {text || "Loading..."}
      </div>
    );
  }
}

const Loading = styled(LoadingBase)`
  text-align: center;
  padding: ${config.sizings.lg};
`;

export { Loading };
