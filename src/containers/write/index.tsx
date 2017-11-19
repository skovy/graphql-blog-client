import * as React from "react";

import { Button } from "components/button";
import { Container } from "components/container";
import { EditorContainer } from "components/editor/container";
import { EditorFooter } from "components/editor/footer";
import { Link } from "components/link";
import { PageTitle } from "components/page-title";
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
        <PageTitle>
          Write a Story
        </PageTitle>
        <Button onClick={this.onBoldClick}>
          <i className="fa fa-bold" />
        </Button>
        <Button onClick={this.onUnderlineClick}>
          <i className="fa fa-underline" />
        </Button>
        <Button onClick={this.onItalicClick}>
          <i className="fa fa-italic" />
        </Button>
        <Button onClick={this.onCodeClick}>
          <i className="fa fa-code" />
        </Button>
        <EditorContainer>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            handleKeyCommand={this.handleKeyCommand}
            placeholder="Type your story here..."
          />
        </EditorContainer>
        <EditorFooter>
          <Link to="/">
            Cancel
          </Link>
          <Button>
            Publish Story
          </Button>
        </EditorFooter>
      </Container>
    );
  }

  private onBoldClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
  }

  private onUnderlineClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE"));
  }

  private onItalicClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC"));
  }

  private onCodeClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "CODE"));
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
