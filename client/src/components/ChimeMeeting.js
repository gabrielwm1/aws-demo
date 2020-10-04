import React, { Component } from "react";
import { Link } from "react-router-dom";
//import MeetingComponent from "./MeetingComponent";
import {
  useMeetingManager,
  LocalVideo,
  MeetingProvider,
  RemoteVideo,
  useLocalVideo,
} from "amazon-chime-sdk-component-library-react";
import { Chime } from "aws-sdk";
import {
  ConsoleLogger,
  DefaultDeviceController,
  DefaultMeetingSession,
  LogLevel,
  MeetingSessionConfiguration,
} from "amazon-chime-sdk-js";

//const chime = new Chime({ region: "us-east-1" });
const logger = new ConsoleLogger("Chime Logs", LogLevel.INFO);
const deviceController = new DefaultDeviceController(logger);

const ChimeMeeting = () => {
  // const meetingInstance = this.startChimeMeeting();
  const meetingManager = useMeetingManager();

  async function startChimeMeeting() {
    const params = {
      ClientRequestToken: "some-random-string-of-your-choice",
      MediaRegion: "us-east-1", // :: where your call is actually hosted
    };
    // return await chime.createChimeMeeting(params).promise();
  }
  // const startChimeMeeting = async () => {
  //   // console.log("here");
  //   // Fetch the meeting and attendee data from your server
  //   const response = await fetch("/meetings/new");
  //   const data = await response.json();

  //   const joinData = {
  //     meetingInfo: data.Meeting,
  //     attendeeInfo: data.Attendee,
  //   };

  //   // Use the join API to create a meeting session
  //   await meetingManager.join(joinData);

  //   // At this point you can let users setup their devices, or start the session immediately
  //   await meetingManager.start();
  // };

  async function createChimeAttendee(meetingInstance) {
    const { MeetingId } = meetingInstance.meeting;
    const params = {
      MeetingId,
      ExternalUserId: "unique-user-identifier",
    };

    // return await chime.createAttendee(params).promise();
  }

  function connectToChimeMeeting(meeting, attendee) {
    const meetingConfig = new MeetingSessionConfiguration(meeting, attendee);
    const meetingSession = new DefaultMeetingSession(
      meetingConfig,
      logger,
      deviceController
    );

    console.log("Starting the Chime meeting!");
    meetingSession.audioVideo.start();

    return meetingSession;
  }
  async function setMeetingAudioInputDevice(session) {
    const availableAudioInputDevices = await session.audioVideo.listAudioInputDevices();
    const deviceId = availableAudioInputDevices[0].deviceId;

    await session.audioVideo.chooseAudioInputDevice(deviceId);
  }
  function bindMeetingAudioOutput(session) {
    // :: or however you prefer to get a reference
    //    to the <audio> element above
    const audioElement = document.getElementById("my-audio-element");
    session.audioVideo.bindAudioElement(audioElement);
  }

  async function broadcastVideo(session, videoStream) {
    await session.audioVideo.startContentShare(videoStream);
  }

  async function shareScreen(session) {
    await session.audioVideo.startContentShareFromScreenCapture();
  }

  function displaySharedVideoContent(session) {
    const observer = {
      // :: a tile represents a single instance of shared video content
      videoTileDidUpdate: (tile) => {
        console.log("Received content with ID:", tile.tileId);

        // :: TODO: get a video element specifically for this tile
        const videoElement = document.getElementById("my-video-element");
        session.audioVideo.bindVideoElement(tile.tileId, videoElement);
      },
    };

    session.audioVideo.addObserver(observer);
  }
  return (
    <div className="right">
      <button className="btn-large" onClick={connectToChimeMeeting}>
        <h4>Enter Studio</h4>
      </button>
      {/* 
      <button
        className="btn-large"
        // onClick={createChimeAttendee(meetingInstance)}
      >
        <h4>Invite Student</h4>
      </button> */}
      <audio id="my-audio-element"></audio>
      <video id="my-video-element"></video>
    </div>
  );
};

export default ChimeMeeting;
