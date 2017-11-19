import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

import { config } from "config";

const Link = styled(RouterLink)`
  color: ${config.colors.dark};
  text-decoration: none;

  &:hover {
    color: ${config.colors.brand};
  }
`;

export { Link };
