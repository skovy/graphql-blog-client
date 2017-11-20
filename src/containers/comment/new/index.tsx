import * as React from "react";
import { ChildProps, graphql } from "react-apollo";

import { Alert } from "components/alert";
import { Button } from "components/button";
import { UserSelect } from "components/user/select";
import { config } from "config";
import { mutations } from "mutations";
import { queries } from "queries";
import styled from "styled-components";
import { CommentType, PostType } from "types";

const Textarea = styled.textarea`
  border: 1px solid ${config.colors.light};
  border-radius: ${config.sizings.xs};
  margin-bottom: ${config.sizings.base};
  padding: ${config.sizings.sm};
  font-size: ${config.sizings.base};
  outline: none;
  width: 100%;
  display: block;
  resize: none;

  &:focus {
    border-color: ${config.colors.brand};
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${config.sizings.base};
`;

interface Result {
  addComment: {
    comment: CommentType;
  };
}

interface OwnProps {
  post: PostType;
}

type Props = ChildProps<OwnProps, Result>;

interface State {
  userId: number;
  text: string;
  error: string;
}

class CommentNewBase extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      userId: 0,
      text: "",
      error: ""
    };
  }

  public render() {
    const { post } = this.props;
    const { error } = this.state;

    return (
      <div>
        {error && error.length && <Alert>{error}</Alert>}
        <Textarea
          value={this.state.text}
          onChange={(e) => this.setState({ text: e.target.value })}
          rows={3}
          placeholder={`Add your thoughts on ${post.title}...`}
        />
        <Footer>
          <UserSelect userId={this.state.userId} onChange={this.handleUserChange} />
          <Button type="submit" onClick={this.handleSubmit}>
            Post
          </Button>
        </Footer>
      </div>
    );
  }

  private handleUserChange = (userId: number) => {
    this.setState({ userId });
  }

  private handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Clear any previous errors
    this.setState({ error: "" });

    // Perform some basic client side validation before trying to add a post
    const { text, userId } = this.state;
    if (!text.length) {
      this.setState({ error: "Text is required for a comment" });
      return;
    } else if (!userId) {
      this.setState({ error: "An author is required for a comment" });
      return;
    }

    const { mutate, post } = this.props;
    mutate && mutate({
      variables: { text, user_id: userId, post_id: post.id },
      // Refetch the current post to get an updated list of comments
      refetchQueries: [{
        query: queries.getPost,
        variables: { id: post.id }
      }],
      // Optimistically add the comment
      optimisticResponse: {
        addComment: {
          __typename: "AddCommentPayload",
          comment: {
            __typename: "Comment",
            createdAt: new Date(),
            errors: [],
            id: 0,
            // A "fake" user for now - ideally can use the current user info
            author: {
              __typename: "User",
              id: 0,
              name: "?"
            },
            text
          }
        }
      }
    }).catch((error) => {
      // We had missing data, malformed query, etc - likely on the client
      this.setState({ error: error.graphQLErrors });
    }).then((response) => {
      if (response && response.data) {
        if (response.data.addComment.comment.errors.length) {
          // The response came back with server errors, display to the user
          this.setState({ error: response.data.addComment.comment.errors.join(", ") });
        } else {
          // Reset the comment form on a successful submission
          this.setState({ text: "", userId: 0 });
        }
      } else {
        // The response did not come back as expected
        this.setState({ error: "Try again. An unexpected error occurred" });
      }
    });
  }
}

const CommentNew = graphql<Result, OwnProps>(mutations.addComment)(CommentNewBase);

export { CommentNew };
