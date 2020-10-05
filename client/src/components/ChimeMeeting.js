import React, { Component } from "react";

// import { createMeetingRequest } from "../services/aws-chime-service";

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

// const AWS = require('./aws-sdk');
// const fs = require('fs');
// const { v4: uuidv4 } = require('./uuid');

// chime.endpoint = new AWS.Endpoint('https://service.chime.aws.amazon.com');
// // Read resource names from the environment
// const meetingsTableName = process.env.MEETINGS_TABLE_NAME;
// const logGroupName = process.env.BROWSER_LOG_GROUP_NAME;
// const sqsQueueArn = process.env.SQS_QUEUE_ARN;
// const useSqsInsteadOfEventBridge = process.env.USE_EVENT_BRIDGE === 'false';

// // Look up the meeting by its title. If it does not exist, create the meeting.
// let meeting = await getMeeting(query.title);
// if (!meeting) {
//   const request = {
//     // Use a UUID for the client request token to ensure that any request retries
//     // do not create multiple meetings.
//     ClientRequestToken: uuidv4(),

//     // Specify the media region (where the meeting is hosted).
//     // In this case, we use the region selected by the user.
//     MediaRegion: query.region,

//     // Set up SQS notifications if being used
//     NotificationsConfiguration: useSqsInsteadOfEventBridge ? { SqsQueueArn: sqsQueueArn } : {},

//     // Any meeting ID you wish to associate with the meeting.
//     // For simplicity here, we use the meeting title.
//     ExternalMeetingId: query.title.substring(0, 64),

//     // Tags associated with the meeting. They can be used in cost allocation console
//     Tags: [
//       { Key: 'Department', Value: 'RND'}
//     ]
//   };
//   console.info('Creating new meeting: ' + JSON.stringify(request));
//   meeting = await chime.createMeeting(request).promise();

//   // Store the meeting in the table using the meeting title as the key.
//   await putMeeting(query.title, meeting);
// }

// // Create new attendee for the meeting
// console.info('Adding new attendee');
// const attendee = (await chime.createAttendee({
//   // The meeting ID of the created meeting to add the attendee to
//   MeetingId: meeting.Meeting.MeetingId,

//   // Any user ID you wish to associate with the attendeee.
//   // For simplicity here, we use a random UUID for uniqueness
//   // combined with the name the user provided, which can later
//   // be used to help build the roster.
//   ExternalUserId: `${uuidv4().substring(0, 8)}#${query.name}`.substring(0, 64),
// }).promise());

// // Return the meeting and attendee responses. The client will use these
// // to join the meeting.
// return response(200, 'application/json', JSON.stringify({
//   JoinInfo: {
//     Meeting: meeting,
//     Attendee: attendee,
//   },
// }, null, 2));
// };
