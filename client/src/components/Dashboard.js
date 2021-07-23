import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Today's lessons: </h1>
      <h5>French: Amy, 5pm</h5>
      <h5>Guitar: Zach, 6pm</h5>
      <h5>Bass: Nate, 7pm</h5>

      {/* <Link to={"/meetings/new"}>
        <button className="btn-large btn-flat">go to lesson</button>
      </Link> */}
    </div>
  );
};

export default Dashboard;
