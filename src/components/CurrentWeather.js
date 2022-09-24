import React from "react";
import { Icon } from "@iconify/react";
import { useMainContext } from "../context/MainContext";

function CurrentWeather() {
  const { tempType, weatherData, lang, savedList, setSavedList, loading } = useMainContext();
  return (
    <div
      className={`relative bg-white dark:bg-black dark:text-white p-6 flex flex-col items-center justify-center text-center rounded-24 ${
        !loading && "loading"
      } ${!loading && (lang ? "after:content-['Yükleniyor']" :"after:content-['loading']") }`}
    >
      <h4 className="text-2xl">
        {weatherData.currCityName},
        <br /> {weatherData.currCountryName}
      </h4>

      {savedList.filter((item) => item[0] === weatherData.currCityName).length > 0 ? (
        <button
          className="absolute top-4 right-4 text-red-500"
          id="savedRemove"
          title="savedRemove"
          onClick={() =>
            setSavedList(savedList.filter((item) => item[0] !== weatherData.currCityName))
          }
        >
          <Icon className="" icon="bi:bookmark-dash-fill" width="36" height="36" />
        </button>
      ) : (
        <button
          className="absolute top-4 right-4 day-color animated tada"
          id="savedAdd"
          title="savedAdd"
          onClick={() => setSavedList([...savedList, [weatherData.currCityName]])}
        >
          <Icon icon="bi:bookmark-plus-fill" width="36" height="36" />
        </button>
      )}

      <h1 className="text-5xl font-light mt-4">{weatherData.currDescription}</h1>
      <img
        src={require(`../icons/${weatherData.currIconId}.svg`)}
        className="h-48 w-48 mt-6"
        alt=""
      />
      <h1 className="day-color text-5xl font-light flex mt-4">
        {weatherData.currTemp}°{" "}
        <span className="text-2xl text-black dark:text-white">{tempType ? "F" : "C"}</span>
      </h1>
      <span className="font-light text-lg flex -mt-2">
        {lang ? "Hissedilen Sıcaklık" : "Feels Like"}: {weatherData.currFeelsLike}°
        <span className="text-xs mt-1">{tempType ? "F" : "C"}</span>
      </span>
      <h3 className="day-color text-4xl mt-4 font-light">
        {weatherData.currDay},{" "}
        <span className="text-black dark:text-white font-normal text-lg">
          {weatherData.currClock}
        </span>
      </h3>
    </div>
  );
}

export default CurrentWeather;
