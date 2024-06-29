const General = ({ data, getWeatherIcon, currentTime }) => {
  console.log(currentTime, currentTime.split("")[0]);
  return (
    data && (
      <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-6 rounded-lg shadow-lg">
        <div className="  flex justify-around text-xl font-bold mb-4">
          <h2 className="">General Weather</h2>
          <span>
            {data?.name} ({data?.sys?.country})
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className=" flex-col md:flex-row flex justify-around items-center bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg p-4">
            <i
              className={`wi wi-time-${currentTime.split("")[0]} text-4xl mr-2`}
            ></i>
            <div>
              <p className="text-xl">Time</p>
              <p className="text-3xl font-bold">{currentTime}</p>
            </div>
          </div>
          <div className=" flex-col md:flex-row flex justify-around items-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 rounded-lg p-4">
            <i className={`wi wi-thermometer text-3xl mr-2`}></i>
            <div>
              <p className="text-xl">Temperature</p>
              <p className="text-3xl font-bold">{data.main.temp}°C</p>
            </div>
          </div>
          <div className=" flex-col md:flex-row flex justify-around items-center bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg p-4">
            <i
              className={`${getWeatherIcon(
                data.weather[0].main
              )} text-3xl mr-2`}
            ></i>
            <div>
              <p className="text-xl">Condition</p>
              <p className="text-3xl font-bold capitalize">
                {data.weather[0].description}
              </p>
            </div>
          </div>
          <div className=" flex-col md:flex-row flex justify-around items-center bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg p-4">
            <i className="wi wi-humidity text-3xl mr-2"></i>
            <div>
              <p className="text-xl">Humidity</p>
              <p className="text-3xl font-bold">{data.main.humidity}%</p>
            </div>
          </div>
          <div className=" flex-col md:flex-row flex justify-around items-center bg-gradient-to-r from-green-400 to-green-600 rounded-lg p-4">
            <i className="wi wi-windy text-3xl mr-2"></i>
            <div>
              <p className="text-xl">Wind Speed</p>
              <p className="text-3xl font-bold">{data.wind.speed} m/s</p>
            </div>
          </div>
          {data.sys && (
            <>
              <div className=" flex-col md:flex-row flex justify-around items-center bg-gradient-to-r from-red-400 to-red-600 rounded-lg p-4">
                <i className="wi wi-sunrise text-3xl mr-2"></i>
                <div>
                  <p className="text-xl">Sunrise</p>
                  <p className="text-3xl font-bold">
                    {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                  </p>
                </div>
              </div>
              <div className=" flex-col md:flex-row flex justify-around items-center bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-lg p-4">
                <i className="wi wi-sunset text-3xl mr-2"></i>
                <div>
                  <p className="text-xl">Sunset</p>
                  <p className="text-3xl font-bold">
                    {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </>
          )}
          {data.airQuality && (
            <div className=" flex-col md:flex-row flex justify-around items-center bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg p-4">
              <i className="wi wi-smoke text-3xl mr-2"></i>
              <div>
                <p className="text-xl">Air Quality Index</p>
                <p className="text-3xl font-bold">
                  {data.airQuality.list[0].main.aqi}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default General;
