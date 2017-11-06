import * as React from 'react'
import gql from 'graphql-tag'
import { graphql, ChildProps } from 'react-apollo';

import { Post } from 'types';

interface Response {
  posts: Post[];
}

type Props = ChildProps<{}, Response>;

class HomeBase extends React.Component<Props> {
  public render() {
    const { data } = this.props;

    if (data && data.loading) { return <div>Loading</div>; }
    if (data && data.error) { return <div>{data.error}</div> }


    return (
      <div>
        {data && data.posts && data.posts[0].title}
        Home
      </div>
    );
  }
}

const getPosts = gql`
  query {
    posts {
      id
      title
    }
  }
`;

const Home = graphql(getPosts)(HomeBase);

export default Home;
