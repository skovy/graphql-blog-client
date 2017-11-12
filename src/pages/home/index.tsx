import gql from "graphql-tag";
import * as React from "react";
import { ChildProps, graphql } from "react-apollo";

import Container from "components/container";
import Post from "components/post";
import { Post as PostType } from "types";

interface Result {
  posts: PostType[];
}

type Props = ChildProps<{}, Result>;

class HomeBase extends React.Component<Props> {
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
    } else if (data && data.posts && !data.posts.length) {
      return <div>No Posts.</div>;
    } else if (data && data.posts && data.posts.length) {
      return <div>{data.posts.map((post) => <Post post={post} key={post.id} />)}</div>;
    } else {
      return <div />;
    }
  }
}

const getPosts = gql`
  query {
    posts {
      id
      createdAt
      text
      title
      author {
        name
      }
    }
  }
`;

const Home = graphql<Result, {}>(getPosts)(HomeBase);

export default Home;
