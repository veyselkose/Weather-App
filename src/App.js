import { useEffect } from "react";
import CurrentWeather from "./components/CurrentWeather";
import DayOrHour from "./components/DayOrHour";
import Header from "./components/Header";
import Highlight from "./components/Highlight";
import { useMainContext } from "./context/MainContext";

function App() {
  const { weatherData, theme, lang } = useMainContext();
  useEffect(() => {
    document.querySelector("body").className = theme ? "dark" : "";
  }, [theme]);
  useEffect(() => {
    document.documentElement.lang = lang ? "tr" : "en";
  }, [lang]);
  return (
    <main className={`bg-eee dark:bg-zinc-800 `} style={{"--day-color": weatherData.activeColor,}}>
      <Header />
      <div className="grid grid-cols-3 p-2 xl:px-0 weather-main">
        <div className="grid grid-cols-1 p-2 xl:p-4 grid-rows-1 col-span-6 lg:col-span-1">
          <CurrentWeather />
        </div>
        <div className="grid p-2 xl:p-4 gap-4 col-span-6 lg:col-span-2 ">
          <div className="col-span-1 row-span-1">
            <Highlight />
          </div>
          <div className="col-span-1 row-span-1">
            <DayOrHour />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
