import * as React from "react";
import { ChildProps, graphql } from "react-apollo";
import styled from "styled-components";

import { config } from "config";
import { queries } from "queries";
import { UserType } from "types";

interface Result {
  users: UserType[];
}

interface OwnProps {
  className?: string;
}

type Props = ChildProps<OwnProps, Result>;

class UserSelectBase extends React.Component<Props> {
  public render() {
    const { className, data } = this.props;

    if (data && data.loading) {
      return <div>Loading Users...</div>;
    } else if (data && data.error) {
      return <div>{data.error}</div>;
    } else if (data && (!data.users || !data.users.length)) {
      return <div>No users found.</div>;
    } else if (data && data.users && data.users.length) {
      return (
        <div className={className}>
          <span>
            Posted by
          </span>
          <select>
            {data.users.map((user) => <option key={user.id} value={user.id}>{user.name}</option>)}
          </select>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

const UserSelectStyled = styled(UserSelectBase)`
  display: flex;
  font-family: ${config.fonts.primary};
  font-size: ${config.sizings.base};
  align-items: center;

  select {
    border: 1px solid ${config.colors.light};
    border-radius: ${config.sizings.xs};
    margin-left: ${config.sizings.sm};
    font-family: ${config.fonts.primary};
    font-size: ${config.sizings.base};
    padding: ${config.sizings.sm};
    background-color: ${config.colors.lightest};
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
  }
`;

const UserSelect = graphql<Result, {}>(queries.getUsers)(UserSelectStyled);

export { UserSelect };
