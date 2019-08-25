import * as React from "react";

export interface DashboardProps {}

export interface DashboardState {}

class Dashboard extends React.Component<DashboardProps, DashboardState> {
  render() {
    return <h2>Dashboard Component</h2>;
  }
}

export default Dashboard;
