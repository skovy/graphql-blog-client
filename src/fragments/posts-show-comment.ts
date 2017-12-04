import gql from "graphql-tag";

const postsShowComment = gql`
  fragment PostsShowComment on Comment {
    id
    createdAt
    text
    author {
      id
      name
    }
  }
`;

export { postsShowComment };
