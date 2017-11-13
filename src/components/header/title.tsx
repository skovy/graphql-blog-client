import styled from "styled-components";

import * as config from "config";

// A title for the header of the blog
const HeaderTitle = styled.h1`
  font-family: ${config.fonts.primary};
  font-size: ${config.sizings.lg};
  margin: 0 0 ${config.sizings.lg};
  padding: 0;
`;

export { HeaderTitle };
