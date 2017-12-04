import gql from "graphql-tag";

import { fragments } from "fragments";

const addComment = gql`
  mutation AddComment($text: String!, $user_id: ID!, $post_id: ID!) {
    addComment(input: { text: $text, user_id: $user_id, post_id: $post_id }) {
      comment {
        ...PostsShowComment
        errors
      }
    }
  }
  ${fragments.postsShowComment}
`;

export { addComment };
