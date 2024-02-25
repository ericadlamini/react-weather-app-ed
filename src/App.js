import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>

      <Weather />
      <div className="footer">
        This app was Coded by{" "}
        <a
          href="https://github.com/ericadlamini"
          target="blank"
          rel="noreferrer"
        >
          Erica Dlamini
        </a>{" "}
        and is open-sourced on{" "}
        <a
          href="https://github.com/ericadlamini/react-weather-app-ed"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://react-weather-app-ed.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </div>
    </div>
  );
}

export default App;
