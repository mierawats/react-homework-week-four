import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [enter, setEnter] = useState(false);
  let [weather, setWeather] = useState({});

  function displayWeather(response) {
    setEnter(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "a867e25f2d83db579421a57fd8e937ec";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="text-center fs-5 mt-5 mb-5" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a City"
        required
        className="me-3 rounded p-2 ps-3 border-2 bg-light-subtle w-75"
        onChange={updateCity}
      />
      <input
        type="submit"
        value="Search"
        className="text-center rounded p-2 pe-3 ps-3 border-0 bg-black text-light"
      />
    </form>
  );

  if (enter) {
    return (
      <div>
        {form}
        <div className="d-flex justify-content-between align-items-center me-3 ms-3 mb-4">
          <div className="Temp">
            <div className="d-flex">
              <span className="icon">
                <img src={weather.icon} alt={weather.description} />
              </span>
              <span className="temperature">
                {Math.round(weather.temperature)}
              </span>
              <span className="unit">°C</span>
              <span className="line ps-1">|</span>
              <span className="unit">°F</span>
            </div>
          </div>
          <div className="Condition">
            <div className="me-4 fs-3">
              <div>
                <strong>Humidity</strong>: {weather.humidity}%
              </div>
              <div>
                <strong>Wind</strong>: {weather.wind} km/h
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
