import gql from "graphql-tag";

const getUsers = gql`
  query GetUsers {
    users {
      id
      name
    }
  }
`;

export { getUsers };
