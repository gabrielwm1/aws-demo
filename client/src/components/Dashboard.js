import React from "react";
import { Link } from "react-router-dom";
import { MeetingProvider } from "amazon-chime-sdk-component-library-react";
const Dashboard = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Upcoming lessons: </h1>
      <h3>French: Amy, 5pm</h3>
      <h3>Guitar: Zach, 6pm</h3>
      <h3>Bass: Nate, 7pm</h3>

      <Link to={"/meetings/new"}>
        <button className="btn-large btn-flat">go to lesson</button>
      </Link>
    </div>
  );
};

export default Dashboard;
