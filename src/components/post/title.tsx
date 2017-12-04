import * as React from "react";
import { ApolloClient, withApollo } from "react-apollo";
import styled from "styled-components";

import { Link } from "components/link";
import { config } from "config";
import { queries } from "queries";
import { PostType } from "types";

interface Props {
  className?: string;
  post: PostType;
  client: ApolloClient;
}

class PostTitleBase extends React.Component<Props> {
  public render() {
    const { className, post: { id, title } } = this.props;

    return (
      <h3 className={className}>
        <Link to={`/posts/${id}`} onMouseOver={this.prefetchPost}>
          {title}
        </Link>
      </h3>
    );
  }

  // When a user hovers over a post title, it is likely they will click to read.
  // Prefetch the post so there is minimal delay for the user viewing the post.
  private prefetchPost = () => {
    const { client, post: { id } } = this.props;

    client.query({
      query: queries.getPost,
      variables: { id }
    });
  }
}

const PostTitleStyled = styled(PostTitleBase)`
  font-family: ${config.fonts.primary};
  font-size: ${config.sizings.lg};
  margin: 0 0 ${config.sizings.sm};
`;

const PostTitle = withApollo(PostTitleStyled);

export { PostTitle };
