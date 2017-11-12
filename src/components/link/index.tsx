import * as React from "react";
import styled from "styled-components";

import * as config from "config";
import { Link as RouterLink } from "react-router-dom";

const Link = styled(RouterLink)`
  color: ${config.colors.dark};
  text-decoration: none;

  &:hover {
    color: ${config.colors.brand};
    text-decoration: underline;
  }
`;

export { Link };
