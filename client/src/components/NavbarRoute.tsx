import * as React from "react";
import { Link } from "react-router-dom";

class NavBarRoute extends React.Component<{}, {}> {
  render() {
    return (
      <ul>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/posts/2018/06">Posts</Link>
        </li>
        <li>
          <Link to="/admin">Dashboard</Link>
        </li>
        <li>
          <Link to="/">Main</Link>
        </li>
      </ul>
    );
  }
}

export default NavBarRoute;
