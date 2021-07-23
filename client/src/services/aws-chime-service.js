import {
  ConsoleLogger,
  DefaultDeviceController,
  DefaultMeetingSession,
  LogLevel,
  MeetingSessionConfiguration,
} from "amazon-chime-sdk-js";

const SERVER_URL = "YOUR_SERVER_URL";
const SERVER_REGION = "us-east-1";

const logger = new ConsoleLogger("MyLogger", LogLevel.INFO);
const deviceController = new DefaultDeviceController(logger);

// You need responses from server-side Chime API. See below for details.
//const meetingResponse = /* The response from the CreateMeeting API action */
////const attendeeResponse = /* The response from the CreateAttendee or BatchCreateAttendee API action */
// const configuration = new MeetingSessionConfiguration(meetingResponse, attendeeResponse);

// In the usage examples below, you will use this meetingSession object.
// const meetingSession = new DefaultMeetingSession(
//   configuration,
//   logger,
//   deviceController
// );

export function createMeetingRequest(meetingName, attendeeName) {
  let url = encodeURI(
    SERVER_URL +
      "/join?" +
      `title=${meetingName}&name=${attendeeName}&region=${SERVER_REGION}`
  );

  return fetch(url, { method: "POST" }).then((j) => j.json());
}

// const AWS = require('aws-sdk');
// const { v4: uuid } = require('uuid');

// You must use "us-east-1" as the region for Chime API and set the endpoint.
// const chime = new AWS.Chime({ region: 'us-east-1' });
// chime.endpoint = new AWS.Endpoint('https://service.chime.aws.amazon.com/console');

// const meetingResponse = await chime.createMeeting({
//   ClientRequestToken: uuid(),
//   MediaRegion: 'us-west-2' // Specify the region in which to create the meeting.
// }).promise();

// const attendeeResponse = await chime.createAttendee({
//   MeetingId: meetingResponse.Meeting.MeetingId,
//   ExternalUserId: uuid() // Link the attendee to an identity managed by your application.
// }).promise();

// const audioElement = /* HTMLAudioElement object e.g. document.getElementById('audio-element-id') */;
// meetingSession.audioVideo.bindAudioElement(audioElement);

// const observer = {
//   audioVideoDidStart: () => {
//     console.log('Started');
//   }
// };

//meetingSession.audioVideo.addObserver(observer);

//meetingSession.audioVideo.start();

const observer = {
  audioVideoDidStart: () => {
    console.log("Started");
  },
  audioVideoDidStop: (sessionStatus) => {
    // See the "Stopping a session" section for details.
    console.log(
      "Stopped with a session status code: ",
      sessionStatus.statusCode()
    );
  },
  audioVideoDidStartConnecting: (reconnecting) => {
    if (reconnecting) {
      // e.g. the WiFi connection is dropped.
      console.log("Attempting to reconnect");
    }
  },
};

//meetingSession.audioVideo.addObserver(observer);




const AWS = require('aws-sdk');
const { v4: uuid } = require('uuid');

// You must use "us-east-1" as the region for Chime API and set the endpoint.
const chime = new AWS.Chime({ region: 'us-east-1' });
chime.endpoint = new AWS.Endpoint('https://service.chime.aws.amazon.com/console');

const meetingResponse = await chime.createMeeting({
  ClientRequestToken: uuid(),
  MediaRegion: 'us-west-2' // Specify the region in which to create the meeting.
}).promise();

const attendeeResponse = await chime.createAttendee({
  MeetingId: meetingResponse.Meeting.MeetingId,
  ExternalUserId: uuid() // Link the attendee to an identity managed by your application.
}).promise();