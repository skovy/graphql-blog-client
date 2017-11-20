import styled from "styled-components";

import { config } from "config";

const Alert = styled.div`
  background-color: ${config.colors.brand};
  color: ${config.colors.lightest};
  border-radius: ${config.sizings.xs};
  padding: ${config.sizings.base};
  font-family: ${config.fonts.secondary};
  font-size: ${config.sizings.base};
  box-shadow: ${config.general.boxShadow};
  margin: 0 0 ${config.sizings.lg};
  font-weight: bold;
`;

export { Alert };
