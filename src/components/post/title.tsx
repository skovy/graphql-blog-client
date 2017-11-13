import styled from "styled-components";

import { config } from "config";

const PostTitle = styled.h3`
  font-family: ${config.fonts.primary};
  font-size: ${config.sizings.lg};
  margin: 0 0 ${config.sizings.sm};
`;

export { PostTitle };
