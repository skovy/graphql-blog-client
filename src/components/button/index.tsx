import styled from "styled-components";

import { config } from "config";

const Button = styled.button`
  background-color: ${config.colors.brand};
  color: ${config.colors.lightest};
  border-radius: ${config.sizings.xs};
  padding: ${config.sizings.sm} ${config.sizings.base};
  font-family: ${config.fonts.primary};
  font-size: ${config.sizings.base};
  box-shadow: ${config.general.boxShadow};
  border: 0;
  margin: 0;
  cursor: pointer;
  transition: color 300ms, background-color 300ms;

  & + & {
    margin-left: ${config.sizings.sm};
  }

  &:hover,
  &:focus {
    outline: none;
    color: ${config.colors.brand};
    background-color: ${config.colors.lightest};
  }
`;

export { Button };
