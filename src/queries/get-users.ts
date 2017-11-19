import gql from "graphql-tag";

const getUsers = gql`
  query {
    users {
      id
      name
    }
  }
`;

export { getUsers };
