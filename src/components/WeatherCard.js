import { useMainContext } from "../context/MainContext";

function WeatherCard({ day, time, temp, icon, color, isDay = false }) {
  const { tempType } = useMainContext();
  return (
    <div
      className={`hover:animate-pulse flex flex-col justify-center items-center rounded-24 flex-1 py-2 ${color}`}
    >
      <h3 className="font-light text-2xl">{day}</h3>
      <span className={`font-light text-lg sm:mt-2 ${isDay ? "opacity-0" : "opacity-100"}`}>{time}</span>
      <img className="h-20 w-20" src={icon} alt="" />
      <span className="font-light text-lg sm:mt-2">
        {temp}°{tempType ? "F" : "C"}
      </span>
    </div>
  );
}

export default WeatherCard;
