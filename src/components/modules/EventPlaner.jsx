import TodoList from "../TodoList";

const EventPlaner = ({ data, getWeatherIcon }) => {
  return (
    data && (
      <>
        <div className=" flex justify-center items-center flex-col bg-gradient-to-b from-purple-400 to-blue-600 p-6 rounded-lg">
          <div className="weather-display w-full flex flex-col py-5 items-center justify-center">
            <div className=" bg-white flex justify-around opacity-50 w-[90%] text-xl text-gray-600 font-sans font-bold rounded-md shadow-md py-2">
              <h2 className="text-center ">Event Planner's Weather</h2>
              <span>
                {data?.name} ({data?.sys?.country})
              </span>
            </div>
            <div className="w-full relative">
              <div className="flex flex-wrap justify-center mt-4">
                <div className="weather-card bg-gradient-to-b from-yellow-400 to-yellow-600 p-4 m-2 rounded-md shadow-lg flex flex-col items-center justify-center w-40 h-36">
                  <i className="wi wi-thermometer text-4xl text-white mb-2"></i>
                  <p className="text-white">Temperature</p>
                  <p className="text-2xl font-semibold text-white">
                    {data.main.temp}°C
                  </p>
                </div>
                <div className="weather-card bg-gradient-to-b from-indigo-400 to-indigo-600 p-4 m-2 rounded-md shadow-lg flex flex-col items-center justify-center w-40 h-36">
                  <p className="text-white">Condition</p>
                  <p className="text-lg font-semibold capitalize text-white">
                    {data.weather[0].description} <br />
                    <i
                      className={`${getWeatherIcon(data.weather[0].main)}`}
                    ></i>
                  </p>
                </div>
                <div className="weather-card bg-gradient-to-b from-green-400 to-green-600 p-4 m-2 rounded-md shadow-lg flex flex-col items-center justify-center w-40 h-36">
                  <i className="wi wi-humidity text-4xl text-white mb-2"></i>
                  <p className="text-white">Humidity</p>
                  <p className="text-2xl font-semibold text-white">
                    {data.main.humidity}%
                  </p>
                </div>
                <div className="weather-card bg-gradient-to-b from-red-400 to-red-600 p-4 m-2 rounded-md shadow-lg flex flex-col items-center justify-center w-40 h-36">
                  <i
                    className={`wi wi-wind-beaufort-${Math.round(
                      data.wind.speed
                    )} text-4xl text-white mb-2`}
                  ></i>
                  <p className="text-white">Wind Speed</p>
                  <p className="text-2xl font-semibold text-white">
                    {data.wind.speed} m/s
                  </p>
                </div>
                <div className="weather-card bg-gradient-to-b from-pink-400 to-pink-600 p-4 m-2 rounded-md shadow-lg flex flex-col items-center justify-center w-40 h-36">
                  <i className="wi wi-cloud text-4xl text-white mb-2"></i>
                  <p className="text-white">Cloudiness</p>
                  <p className="text-2xl font-semibold text-white">
                    {data.clouds.all}%
                  </p>
                </div>
                {data.rain && (
                  <div className="weather-card bg-gradient-to-b from-blue-400 to-blue-600 p-4 m-2 rounded-md shadow-lg flex flex-col items-center justify-center w-40 h-36">
                    <i className="wi wi-rain text-4xl text-white mb-2"></i>
                    <p className="text-white">Rain (last 1h)</p>
                    <p className="text-2xl font-semibold text-white">
                      {data.rain["1h"]} mm
                    </p>
                  </div>
                )}
                {!data.rain && (
                  <div className="weather-card bg-gradient-to-b from-teal-400 to-teal-600 p-4 m-2 rounded-md shadow-lg flex flex-col items-center justify-center w-40 h-36">
                    <i className="wi wi-barometer text-4xl text-white mb-2"></i>
                    <p className="text-white">Pressure</p>
                    <p className="text-2xl font-semibold text-white">
                      {data.main.pressure} hPa
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-4">
              <TodoList />
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default EventPlaner;
