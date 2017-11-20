import styled from "styled-components";

import { config } from "config";

const EditorContainer = styled.div`
  border-left: ${config.sizings.sm} solid ${config.colors.light};
  margin: ${config.sizings.base} 0 ${config.sizings.xl} -${config.sizings.base};
  padding: ${config.sizings.xs} 0 ${config.sizings.xs} ${config.sizings.base};

  .DraftEditor-root {
    margin-top: ${config.sizings.base};
  }
`;

export { EditorContainer };
