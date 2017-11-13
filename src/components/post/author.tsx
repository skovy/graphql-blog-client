import styled from "styled-components";

import { config } from "config";

const PostAuthor = styled.p`
  font-size: ${config.sizings.base};
  margin: 0 0 ${config.sizings.sm};
  text-transform: uppercase;
  font-weight: ${config.weights.light};
`;

export { PostAuthor };
