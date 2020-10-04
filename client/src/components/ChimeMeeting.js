import React, { Component } from "react";
import { Link } from "react-router-dom";
//import MeetingComponent from "./MeetingComponent";

import { useMeetingManager } from "amazon-chime-sdk-component-library-react";
const ChimeMeeting = () => {
  const meetingManager = useMeetingManager();

  const startChimeMeeting = async () => {
    console.log("here");
    // Fetch the meeting and attendee data from your server
    const response = await fetch("/meetings/new");
    const data = await response.json();

    const joinData = {
      meetingInfo: data.Meeting,
      attendeeInfo: data.Attendee,
    };

    // Use the join API to create a meeting session
    await meetingManager.join(joinData);

    // At this point you can let users setup their devices, or start the session immediately
    await meetingManager.start();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button className="btn-large" onClick={startChimeMeeting}>
        <h4>Join Meeting</h4>
      </button>
    </div>
  );
};

export default ChimeMeeting;
