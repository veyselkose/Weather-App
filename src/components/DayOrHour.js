import { useState } from "react";
import { useMainContext } from "../context/MainContext";
import WeatherCard from "./WeatherCard";

function DayOrHour() {
  const [DayOrHour, setDayOrHour] = useState(false);
  const { weatherData, lang, loading } = useMainContext();
  return (
    <div
      className={`bg-white dark:bg-black xl:h-full rounded-24 p-6 relative ${
        !loading && "loading"
      } ${!loading && (lang ? "after:content-['Yükleniyor']" : "after:content-['loading']")}`}
    >
      <label className="switch mb-4 " htmlFor="DayOrHour">
        <input
          type="checkbox"
          id="DayOrHour"
          checked={DayOrHour}
          onChange={() => setDayOrHour(!DayOrHour)}
        />
        <span className="slider dark:bg-zinc-800 day-color">
          <span className="z-10 w-2/4 text-center">{lang ? "Saat" : "Hour"}</span>
          <span className="w-2/4 text-center ml-auto z-10">{lang ? "Gün" : "Day"}</span>
        </span>
      </label>
      <div className="grid xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-4">
        {DayOrHour
          ? weatherData?.listDaily?.map((item, index) => (
              <WeatherCard
                temp={Math.round(item.max)}
                isDay={true}
                day={item.date.weakDay}
                time={item.date.hours}
                icon={item.icon}
                color={item.color}
                key={index}
              />
            ))
          : weatherData?.listHours?.map((item, index) => (
              <WeatherCard
                temp={Math.round(item.temp)}
                day={item.date.weakDay}
                time={item.date.hours}
                icon={item.icon}
                color={item.color}
                key={index}
              />
            ))}
      </div>
    </div>
  );
}

export default DayOrHour;
