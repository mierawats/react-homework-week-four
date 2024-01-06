import React from "react";

export default function Temp() {
  return (
    <div>
      <div className="Temp">
        <div className="d-flex">
          <span className="temperature">☀️20</span>
          <span className="unit">°C</span>
          <span className="line ps-1">|</span>
          <span className="unit">°F</span>
        </div>
      </div>
    </div>
  );
}
