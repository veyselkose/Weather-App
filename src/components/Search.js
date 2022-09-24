import React from "react";
import { useMainContext } from "../context/MainContext";
import { useWeather } from "../hooks/useWeather";
function Search() {
  const { setSearch, lang } = useMainContext();
  useWeather();
  return (
    <input
      onChange={(e) => setSearch(e.target.value)}
      type="search"
      className="px-3 mr-6 py-2 w-64 transition-all focus:bg-gray-300 focus:placeholder:text-black dark:focus:placeholder:text-zinc-200 dark:text-zinc-200 outline-none rounded-full bg-eee dark:bg-zinc-800 "
      placeholder={lang ? "Şehir giriniz" : "Search City"}
    />
  );
}

export default Search;
