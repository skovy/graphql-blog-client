import * as React from "react";
import styled from "styled-components";

import { config } from "config";
import { PostType } from "types";

interface Props {
  className?: string;
  post: PostType;
}

class PostDescriptionBase extends React.Component<Props> {
  public render() {
    const { className, post: { text } } = this.props;

    return (
      <p className={className}>
        {text}
      </p>
    );
  }
}

const PostDescription = styled(PostDescriptionBase)`
  font-size: ${config.sizings.base};
  margin: 0 0 ${config.sizings.xl};
`;

export { PostDescription };
