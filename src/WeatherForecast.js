import React, { useState, useEffect } from "react";
import ForecastDaily from "./ForecastDaily.js";
import "./WeatherForecast.css";

import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "bf54175800a55e59e6c4d6461deeef12";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div>
        <div className="WeatherForecast">
          <div className="row">
            <div className="col">
              <ForecastDaily data={forecast[0]} />
            </div>
            <div className="col">
              <ForecastDaily data={forecast[1]} />
            </div>{" "}
            <div className="col">
              <ForecastDaily data={forecast[2]} />
            </div>{" "}
            <div className="col">
              <ForecastDaily data={forecast[3]} />
            </div>{" "}
            <div className="col">
              <ForecastDaily data={forecast[4]} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    load();
  }
}
