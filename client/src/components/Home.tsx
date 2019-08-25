import * as React from "react";
import { Route, Switch } from "react-router-dom";

import Products from "../components/Products";
import Posts from "../components/Posts";
import Dashboard from "../components/Dashboard";
import Main from "../components/Main";
import NavBarRoute from "./NavbarRoute";

export interface HomeProps {}

export interface HomeState {}

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return (
      <React.Fragment>
        <div className="content">
          <NavBarRoute />
          <Switch>
            <Route path="/products" component={Products} />
            <Route path="/posts" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/" component={Main} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
