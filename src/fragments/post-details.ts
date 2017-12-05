import gql from "graphql-tag";

import { postsShowComment } from "./posts-show-comment";

// The details of a single post. This is useful when most of the metadata has
// already been loaded
const postDetails = gql`
  fragment PostDetails on Post {
    id
    errors
    comments {
      ...PostsShowComment
    }
  }
  ${postsShowComment}
`;

export { postDetails };
