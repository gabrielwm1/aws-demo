import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
const Dashboard = () => <h2>Dashboard</h2>;
const ChimeMeeting = () => <h2>ChimeMeeting</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends Component {
  //lifecyle method
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/meetings" component={Dashboard} />
            <Route path="/meetings/new" component={ChimeMeeting} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
