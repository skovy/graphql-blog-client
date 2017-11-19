import * as React from "react";

import { Link } from "components/link";

class Write extends React.Component {
  public render() {
    return (
      <Link to="/write">
        <i className="fa fa-pencil-square-o"/> Write a Story
      </Link>
    );
  }
}

export { Write };
