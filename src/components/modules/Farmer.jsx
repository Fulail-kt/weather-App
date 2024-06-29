const Farmer = ({ data, getWeatherIcon }) => {
  console.log(data, "ddd");
  return (
    data && (
      <div className="weather-display rounded-md w-full flex bg_farmer flex-col py-5 items-center justify-center ">
        <div className=" bg-white flex justify-around opacity-50 w-[90%] text-xl text-gray-600 font-sans font-bold rounded-md shadow-md py-2">
          <h2 className="text-center ">Farmer's Weather</h2>
          <span>
            {data?.name} ({data?.sys?.country})
          </span>
        </div>
        <div className="w-full relative md:right-12">
          <div className="flex relative w-full justify-center flex-wrap">
            <div className="hexagon flex justify-center items-center mr-1 m-2 border rounded-md px-2 w-40 h-36 bg-gradient-to-r from-blue-300 to-blue-500 text-white shadow-md">
              <p className=" font-medium">Temperature: {data.main.temp}°C</p>
            </div>
            <div className="hexagon flex justify-center items-center m-2 border w-48 h-20 rounded-md px-2 bg-gradient-to-r from-yellow-300 to-yellow-500 text-white shadow-md">
              <p className="font-medium">
                Condition:
                <br /> {data.weather[0].description}
                <br />
                <i className={`${getWeatherIcon(data.weather[0].main)} `}></i>
              </p>
            </div>
            <div className="hexagon hidden lg:flex justify-center items-center m-2 border w-24 h-44 absolute ml-2 right-44 rounded-md px-2 bg-gradient-to-r from-purple-300 to-purple-500 text-white shadow-md">
              <p className=" font-medium">
                Humidity: <i className="wi wi-humidity"></i>{" "}
                {data.main.humidity}%
              </p>
            </div>
            <div className="hexagon flex justify-center items-center border md:absolute md:ml-44 bottom-0 w-48 h-16 px-2 rounded-md bg-gradient-to-r from-teal-300 to-teal-500 text-white shadow-md">
              <p className=" font-medium">
                Wind Speed: {data.wind.speed} m/s{" "}
                <i
                  className={`wi wi-wind-beaufort-${Math.round(
                    data.wind.speed
                  )}`}
                ></i>
              </p>
            </div>
          </div>
          <div className="flex relative w-full justify-center flex-wrap">
            {data.sys && (
              <>
                <div className="hexagon flex justify-center items-center m-2 mr-1 border rounded-md w-44 h-36 bg-gradient-to-r from-pink-300 to-pink-500 text-white shadow-md">
                  <p className=" font-medium">
                    Sunrise:{" "}
                    {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}{" "}
                    <br /> <i className="wi wi-sunrise"></i>{" "}
                  </p>
                </div>
                <div className="hexagon flex justify-center items-center m-2 border rounded-md w-44 h-36 bg-gradient-to-r from-orange-300 to-orange-500 text-white shadow-md">
                  <p className=" font-medium">
                    Sunset:{" "}
                    {new Date(data.sys.sunset * 1000).toLocaleTimeString()}{" "}
                    <br /> <i className="wi wi-sunset"></i>{" "}
                  </p>
                </div>
              </>
            )}
            <div className="hexagon hidden lg:flex justify-center items-center border absolute w-24 bottom-2 rounded-md h-28 mr-2 right-44 bg-gradient-to-r from-red-300 to-red-500 text-white shadow-md">
              <p className=" font-medium">
                Pressure:
                <br /> {data.main.pressure} hPa{" "}
                <i className="wi wi-barometer"></i>
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center flex-wrap">
          <div className="hexagon lg:hidden flex justify-center items-center m-1 border rounded-md h-24 w-32 bg-gradient-to-r from-red-300 to-red-500 text-white shadow-md">
            <p className=" font-medium">
              Pressure:
              <br /> {data.main.pressure} hPa{" "}
              <i className="wi wi-barometer"></i>
            </p>
          </div>
          <div className="hexagon lg:hidden flex justify-center items-center m-1 border w-56 h-24 rounded-md px-2 bg-gradient-to-r from-purple-300 to-purple-500 text-white shadow-md">
            <p className=" font-medium">
              Humidity: <i className="wi wi-humidity"></i> {data.main.humidity}%
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default Farmer;
