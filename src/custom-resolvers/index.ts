import { post } from "./post";

const customResolvers = {
  Query: {
    post
  }
};

export { customResolvers };
