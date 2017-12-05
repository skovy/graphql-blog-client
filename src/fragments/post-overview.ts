import gql from "graphql-tag";

// The basics for the overview of a single post. This is useful for showing
// a list of many posts, or just some quick info on a post.
const postOverview = gql`
  fragment PostOverview on Post {
    id
    createdAt
    text
    title
    author {
      id
      name
    }
  }
`;

export { postOverview };
