import { useMainContext } from "../context/MainContext";

function SavedWeather({ city, icon, scroll, temp }) {
  const { tempType, setSavedList, savedList, setSearch, setLoading } = useMainContext();
  return (
    <div
      className="bg-white dark:bg-black dark:text-white mt-4 xl:mt-0 rounded-24 xl:rounded-none translate-reset flex group items-center justify-center px-4 flex-shrink-0 h-12 xl:w-52 xl:h-full hover:bg-gray-200 duration-300 xl:transition-all dark:hover:bg-zinc-700 dark:border-zinc-600 cursor-pointer xl:border-r"
      style={{ transform: `translateX(-${scroll}rem)` }}
      onClick={() => {
        setSearch(city);
        setLoading(false)
      }}
    >
      <span>{city}</span>
      <img
        src={require(`../icons/${icon}.svg`)}
        className="ml-5 h-6 w-6"
        alt="saved weather icon"
      />
      <span className="ml-2">
        {temp}°{tempType ? "F" : "C"}
      </span>
      <button
        id={"savedWeatherDelete"+city}
        title="savedWeatherDelete"
        onClick={() => {
          setSavedList(savedList.filter((item) => item !== city));
        }}
        className="ml-auto transition-all xl:font-light flex xl:opacity-0 group-hover:opacity-100 active:bg-black bg-red-600 h-8 w-8 xl:h-4 xl:w-4 rounded-full text-white justify-center items-center"
      >
        -
      </button>
    </div>
  );
}

export default SavedWeather;
