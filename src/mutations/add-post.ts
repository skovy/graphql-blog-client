import gql from "graphql-tag";

import { fragments } from "fragments";

const addPost = gql`
  mutation AddPost($title: String!, $text: String!, $user_id: ID!) {
    addPost(input: { title: $title, text: $text, user_id: $user_id }) {
      post {
        ...PostsShowPost
      }
    }
  }
  ${fragments.postsShowPost}
`;

export { addPost };
