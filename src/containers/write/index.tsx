import * as React from "react";

import { Container } from "components/container";
import { DraftEditorCommand, Editor, EditorState, RichUtils } from "draft-js";

interface State {
  editorState: EditorState;
}

class Write extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty()
    };
  }

  public render() {
    return (
      <Container>
        Write:
        <button onClick={this.onBoldClick}>Bold</button>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          handleKeyCommand={this.handleKeyCommand}
          placeholder="Write your story..."
        />
      </Container>
    );
  }

  private onBoldClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
  }

  private onChange = (editorState: EditorState) => {
    this.setState({editorState});
  }

  private handleKeyCommand = (command: DraftEditorCommand, editorState: EditorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return "handled";
    }
    return "not-handled";
  }
}

export { Write };
