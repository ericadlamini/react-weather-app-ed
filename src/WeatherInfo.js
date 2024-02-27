import React from "react";
import SubDate from "./SubDate";
import WeatherIcon from "./WeatherIcon.js";

export default function weatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <SubDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <span>
            <WeatherIcon code={props.data.icon} />
          </span>
          <span className="temperature">
            {" "}
            {Math.round(props.data.temperature)}
          </span>
          <span className="units">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation : 45%</li>
            <li>Humidity : {props.data.humidity} %</li>
            <li>Wind : {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
