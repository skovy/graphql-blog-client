import gql from "graphql-tag";

import { postDetails } from "./post-details";
import { postOverview } from "./post-overview";

const postsShowPost = gql`
  fragment PostsShowPost on Post {
    ...PostOverview
    ...PostDetails
  }
  ${postDetails}
  ${postOverview}
`;

export { postsShowPost };
