import * as moment from "moment";
import * as React from "react";
import styled from "styled-components";

import { config } from "config";
import { CommentType } from "types";

interface Props {
  className?: string;
  comment: CommentType;
}

class CommentBase extends React.Component<Props> {
  public render() {
    const { className, comment: { createdAt, text } } = this.props;

    return (
      <div className={className}>
        {text}

        {moment.utc(createdAt, "YYYY-MM-DD H:m:s Z").fromNow()}
      </div>
    );
  }
}

const Comment = styled(CommentBase)`
  padding: ${config.sizings.base};
  border-radius: ${config.sizings.xs};
  box-shadow: ${config.general.boxShadow};
  color: ${config.colors.dark};
  background-color: ${config.colors.light};

  & + & {
    margin-top: ${config.sizings.lg}
  }
`;

export { Comment };
