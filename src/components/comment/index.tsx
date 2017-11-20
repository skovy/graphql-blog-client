import * as moment from "moment";
import * as React from "react";
import styled from "styled-components";

import { UserAvatar } from "components/user/avatar";
import { config } from "config";
import { CommentType } from "types";

const CommentContent = styled.div`
  flex: 1 1 auto;
`;

const CommentDate = styled.div`
  margin-top: ${config.sizings.xs};
  color: ${config.colors.dark};
  font-style: italic;
`;

const CommentText = styled.div`
  padding: ${config.sizings.base};
  border-radius: ${config.sizings.xs};
  color: ${config.colors.dark};
  background-color: ${config.colors.light};
  margin-right: ${config.sizings.base};
  position: relative;

  &:after {
    content: '';
    position: absolute;
    right: -24px;
    top: 4px;
    border: 12px solid transparent;
    border-left: 12px solid ${config.colors.light};
  }
`;

interface Props {
  className?: string;
  comment: CommentType;
}

class CommentBase extends React.Component<Props> {
  public render() {
    const { className, comment: { author, createdAt, text } } = this.props;

    return (
      <div className={className}>
        <CommentContent>
          <CommentText>
            {text}
          </CommentText>
          <CommentDate>
            {author.name} commented {moment.utc(createdAt, "YYYY-MM-DD H:m:s Z").fromNow()}
          </CommentDate>
        </CommentContent>
        <UserAvatar user={author} />
      </div>
    );
  }
}

const Comment = styled(CommentBase)`
  display: flex;

  & + & {
    margin-top: ${config.sizings.lg}
  }
`;

export { Comment };
