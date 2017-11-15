import * as moment from "moment";
import * as React from "react";
import styled from "styled-components";

import { config } from "config";
import { PostType } from "types";

interface Props {
  className?: string;
  post: PostType;
}

class PostAuthorBase extends React.Component<Props> {
  public render() {
    const { className, post: { author, createdAt } } = this.props;
    return (
      <div className={className}>
        Posted By {author && author.name} {moment.utc(createdAt, "YYYY-MM-DD H:m:s Z").fromNow()}
      </div>
    );
  }
}

const PostAuthor = styled(PostAuthorBase)`
  font-size: ${config.sizings.base};
  margin: 0 0 ${config.sizings.sm};
  text-transform: uppercase;
  font-weight: ${config.weights.light};
`;

export { PostAuthor };
