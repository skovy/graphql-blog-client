import { convertFromRaw, Editor, EditorState } from "draft-js";
import * as React from "react";
import styled from "styled-components";

import { config } from "config";
import { PostType } from "types";

interface Props {
  className?: string;
  // Whether or not the text should be truncated
  truncated?: boolean;
  // Whether or not the text should be "richly" displayed
  richText?: boolean;
  // The post to display the text of
  post: PostType;
}

class PostTextBase extends React.Component<Props> {
  public render() {
    const { className, post: { text }, truncated } = this.props;

    // Post text must be present to display any text
    if (!text) { return null; }

    try {
      const editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(text)));
      return (
        <div className={className}>
          <Editor
            editorState={editorState}
            onChange={() => null} // noop
            readOnly
          />
        </div>
      );
    } catch (e) {
      return (
        <p className={className}>
          {text && truncated && text.length > 340 ? `${text.substring(0, 340)}...` : text}
        </p>
      );
    }
  }
}

const PostText = styled(PostTextBase)`
  font-size: ${config.sizings.base};
  margin: 0 0 ${config.sizings.xl};
`;

export { PostText };
