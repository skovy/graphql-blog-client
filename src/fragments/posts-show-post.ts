import gql from "graphql-tag";

import { postsShowComment } from "./posts-show-comment";

const postsShowPost = gql`
  fragment PostsShowPost on Post {
    id
    createdAt
    text
    title
    errors
    author {
      id
      name
    }
    comments {
      ...PostsShowComment
    }
  }
  ${postsShowComment}
`;

export { postsShowPost };
