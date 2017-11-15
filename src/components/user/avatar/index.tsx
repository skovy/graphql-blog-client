import * as React from "react";
import styled from "styled-components";

import { config } from "config";
import { UserType } from "types";

interface Props {
  className?: string;
  user: UserType;
}

class UserAvatarBase extends React.Component<Props> {
  public render() {
    const { className, user } = this.props;

    return (
      <div className={className}>
        <span>
          {user.name && user.name[0]}
        </span>
      </div>
    );
  }
}

const UserAvatar = styled(UserAvatarBase)`
  background-color: ${config.colors.brand};
  color: ${config.colors.light};
  font-family: ${config.fonts.secondary};
  font-size: ${config.sizings.lg};
  width: ${config.sizings.lg};
  height: ${config.sizings.lg};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${config.general.boxShadow};

  span {
    font-size: 0.8em;
  }
`;

export { UserAvatar };
