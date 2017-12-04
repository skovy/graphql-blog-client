import gql from "graphql-tag";

import { fragments } from "fragments";

const getPost = gql`
  query GetPost($id: ID!) {
    post(id: $id) {
      ...PostsShowPost
    }
  }
  ${fragments.postsShowPost}
`;

export { getPost };
