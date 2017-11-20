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
  userId: number;
  onChange(userId: number): void;
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
          <select value={this.props.userId} onChange={this.handleChange}>
            <option id="0" value="0">Select a user</option>
            {data.users.map((user) => <option key={user.id} value={user.id}>{user.name}</option>)}
          </select>
        </div>
      );
    } else {
      return <div />;
    }
  }

  private handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
    this.props.onChange(parseInt(e.currentTarget.value, 10));
  }
}

const UserSelectStyled = styled(UserSelectBase)`
  display: flex;
  font-family: ${config.fonts.secondary};
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

const UserSelect = graphql<Result, OwnProps>(queries.getUsers)(UserSelectStyled);

export { UserSelect };
