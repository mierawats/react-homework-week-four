import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <footer className="footer text-center fs-4 fw-bold">
        Built by{" "}
        <a
          href="https://www.linkedin.com/in/azmiera-expert/"
          target="_blank"
          rel="noreferrer"
        >
          Miera Azmi,
        </a>{" "}
        open-sourced on{" "}
        <a
          href="https://github.com/mierawats/react-homework-week-four"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        , and hosted by{" "}
        <a
          href="https://react-homework-week-four.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Vercel.
        </a>
      </footer>
    </div>
  );
}
