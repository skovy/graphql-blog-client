import * as React from "react";
import styled from "styled-components";

import { Link } from "components/link";
import { config } from "config";
import { PostType } from "types";

interface Props {
  className?: string;
  post: PostType;
}

class PostTitleBase extends React.Component<Props> {
  public render() {
    const { className, post: { id, title } } = this.props;

    return (
      <h3 className={className}>
        <Link to={`/posts/${id}`}>
          {title}
        </Link>
      </h3>
    );
  }
}

const PostTitle = styled(PostTitleBase)`
  font-family: ${config.fonts.primary};
  font-size: ${config.sizings.lg};
  margin: 0 0 ${config.sizings.sm};
`;

export { PostTitle };
