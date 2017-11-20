import * as moment from "moment";
import * as React from "react";
import styled from "styled-components";

import { UserAvatar } from "components/user/avatar";
import { config } from "config";
import { PostType } from "types";

const UserAvatarName = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.div`
  font-size: ${config.sizings.base};
  margin-left: ${config.sizings.sm};
  text-transform: uppercase;
  font-weight: ${config.weights.light};
`;

const PostedAt = styled.div`
  font-size: ${config.sizings.base};
  text-transform: uppercase;
  font-weight: ${config.weights.light};
`;

interface Props {
  className?: string;
  post: PostType;
}

class PostMetadataBase extends React.Component<Props> {
  public render() {
    const { className, post: { author, createdAt } } = this.props;

    return (
      <div className={className}>
        <UserAvatarName>
          <UserAvatar user={author} />
          <UserName>{author.name}</UserName>
        </UserAvatarName>
        <PostedAt>
          {moment.utc(createdAt, "YYYY-MM-DD H:m:s Z").fromNow()}
        </PostedAt>
      </div>
    );
  }
}

const PostMetadata = styled(PostMetadataBase)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${config.sizings.base};
  border-bottom: ${config.sizings.sm} solid ${config.colors.brand};
`;

export { PostMetadata };
