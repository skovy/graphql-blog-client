import * as React from "react";
import { ChildProps, graphql } from "react-apollo";

import { Container } from "components/container";
import { Loading } from "components/loading";
import { PageTitle } from "components/page-title";
import { Post } from "components/post";
import { queries } from "queries";
import { PostType } from "types";

interface Result {
  posts: PostType[];
}

type Props = ChildProps<{}, Result>;

class HomeBase extends React.Component<Props> {
  public render() {
    return (
      <Container>
        <PageTitle>
          long-winded thoughts on things, objects, stuff, information and more.
        </PageTitle>
        {this.renderContent()}
      </Container>
    );
  }

  private renderContent(): JSX.Element {
    const { data } = this.props;

    if (data && data.loading) {
      return <Loading text="Loading posts..." />;
    } else if (data && data.error) {
      return <div>{data.error}</div>;
    } else if (data && data.posts && !data.posts.length) {
      return <div>No Posts.</div>;
    } else if (data && data.posts && data.posts.length) {
      return <div>{data.posts.map((post) => <Post post={post} key={post.id} />)}</div>;
    } else {
      return <div />;
    }
  }
}

const Home = graphql<Result, {}>(queries.getPosts)(HomeBase);

export { Home };
