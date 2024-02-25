import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

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
