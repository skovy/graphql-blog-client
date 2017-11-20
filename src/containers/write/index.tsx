import * as React from "react";
import { ChildProps, graphql } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";

import { Alert } from "components/alert";
import { Button } from "components/button";
import { Container } from "components/container";
import { EditorContainer } from "components/editor/container";
import { EditorFooter } from "components/editor/footer";
import { EditorTitle } from "components/editor/title";
import { Link } from "components/link";
import { UserSelect } from "components/user/select";
import { convertToRaw, DraftEditorCommand, Editor, EditorState, RichUtils } from "draft-js";
import { mutations } from "mutations";
import { PostType } from "types";

interface Result {
  addPost: {
    post: PostType;
  };
}

interface State {
  editorState: EditorState;
  title: string;
  userId: number;
  error: string;
}

type Props = ChildProps<RouteComponentProps<{}>, Result>;

class WriteBase extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty(),
      title: "",
      userId: 0,
      error: ""
    };
  }

  public render() {
    const { error } = this.state;

    return (
      <Container>
        {error && error.length && <Alert>{error}</Alert>}
        <EditorTitle
          placeholder="Title your story here..."
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <EditorContainer>
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

    // clear any previous errors
    this.setState({ error: "" });

    // perform some basic client side validation before trying to add a post
    const { editorState, title, userId } = this.state;
    if (!title.length) {
      this.setState({ error: "A story title is required" });
      return;
    } else if (!editorState.getCurrentContent().hasText()) {
      this.setState({ error: "Story text is required" });
      return;
    } else if (!userId) {
      this.setState({ error: "A story author is required" });
      return;
    }

    // A draftjs helper to save a "dehydrated" state that we can easily hydrate the editor later
    const text = JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()));

    // create the post with the necessary data
    const { mutate } = this.props;
    mutate && mutate({
      variables: { text, user_id: this.state.userId, title: this.state.title }
    }).catch((error) => {
      // We had missing data, malformed query, etc - likely on the client
      this.setState({ error: error.graphQLErrors });
    }).then((response) => {
      if (response && response.data) {
        if (response.data.addPost.post.errors.length) {
          // The response came back with server errors, display to the user
          this.setState({ error: response.data.addPost.post.errors.join(", ") });
        } else {
          // The response came back with no errors, redirect to the new post
          this.props.history.push(`/posts/${response.data.addPost.post.id}`);
        }
      } else {
        // The response did not come back as expected
        this.setState({ error: "Try again. An unexpected error occurred" });
      }
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

const Write = graphql<Result>(mutations.addPost)(WriteBase);

export { Write };
