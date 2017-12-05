import gql from "graphql-tag";

import { fragments } from "fragments";

const getPostOverview = gql`
  query GetPostOverview($id: ID!) {
    post(id: $id) {
      ...PostOverview
    }
  }
  ${fragments.postOverview}
`;

export { getPostOverview };
