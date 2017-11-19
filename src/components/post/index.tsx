import * as React from "react";

import { PostType } from "types";
import { PostAuthor } from "./author";
import { PostText } from "./text";
import { PostTitle } from "./title";

interface Props {
  post: PostType;
}

class Post extends React.Component<Props> {
  public render() {
    const { post } = this.props;

    return (
      <div>
        <PostAuthor post={post} />
        <PostTitle post={post} />
        <PostText post={post} truncated />
      </div>
    );
  }
}

export { Post };
