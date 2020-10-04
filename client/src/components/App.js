import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
//compatibility between react and redux libraries
import { connect } from "react-redux";

import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import ChimeMeeting from "./ChimeMeeting";
import { MeetingProvider } from "amazon-chime-sdk-component-library-react";
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
            <MeetingProvider>
              <Route exact path="/" component={Landing} />
              <Route exact path="/meetings" component={Dashboard} />
              <Route path="/meetings/new" component={ChimeMeeting} />
            </MeetingProvider>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
//gives certtain components ability  to call action creators
export default connect(null, actions)(App);
