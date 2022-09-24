import axios from "axios";
import { useEffect } from "react";
import { useMainContext } from "../context/MainContext";

const api = {
  key: process.env.REACT_APP_API_KEY,
  current: process.env.REACT_APP_API_URL_CURRENT,
  onecall: process.env.REACT_APP_API_URL_ONECALL,
  geo: process.env.REACT_APP_API_URL_GEO,
};

export function useSavedWeatherContent() {
  const { lang, savedList, tempType, setSavedWeatherContent } = useMainContext();
  useEffect(() => {
    setSavedWeatherContent([]);
    savedList.map((item, index) =>
      axios(
        `${api.current}?q=${item}&appid=${api.key}&units=${tempType ? "" : "metric"}&lang=${
          lang ? "tr" : "en"
        }`
      ).then((res) =>
        setSavedWeatherContent((oldvalue) => [
          ...oldvalue,
          [item, Math.round(res.data.main.temp), res.data.weather[0].icon, index],
        ])
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedList, tempType]);
}

export function useWeather() {
  const { setWeatherData, tempType, lang, search, setSearch, setLoading } = useMainContext();
  useEffect(() => {
    axios(`${api.geo}?q=${search}&limit=1&appid=${api.key}`)
      .then((locationName) => {
        axios(
          `${api.onecall}?lat=${locationName.data[0].lat}&lon=${
            locationName.data[0].lon
          }&exclude=minutely,alerts&appid=${api.key}&units=${tempType ? "" : "metric"}&lang=${
            lang ? "tr" : "en"
          }`
        )
          .then((result) => {
            setWeatherData(getProperties(result.data, lang ? "tr" : "en", locationName));
            setLoading(true);
          })
          .catch((e) => {
            setLoading(false);
          });
      })
      .catch((e) => {
        setLoading(false);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setWeatherData, tempType, lang, search, setSearch]);
}

function getProperties(weatherData, lang, locationName) {
  const mappedData = {
    currCityName: locationName.data[0].name,
    currCountryName: regionNamesConvert(locationName.data[0].country),
    currDay: convertDate(weatherData.current.dt, lang).weakDay,
    currClock: convertDate(weatherData.current.dt, lang).hours,
    currIconId: weatherData.current.weather[0].icon,
    currDescription: weatherData.current.weather[0].description,
    currTemp: Math.round(weatherData.current.temp),
    currFeelsLike: Math.round(weatherData.current.feels_like),
    currTempMin: Math.round(weatherData.daily[0].temp.min),
    currTempMax: Math.round(weatherData.daily[0].temp.max),
    currHumidity: Math.round(weatherData.current.humidity),
    currSunrise: convertDate(weatherData.current.sunrise, lang).hours,
    currSunset: convertDate(weatherData.current.sunset, lang).hours,
    currWindSpeed: (weatherData.current.wind_speed * 3.6).toFixed(1),
    currWindDeg: weatherData.current.wind_deg,
    listHours: weatherData.hourly
      .slice(1, 12)
      .filter((item, index) => (index % 2 === 0 ? item : "")),
    listDaily: weatherData.daily.slice(1, 7),
    activeColor: dayColor(weatherData.current.weather[0].icon),
  };
  function regionNamesConvert(countryCode) {
    const regionName = new Intl.DisplayNames([lang], { type: "region" });
    return regionName.of(countryCode);
  }
  return mappedData;
}

export default function convertDate(date, lang, type = "long") {
  return {
    weakDay: new Intl.DateTimeFormat(lang, {
      weekday: type,
    }).format(date * 1000),
    hours: new Intl.DateTimeFormat(lang, {
      hour: "2-digit",
      minute: "2-digit",
    }).format(date * 1000),
  };
}

export function dayColor(icon) {
  switch (icon) {
    case "01d":
      return "#F8AF18";
    case "01n":
      return "#7CBED8";
    case "02d":
      return "#F8AF18";
    case "02n":
      return "#7CBED8";
    case "03d":
      return "#cfe0f9";
    case "03n":
      return "#cfe0f9";
    case "04d":
      return "#848B98";
    case "04n":
      return "#848B98";
    case "09d":
      return "#0950BC";
    case "09n":
      return "#0950BC";
    case "10d":
      return "#0950BC";
    case "10n":
      return "#0950BC";
    case "11d":
      return "#F59E0B";
    case "11n":
      return "#F59E0B";
    case "13d":
      return "#5EAFCF";
    case "13n":
      return "#5EAFCF";
    default:
      break;
  }
}
