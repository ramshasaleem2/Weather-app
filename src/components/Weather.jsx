import React, { useEffect } from "react";
import { useState } from "react";
import "../App.css";
import search_icon from "../Assets/search.png";
import sun_icon from "../Assets/sun.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";

const API_KEY = "YOUR-API-KEY";

const Weather = () => {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("lahore");
  const [weatherIcon, setWeatherIcon] = useState(cloud_icon);

  const search = async () => {
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    setWeatherData(data);

  };

  useEffect(() => {
    search();
  }, []);

  useEffect(() => {
    //change the icon
    if (weatherData.weather) {
      if (weatherData.weather[0].icon === "01d" || weatherData.weather[0].icon === "01n") {
        setWeatherIcon(sun_icon);
      } else if (
        weatherData.weather[0].icon === "02d" ||
        weatherData.weather[0].icon === "02n" ||
        weatherData.weather[0].icon === "03d" ||
        weatherData.weather[0].icon === "03n" ||
        weatherData.weather[0].icon === "04d" ||
        weatherData.weather[0].icon === "04n"
      ) {
        setWeatherIcon(cloud_icon);
      } else if (
        weatherData.weather[0].icon === "09d" ||
        weatherData.weather[0].icon === "09n"
      ) {
        setWeatherIcon(drizzle_icon);
      } else if (
        weatherData.weather[0].icon === "10d" ||
        weatherData.weather[0].icon === "10n"
      ) {
        setWeatherIcon(rain_icon);
      } else if (
        weatherData.weather[0].icon === "13d" ||
        weatherData.weather[0].icon === "13n"
      ) {
        setWeatherIcon(snow_icon);
      } else {
        setWeatherIcon(sun_icon);
      }}
  }, [weatherData]);


  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="city-input" placeholder="Search" value={city} onChange={(e) => setCity(e.target.value)} />
        
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={search_icon} alt="search_icon" />
        </div>
      </div>
      <div className="weather-image">
        <img src={weatherIcon} alt="cloud_icon" />
      </div>
      <div className="weather-temp">{Math.round(weatherData.main?.temp)}°C</div>
      <p className="weather-feels">Feels Like: {Math.round(weatherData.main?.feels_like)}°C</p>

      <div className="weather-location">{weatherData.name}</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">{Math.round(weatherData.main?.humidity)} %</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">{Math.round(weatherData.wind?.speed)} km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
