import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Link } from "react-router-dom";

function Dashboard() {

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <Link to={"/view-1"} className="navbar-brand">
        Github APIs
          </Link>
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/view-1"} className="nav-link">
            View 1
      </Link>
        </li>
        <li className="nav-item">
          <Link to={"/view-2"} className="nav-link">
            View 2
      </Link>
        </li>
      </div>
    </nav>
  );
}

export default Dashboard;
