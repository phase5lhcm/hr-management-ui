import React from "react";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="Dashboard">
      <div
        className="navbar"
        style={{ backgroundColor: "orange", width: "100vw", height: "100vh" }}
      >
        <Sidebar />
      </div>
    </div>
  );
}

export default Dashboard;
