import * as React from "react";
import styled from "styled-components";

import { Comment } from "components/comment";
import { Loading } from "components/loading";
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
      return <Loading text="Loading comments..." />;
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
