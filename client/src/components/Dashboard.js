import React from "react";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Upcoming lessons: </h1>
      <h3>French: Amy, 5pm</h3>
      <h3>Guitar: Zach, 6pm</h3>
      <h3>Bass: Nate, 7pm</h3>

      <Link to={"/meetings/new"} className="left brand-logo">
        go to lesson
      </Link>
    </div>
  );
};

export default Dashboard;
