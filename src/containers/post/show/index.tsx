import * as React from "react";
import { ChildProps, graphql } from "react-apollo";

import { Container } from "components/container";
import { PageTitle } from "components/page-title";
import { PostComments } from "components/post/comments";
import { PostDescription } from "components/post/description";
import { PostMetadata } from "components/post/metadata";
import { queries } from "queries";
import { RouteComponentProps } from "react-router-dom";
import { PostType } from "types";

// The result on the data prop from the GraphQL query
interface Result {
  post: PostType;
}

// The entire data prop from the GraphQL query and the props from the router
type Props = ChildProps<RouteComponentProps<{ id: number }>, Result>;

class PostShowBase extends React.Component<Props> {
  public render() {
    return (
      <Container>
        {this.renderContent()}
      </Container>
    );
  }

  private renderContent(): JSX.Element {
    const { data } = this.props;

    if (data && data.loading) {
      return <div>Loading</div>;
    } else if (data && data.error) {
      return <div>{data.error}</div>;
    } else if (data && !data.post) {
      return <div>Post not found.</div>;
    } else if (data && data.post) {
      return (
        <div>
          <PageTitle>
            {data.post.title}
          </PageTitle>
          <PostDescription post={data.post} />
          <PostMetadata post={data.post} />
          <PostComments post={data.post} />
        </div>
      );
    } else {
      return <div />;
    }
  }
}

const PostShow = graphql<Result, RouteComponentProps<{ id: number }>>(
  queries.getPost,
  { options: (props) => ({ variables: { id: props.match.params.id } }) }
)(PostShowBase);

export { PostShow };
