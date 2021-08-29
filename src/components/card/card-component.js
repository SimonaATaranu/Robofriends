import React from "react";
import "./card-component-style.css";
export const Card = props => (
  <div className="card-container">
    <img
      alt="robots"
      src={`https://robohash.org/${props.robot.id}?set=set1&size=180x180`}
    ></img>
    <h2>{props.robot.name}</h2>
    <h4>{props.robot.email}</h4>
  </div>
);
