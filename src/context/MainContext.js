import { createContext, useContext, useState, useEffect } from "react";

const MainContext = createContext();
export default function MainProvider({ children }) {
  const [search, setSearch] = useState("ankara");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState([]);
  const [savedList, setSavedList] = useState(
    JSON.parse(localStorage.getItem("savedList")) || [["Istanbul"], ["London"]]
  );
  const [savedWeatherContent, setSavedWeatherContent] = useState([]);
  const [theme, setTheme] = useState(localStorage.getItem("theme") === "true");
  const [lang, setLang] = useState(localStorage.getItem("lang") === "true");
  const [tempType, setTempType] = useState(localStorage.getItem("tempType") === "true");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("savedList", JSON.stringify(savedList));
    localStorage.setItem("lang", lang);
    localStorage.setItem("tempType", tempType);
  }, [theme, lang, tempType, savedList]);

  const values = {
    loading,
    setLoading,
    savedList,
    setSavedList,
    lang,
    setLang,
    search,
    setSearch,
    tempType,
    setTempType,
    theme,
    setTheme,
    weatherData,
    setWeatherData,
    savedWeatherContent,
    setSavedWeatherContent,
  };
  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
}
export const useMainContext = () => useContext(MainContext);
