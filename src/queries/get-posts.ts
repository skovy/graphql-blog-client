import gql from "graphql-tag";

const getPosts = gql`
  query {
    posts {
      id
      createdAt
      text
      title
      author {
        id
        name
      }
    }
  }
`;

export { getPosts };
