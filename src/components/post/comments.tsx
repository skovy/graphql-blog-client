import * as React from "react";
import styled from "styled-components";

import { Comment } from "components/comment";
import { config } from "config";
import { PostType } from "types";

interface Props {
  className?: string;
  post: Partial<PostType>;
}

class PostCommentsBase extends React.Component<Props> {
  public render() {
    const { className, post } = this.props;

    if (!post || !post.comments) {
      return (
        <span>
          <i className="fa fa-circle-o-notch fa-spin" /> Loading comments...
        </span>
      );
    }

    return (
      <div className={className}>
        {post.comments.map((comment) => <Comment comment={comment} key={comment.id} />)}
      </div>
    );
  }
}

const PostComments = styled(PostCommentsBase)`
  margin: ${config.sizings.lg} 0;
`;

export { PostComments };
