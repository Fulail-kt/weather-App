import General from "./modules/General";
import Traveler from "./modules/Traveler";
import EventPlaner from "./modules/EventPlaner";
import Farmer from "./modules/Farmer";

function WeatherDisplay({ data, userGroup, currentTime }) {
  if (!data) {
    return <div>Loading weather data...</div>;
  }

  const getWeatherIcon = (description) => {
    switch (description.toLowerCase()) {
      case "clear":
        return "wi wi-day-sunny";
      case "clouds":
        return "wi wi-day-cloudy";
      case "rain":
        return "wi wi-day-rain";
      case "snow":
        return "wi wi-day-snow";
      case "thunderstorm":
        return "wi wi-day-thunderstorm";
      case "mist":
        return "wi wi-day-fog";
      default:
        return "wi wi-day-cloudy";
    }
  };

  const renderWeatherForGroup = () => {
    switch (userGroup) {
      case "farmer":
        return <Farmer data={data} getWeatherIcon={getWeatherIcon} />;

      case "eventPlanner":
        return <EventPlaner data={data} getWeatherIcon={getWeatherIcon} />;

      case "traveler":
        return <Traveler data={data} getWeatherIcon={getWeatherIcon} />;

      case "general":
      default:
        return (
          <General
            data={data}
            getWeatherIcon={getWeatherIcon}
            currentTime={currentTime}
          />
        );
    }
  };

  return <div>{renderWeatherForGroup()}</div>;
}

export default WeatherDisplay;
