import gql from "graphql-tag";

import { fragments } from "fragments";

const getPostDetails = gql`
  query GetPostDetails($id: ID!) {
    post(id: $id) {
      ...PostDetails
    }
  }
  ${fragments.postDetails}
`;

export { getPostDetails };
