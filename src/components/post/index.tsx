import * as moment from "moment";
import * as React from "react";
import styled from "styled-components";

import { Link } from "components/link";
import * as config from "config";
import { Post as PostType } from "types";

const PostTitle = styled.h3`
  font-family: ${config.fonts.primary};
  font-size: ${config.sizings.lg};
  margin: 0 0 ${config.sizings.sm};
`;

const PostDesription = styled.p`
  font-size: ${config.sizings.base};
  margin: 0 0 ${config.sizings.xl};
`;

const PostMetadata = styled.p`
  font-size: ${config.sizings.base};
  margin: 0 0 ${config.sizings.sm};
  text-transform: uppercase;
  font-weight: ${config.weights.light};
`;

interface Props {
  post: PostType;
}

class Post extends React.Component<Props> {
  public render() {
    const { post } = this.props;

    return (
      <div>
        <PostMetadata>
          Posted By {post.author && post.author.name} {moment.utc(post.createdAt, "YYYY-MM-DD H:m:s Z").fromNow()}
        </PostMetadata>
        <PostTitle>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </PostTitle>
        <PostDesription>
          {post.text}
        </PostDesription>
      </div>
    );
  }
}

export { Post };
