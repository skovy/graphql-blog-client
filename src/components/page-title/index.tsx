import styled from "styled-components";

import { config } from "config";

const PageTitle = styled.h2`
  font-family: ${config.fonts.primary};
  font-size: ${config.sizings.lg};
  color: ${config.colors.brand};
  border-left: ${config.sizings.sm} solid ${config.colors.brand};
  margin: 0 0 ${config.sizings.xl} -${config.sizings.base};
  padding: 0 0 0 ${config.sizings.base};
  font-weight: ${config.weights.light};
`;

export { PageTitle };
