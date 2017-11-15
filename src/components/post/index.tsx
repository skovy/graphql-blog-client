import * as React from "react";

import { PostType } from "types";
import { PostAuthor } from "./author";
import { PostDescription } from "./description";
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
        <PostDescription post={post} />
      </div>
    );
  }
}

export { Post };
