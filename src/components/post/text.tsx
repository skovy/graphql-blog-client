import * as React from "react";
import styled from "styled-components";

import { config } from "config";
import { PostType } from "types";

interface Props {
  className?: string;
  truncated?: boolean;
  post: PostType;
}

class PostTextBase extends React.Component<Props> {
  public render() {
    const { className, post: { text }, truncated } = this.props;

    return (
      <p className={className}>
        {text && truncated && text.length > 340 ? `${text.substring(0, 340)}...` : text}
      </p>
    );
  }
}

const PostText = styled(PostTextBase)`
  font-size: ${config.sizings.base};
  margin: 0 0 ${config.sizings.xl};
`;

export { PostText };
