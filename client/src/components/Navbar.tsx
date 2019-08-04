import * as React from 'react';

interface ICounter {
  id: number;
  value: string;
}

export interface NavBarProps {
  counters: ICounter[];
}

class NavBar extends React.Component<NavBarProps, {}> {
  render() {
    return (
      <div className="navbar navbar-light bg-light">
        <a href="#menu" className="navbar-brans">
          navbar
          <span className="badge badge-pill badge-secondary m-2">
            {this.props.counters.length}
          </span>
        </a>
      </div>
    );
  }
}

export default NavBar;
