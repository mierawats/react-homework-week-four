import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    /*alert(
      `Weather in ${response.data.name} is ${response.data.main.temp} degree celcius`
    );*/
  }

  let apiKey = "a867e25f2d83db579421a57fd8e937ec";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
}
