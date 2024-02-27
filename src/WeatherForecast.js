import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div>
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="forecast-day">Wed</div>
            <div className="forecast-icon">
              <WeatherIcon code="01d" size={36} />{" "}
            </div>
          </div>
          <div>
            <span className="temperature-max">25°</span>
            <span className="temperature-min"> 18°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
