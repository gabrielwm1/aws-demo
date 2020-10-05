import React, { Component } from "react";

import { createMeetingRequest } from "../services/aws-chime-service";

class ChimeMeeting extends Component {
  constructor() {
    super();
    this.state = {
      isInMeeting: false,
      isLoading: false,
      meetingTitle: "",
      selfAttendeeId: "",
      studioStatus: "Enter Studio",
    };
  }

  componentDidMount() {}
  // onMeetingStartSubscription = () => {
  //   this.setState({ isInMeeting: true, isLoading: false });
  // };

  // onMeetingEndSubscription = () => {
  //   this.setState({ isInMeeting: false, isLoading: false });
  // };

  // onErrorSubscription = (message) => {};

  connectToChimeMeeting = (meetingName, userName) => {
    // this.setState({
    //   isLoading: true,
    //   studioStatus: "Leave Meeting",
    // });
  };

  renderRoute() {
    if (this.state.isInMeeting) {
      return <h4>meeting in session</h4>;
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="center">
        <button
          className="btn-large"
          onClick={this.connectToChimeMeeting("newlesson", "gabe")}
        >
          <h4>{this.state.studioStatus}</h4>
        </button>
        {this.renderRoute()}
      </div>
    );
  }
}

export default ChimeMeeting;
