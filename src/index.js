import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import Search from "./Search";
import Temp from "./Temp";
import Condition from "./Condition";
import Weather from "./Weather";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container w-50 border border-black border-2 bg-dark-subtle rounded">
      <Search />
      <App />
      <Weather city="Tokyo" />
      <div className="d-flex justify-content-between align-items-center me-3 ms-3 mb-4">
        <Temp />
        <Condition />
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
