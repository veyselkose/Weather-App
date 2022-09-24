import React from "react";
import { useMainContext } from "../context/MainContext";

function Highlight() {
  const { tempType, weatherData, lang, loading } = useMainContext();
  return (
    <div
      className={`flex flex-wrap xl:flex-nowrap justify-between bg-white  dark:bg-black xl:h-full rounded-24 p-6 xl:gap-4 relative ${
        !loading && "loading"
      } ${!loading && (lang ? "after:content-['Yükleniyor']" : "after:content-['loading']")}`}
    >
      <div className="w-full md:w-1/2 p-5 2xl:flex-1 ">
        <h3 className="text-xl text-gray-500 dark:text-white font-medium">
          {lang ? "Sıcaklıklar" : "Tempratures"}
        </h3>
        <div className="flex items-center">
          <img
            src={require(`../icons/thermometer-warmer.svg`).default}
            alt=""
            className="-ml-8 h-24 w-24"
          />
          <span className="text-lg text-gray-600 dark:text-slate-200">
            Max: {weatherData.currTempMax}°{tempType ? "F" : "C"}
          </span>
        </div>
        <div className="flex items-center">
          <img
            src={require(`../icons/thermometer-colder.svg`).default}
            alt=""
            className="-ml-8 h-24 w-24"
          />
          <span className="text-lg text-gray-600 dark:text-slate-200">
            Min: {weatherData.currTempMin}°{tempType ? "F" : "C"}
          </span>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-5 2xl:flex-1 xl:border-l border-t sm:border-t-transparent dark:border-zinc-600 dark:sm:border-t-transparent">
        <h3 className="text-xl text-gray-500 dark:text-white  font-medium">
          {lang ? "Nem" : "Humidity"}
        </h3>
        <div className="flex items-center">
          <span className="text-5xl font-medium day-color">
            {weatherData.currHumidity}
            <span className="text-lg text-gray-500 dark:text-white">%</span>
          </span>
          <img src={require(`../icons/humidity.svg`).default} alt="" className="h-24 w-24" />
        </div>
        <div className="flex items-center mt-7">
          <span className="text-2xl text-gray-600 dark:text-slate-200">
            {lang
              ? weatherData.humidity < 30
                ? "Düşük 👎🏻"
                : weatherData.humidity >= 30 && weatherData.humidity < 60
                ? "Normal 👌🏻"
                : "Yüksek 👍🏻"
              : weatherData.humidity < 30
              ? "Low 👎🏻"
              : weatherData.humidity >= 30 && weatherData.humidity < 60
              ? "Normal 👌🏻"
              : "High 👍🏻"}
          </span>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-5 2xl:flex-1 xl:border-l border-t sm:border-t-transparent dark:border-zinc-600 dark:sm:border-t-transparent">
        <h3 className="text-xl text-gray-500 dark:text-white  font-medium">
          {lang ? "Doğumu & Batımı" : "Sunrise & Sunset"}
        </h3>
        <div className="flex items-center">
          <img src={require(`../icons/sunrise.svg`).default} alt="" className="h-24 w-24" />
          <span className="text-lg ml-2 text-gray-600 dark:text-slate-200">
            {weatherData.currSunrise}
          </span>
        </div>
        <div className="flex items-center">
          <img src={require(`../icons/sunset.svg`).default} alt="" className="h-24 w-24" />
          <span className="text-lg ml-2 text-gray-600 dark:text-slate-200">
            {weatherData.currSunset}
          </span>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-5 2xl:flex-1 xl:border-l border-t sm:border-t-transparent dark:border-zinc-600 dark:sm:border-t-transparent">
        <h3 className="text-xl text-gray-500 dark:text-white  font-medium">
          {lang ? "Rüzgar Durumu" : "Wind Status"}
        </h3>
        <div className="flex items-center mt-4">
          <span className="text-5xl font-medium day-color">
            {weatherData.currWindSpeed}
            <span className="text-lg text-gray-500 dark:text-white">Km/h</span>
          </span>
          <img src={require(`../icons/windsock.svg`).default} alt="" className="h-14 w-14" />
        </div>
        <div className="flex items-center mt-4">
          <img
            src={require(`../icons/compass.svg`).default}
            alt=""
            className="h-24 w-24 -ml-5"
            style={{ transform: `rotate(${weatherData.currWindDeg}deg)` }}
          />
          <span className="text-lg text-gray-600 dark:text-slate-200">
            {lang ? "Yönü" : "Direction"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Highlight;
