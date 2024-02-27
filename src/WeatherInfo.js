import React from "react";
import SubDate from "./SubDate";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";

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
            <WeatherIcon code={props.data.icon} size={54} />
          </span>
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity :
              <span className="weather-details"> {props.data.humidity} </span>%
            </li>
            <li>
              Wind : <span className="weather-details">{props.data.wind}</span>{" "}
              km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
