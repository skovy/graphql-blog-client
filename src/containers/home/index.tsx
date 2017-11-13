import * as React from "react";
import { ChildProps, graphql } from "react-apollo";
import styled from "styled-components";

import { Container } from "components/container";
import { Post } from "components/post";
import { config } from "config";
import { queries } from "queries";
import { PostType } from "types";

const Description = styled.h2`
  font-family: ${config.fonts.primary};
  font-size: ${config.sizings.lg};
  color: ${config.colors.brand};
  border-left: ${config.sizings.sm} solid ${config.colors.brand};
  margin: 0 0 ${config.sizings.xl} -${config.sizings.base};
  padding: 0 0 0 ${config.sizings.base};
  font-weight: ${config.weights.light};
`;

interface Result {
  posts: PostType[];
}

type Props = ChildProps<{}, Result>;

class HomeBase extends React.Component<Props> {
  public render() {
    return (
      <Container>
        <Description>
          long-winded thoughts on things, objects, stuff, information and more.
        </Description>
        {this.renderContent()}
      </Container>
    );
  }

  private renderContent(): JSX.Element {
    const { data } = this.props;

    if (data && data.loading) {
      return <div>Loading</div>;
    } else if (data && data.error) {
      return <div>{data.error}</div>;
    } else if (data && data.posts && !data.posts.length) {
      return <div>No Posts.</div>;
    } else if (data && data.posts && data.posts.length) {
      return <div>{data.posts.map((post) => <Post post={post} key={post.id} />)}</div>;
    } else {
      return <div />;
    }
  }
}

const Home = graphql<Result, {}>(queries.getPosts)(HomeBase);

export { Home };
