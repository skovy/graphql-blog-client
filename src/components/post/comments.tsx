import * as React from "react";
import styled from "styled-components";

import { Comment } from "components/comment";
import { config } from "config";
import { PostType } from "types";

interface Props {
  className?: string;
  post: PostType;
}

class PostCommentsBase extends React.Component<Props> {
  public render() {
    const { className, post: { comments } } = this.props;

    return (
      <div className={className}>
        {comments.map((comment) => <Comment comment={comment} key={comment.id} />)}
      </div>
    );
  }
}

const PostComments = styled(PostCommentsBase)`
  margin: ${config.sizings.lg} 0;
`;

export { PostComments };
