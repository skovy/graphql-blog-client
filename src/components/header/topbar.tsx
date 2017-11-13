import * as React from "react";
import styled from "styled-components";

import * as config from "config";

// A topbar for the header to display the brand theme color
const HeaderTopbar = styled.div`
  border-top: ${config.sizings.sm} solid ${config.colors.brand};
  margin-bottom: ${config.sizings.base};
`;

export { HeaderTopbar };
