import gql from "graphql-tag";

// TODO: use a fragment
const addPost = gql`
  mutation AddPost($title: String!, $text: String!, $user_id: ID!) {
    addPost(input: { title: $title, text: $text, user_id: $user_id }) {
      post {
        id
        createdAt
        text
        title
        errors
        author {
          name
        }
        comments {
          id
          createdAt
          text
          author {
            id
            name
          }
        }
      }
    }
  }
`;

export { addPost };
