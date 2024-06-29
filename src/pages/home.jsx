import { useState, useEffect } from "react";
import axios from "axios";
import WeatherDisplay from "../components/WeatherDisplay";
import UserGroupToggle from "../components/UserGroupToggle";

function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const [userGroup, setUserGroup] = useState("general");

  const fetchWeatherData = async (latitude, longitude, city) => {
    try {
      const apiKey = import.meta.env.VITE_APP_API_KEY;
      let url;
      if (latitude && longitude) {
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      } else if (city) {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      } else {
        return;
      }

      const response = await axios.get(url);
      const data = response.data;
      const airQualityResponse = await fetchAirQualityData(
        data.coord.lat,
        data.coord.lon
      );
      const forecast = await fetchForecastData(data.coord.lat, data.coord.lon);
      const currentTime = await fetchCurrentTime(
        data.coord.lat,
        data.coord.lon,
        city
      );
      setCurrentTime(currentTime);
      setWeatherData({
        ...data,
        airQuality: airQualityResponse,
        forecast: forecast,
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const fetchAirQualityData = async (lat, lon) => {
    try {
      const apiKey = import.meta.env.VITE_APP_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error("Error fetching air quality data:", error);
      return null;
    }
  };

  const fetchForecastData = async (lat, lon) => {
    try {
      const apiKey = import.meta.env.VITE_APP_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&cnt=7`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error("Error fetching forecast data:", error);
      return null;
    }
  };

  const fetchCurrentTime = async (latitude, longitude, city) => {
    try {
      let url;
      if (latitude && longitude) {
        url = `http://api.geonames.org/timezoneJSON?lat=${latitude}&lng=${longitude}&username=demo`;
      } else if (city) {
        url = `http://api.geonames.org/timezoneJSON?formatted=true&country=IN&username=demo&city=${city}`;
      } else {
        return null;
      }

      const response = await axios.get(url);
      console.log("API response:", response.data);

      if (response.data && response.data.time) {
        const timeString = response.data.time.split(" ")[1];
        return timeString;
      } else {
        return new Date().toLocaleTimeString();
      }
    } catch (error) {
      console.error("Error fetching current time:", error);
      return new Date().toLocaleTimeString();
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherData(latitude, longitude);
      },
      (error) => {
        console.error("Error getting location:", error);
        fetchWeatherData(null, null, "New Delhi");
      }
    );
  }, []);

  return (
    <div className="">
      <h1>Weather Dashboard</h1>
      <UserGroupToggle setUserGroup={setUserGroup} />
      {weatherData && (
        <WeatherDisplay
          data={weatherData}
          userGroup={userGroup}
          currentTime={currentTime}
        />
      )}
    </div>
  );
}

export default Home;
