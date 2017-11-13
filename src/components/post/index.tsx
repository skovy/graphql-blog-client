import * as moment from "moment";
import * as React from "react";

import { Link } from "components/link";
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
        <PostAuthor>
          Posted By {post.author && post.author.name} {moment.utc(post.createdAt, "YYYY-MM-DD H:m:s Z").fromNow()}
        </PostAuthor>
        <PostTitle>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </PostTitle>
        <PostDescription>
          {post.text}
        </PostDescription>
      </div>
    );
  }
}

export { Post };
