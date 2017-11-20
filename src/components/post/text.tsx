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
    const { className, post: { text }, richText } = this.props;

    // Post text must be present to display any text
    if (!text) { return null; }

    // Attempt to handle as Draft richly formatted text and fallback to plain text
    try {
      const editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(text)));

      if (richText) {
        // Display "richly" formatted text with a readOnly Draft Editor for the sake of ease (definitely better ways)
        return (
          <div className={className}>
            <Editor
              editorState={editorState}
              onChange={() => null} // noop
              readOnly
            />
          </div>
        );
      } else {
        // Display plain text stripped of all formatting
        return this.formatPlainText(editorState.getCurrentContent().getPlainText());
      }
    } catch (e) {
      return this.formatPlainText(text);
    }
  }

  private formatPlainText(text: string) {
    const { className, truncated } = this.props;

    return (
      <p className={className}>
        {text && truncated ? this.truncateText(text) : text}
      </p>
    );
  }

  private truncateText(text: string): string {
    // Truncate text any longer than 340 characters
    if (text.length > 340) {
      return `${text.substring(0, 340)}...`;
    } else {
      return text;
    }
  }
}

const PostText = styled(PostTextBase)`
  font-size: ${config.sizings.base};
  margin: 0 0 ${config.sizings.xl};
`;

export { PostText };
