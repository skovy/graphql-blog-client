import styled from "styled-components";

import { config } from "config";

const Button = styled.button`
  background-color: ${config.colors.brand};
  color: ${config.colors.lightest};
  border-radius: ${config.sizings.xs};
  padding: ${config.sizings.sm} ${config.sizings.base};
  font-family: ${config.fonts.primary};
  font-size: ${config.sizings.base};
  border: 0;
  margin: 0;

  & + & {
    margin-left: ${config.sizings.sm};
  }

  &:hover,
  &:focus {
    outline: none;
  }
`;

export { Button };
