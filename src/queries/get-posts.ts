import gql from "graphql-tag";

const getPosts = gql`
  query GetPosts {
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
