import * as React from "react";
import styled from "styled-components";

import * as config from "config";

const Container = styled.div`
  max-width: ${config.general.maxWidth};
  margin: 0 auto;
`;

export { Container };
