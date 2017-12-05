import * as React from "react";
import { compose, graphql, QueryProps } from "react-apollo";

import { Container } from "components/container";
import { PageTitle } from "components/page-title";
import { PostComments } from "components/post/comments";
import { PostMetadata } from "components/post/metadata";
import { PostText } from "components/post/text";
import { CommentNew } from "containers/comment/new";
import { queries } from "queries";
import { RouteComponentProps } from "react-router-dom";
import { PostType } from "types";

// The props from the router
type OwnProps = RouteComponentProps<{ id: number }>;

// The result on the data prop from the GraphQL query
interface Result {
  postOverview: {
    post: Partial<PostType>;
  } & QueryProps;
  postDetails: {
    post: Partial<PostType>;
  } & QueryProps;
}

// The entire data prop from the GraphQL query
type Props = OwnProps & Result;

class PostShowBase extends React.Component<Props> {
  public render() {
    return <Container>{this.renderContent()}</Container>;
  }

  private renderContent(): JSX.Element {
    const { postOverview, postDetails } = this.props;

    if (postOverview && postOverview.loading) {
      return <div>Loading</div>;
    } else if (postOverview && postOverview.error) {
      return <div>{postOverview.error}</div>;
    } else if (postOverview && !postOverview.post) {
      return <div>Post not found.</div>;
    } else if (postOverview && postOverview.post) {
      return (
        <div>
          <PageTitle>{postOverview.post.title}</PageTitle>
          <PostText post={postOverview.post} richText />
          <PostMetadata post={postOverview.post} />
          <PostComments post={postDetails && postDetails.post} />
          <CommentNew post={postDetails && postDetails.post} />
        </div>
      );
    } else {
      return <div />;
    }
  }
}

const options = (props: OwnProps) => ({
  variables: { id: props.match.params.id }
});

const PostShow = compose(
  graphql<Result, OwnProps>(queries.getPostOverview, {
    options,
    name: "postOverview"
  }),
  graphql<Result, OwnProps>(queries.getPostDetails, {
    options,
    name: "postDetails"
  })
)(PostShowBase);

export { PostShow };
