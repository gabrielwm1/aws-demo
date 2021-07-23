import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
//compatibility between react and redux libraries
import { connect } from "react-redux";

import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
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
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
//gives certtain components ability  to call action creators
export default connect(null, actions)(App);
