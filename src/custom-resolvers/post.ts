import { toIdValue } from "apollo-client";
import { CustomResolver } from "apollo-client/data/readFromStore";

import { dataIdFromObject } from "utils";

const post: CustomResolver =  (_, { id }) => toIdValue(dataIdFromObject({ __typename: "Post", id }));

export { post };
