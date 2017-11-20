import * as React from "react";
import { graphql, ChildProps } from "react-apollo";

import { Button } from "components/button";
import { Container } from "components/container";
import { EditorContainer } from "components/editor/container";
import { EditorFooter } from "components/editor/footer";
import { EditorTitle } from "components/editor/title";
import { Link } from "components/link";
import { UserSelect } from "components/user/select";
import { convertToRaw, DraftEditorCommand, Editor, EditorState, RichUtils } from "draft-js";
import { mutations } from "mutations";

interface State {
  editorState: EditorState;
  title: string;
  userId: number;
}

class WriteBase extends React.Component<ChildProps<{}, {}>, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty(),
      title: "",
      userId: 0
    };
  }

  public render() {
    return (
      <Container>
        <EditorTitle
          placeholder="Title your story here..."
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
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
          <UserSelect onChange={this.handleUserChange} userId={this.state.userId} />
          <div>
            <Link to="/">
              Cancel
            </Link>
            <Button type="submit" onClick={this.handleSubmit}>
              Publish Story
            </Button>
          </div>
        </EditorFooter>
      </Container>
    );
  }

  private handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const { mutate } = this.props;

    const text = JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()));

    mutate && mutate({
      variables: { text, user_id: this.state.userId, title: this.state.title }
    }).catch((error) => {
      console.log(error);
    });
  }

  private handleUserChange = (userId: number) => {
    this.setState({ userId });
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

const Write = graphql(mutations.addPost)(WriteBase);

export { Write };
