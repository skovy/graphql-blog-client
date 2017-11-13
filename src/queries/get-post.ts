import gql from "graphql-tag";

const getPost = gql`
  query GetPost($id: ID!) {
    post(id: $id) {
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

export { getPost };
