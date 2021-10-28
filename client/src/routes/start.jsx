import React from "react";
import { Link } from "react-router-dom";
import "../styles/start.css";

export default function Start() {
  return (
    <div  className="start">
      <div className="title">
        <h1>Travel Activity <br/> Planner</h1>
      </div>
      <div>
        <Link to="/home">
          <input type="submit" value="Start" className="button"/>
          </Link>
      </div>
    </div>
  );
}