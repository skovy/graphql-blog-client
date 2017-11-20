import gql from "graphql-tag";

// TODO: use a fragment
const addComment = gql`
  mutation AddComment($text: String!, $user_id: ID!, $post_id: ID!) {
    addComment(input: { text: $text, user_id: $user_id, post_id: $post_id }) {
      comment {
        id
        createdAt
        text
        errors
        author {
          id
          name
        }
      }
    }
  }
`;

export { addComment };
