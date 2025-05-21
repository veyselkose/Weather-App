import axios from "axios";
import { useEffect } from "react";
import { useMainContext } from "../context/MainContext";
import { getWeatherBackgroundColor, getActiveColor } from "../utils/colors";
import { getWeatherInfo } from "../utils/getWeatherInfo";
import convertDate from "../utils/convertDate";
import regionNamesConvert from "../utils/regionNamesConvert";

const api = {
  forecast: process.env.REACT_APP_API_URL_FORECAST,
  geo: process.env.REACT_APP_API_URL_GEO,
};

export function useSavedWeatherContent() {
  const { lang, savedList, tempType, setSavedWeatherContent } = useMainContext();
  useEffect(() => {
    setSavedWeatherContent([]);
    savedList.map((item, index) =>
      axios(`${api.geo}?name=${item}&count=1&language=${lang ? "tr" : "en"}`).then(
        (locationName) => {
          const { latitude, longitude } = locationName.data.results[0];
          const params = new URLSearchParams({
            latitude: latitude.toString(),
            longitude: longitude.toString(),
            current: "weather_code,temperature_2m,is_day",
          });
          if (tempType) {
            params.append("temperature_unit", "fahrenheit");
          }
          const url = `${api.forecast}?${params.toString()}`;
          axios(url).then((res) =>
            setSavedWeatherContent((oldvalue) => [
              ...oldvalue,
              [
                item,
                Math.round(res.data.current.temperature_2m),
                getWeatherInfo(res.data.current.weather_code, res.data.current.is_day, lang)
                  .iconUrl,
                index,
              ],
            ])
          );
        }
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedList, tempType]);
}

export function useWeather() {
  const { setWeatherData, tempType, lang, search, setSearch, setLoading } = useMainContext();
  useEffect(() => {
    axios(`${api.geo}?name=${search}&count=1&language=${lang ? "tr" : "en"}`)
      .then((locationName) => {
        const { latitude, longitude } = locationName.data.results[0];
        const params = new URLSearchParams({
          latitude: latitude.toString(),
          longitude: longitude.toString(),
          current:
            "temperature_2m,relative_humidity_2m,is_day,weather_code,wind_speed_10m,wind_direction_10m,apparent_temperature",
          daily:
            "temperature_2m_max,temperature_2m_min,temperature_2m_mean,sunrise,sunset,weathercode",
          hourly: "temperature_2m,weathercode,is_day",
          timeformat: "unixtime",
          forecast_hours: 24,
        });

        if (tempType) {
          params.append("temperature_unit", "fahrenheit");
        }

        const url = `${api.forecast}?${params.toString()}`;

        axios(url)
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
    currCityName: locationName.data.results[0].name,
    currCountryName: regionNamesConvert(locationName.data.results[0].country_code, lang),
    currDay: convertDate(weatherData.current.time, lang, locationName.data.results[0].timezone)
      .weakDay,
    currClock: convertDate(weatherData.current.time, lang, locationName.data.results[0].timezone)
      .hours,
    currIconId: getWeatherInfo(weatherData.current.weather_code, weatherData.current.is_day, lang)
      .iconUrl,
    currDescription: getWeatherInfo(
      weatherData.current.weather_code,
      weatherData.current.is_day,
      lang
    ).description,
    currTemp: Math.round(weatherData.current.temperature_2m),
    currFeelsLike: Math.round(weatherData.current.apparent_temperature),
    currTempMin: Math.round(weatherData.daily.temperature_2m_min[0]),
    currTempMax: Math.round(weatherData.daily.temperature_2m_max[0]),
    currHumidity: Math.round(weatherData.current.relative_humidity_2m),
    currSunrise: convertDate(
      weatherData.daily.sunrise[0],
      lang,
      locationName.data.results[0].timezone
    ).hours,
    currSunset: convertDate(
      weatherData.daily.sunset[0],
      lang,
      locationName.data.results[0].timezone
    ).hours,
    currWindSpeed: weatherData.current.wind_speed_10m.toFixed(1),
    currWindDeg: weatherData.current.wind_direction_10m,
    listHours: weatherData.hourly.temperature_2m
      .slice(1, 12)
      .filter((_, index) => index % 2 === 0)
      .map((temp, i) => ({
        temp: Math.round(temp),
        weatherCode: weatherData.hourly.weathercode[i + 1],
        color: getWeatherBackgroundColor(
          weatherData.hourly.weathercode[i + 1],
          weatherData.hourly.is_day[i + 1]
        ),
        icon: getWeatherInfo(
          weatherData.hourly.weathercode[i + 1],
          weatherData.hourly.is_day[i + 1],
          lang
        ).iconUrl,
        date: convertDate(
          weatherData.hourly.time[i + 1],
          lang,
          locationName.data.results[0].timezone
        ),
      })),
    listDaily: weatherData.daily.time.slice(1, 7).map((_, i) => ({
      min: Math.round(weatherData.daily.temperature_2m_min[i + 1]),
      max: Math.round(weatherData.daily.temperature_2m_max[i + 1]),
      mean: Math.round(weatherData.daily.temperature_2m_mean[i + 1]),
      color: getWeatherBackgroundColor(weatherData.daily.weathercode[i + 1], true),
      icon: getWeatherInfo(weatherData.daily.weathercode[i + 1], true, lang).iconUrl,
      date: convertDate(weatherData.daily.time[i + 1], lang, locationName.data.results[0].timezone),
    })),
    activeColor: getActiveColor(weatherData.current.weather_code, weatherData.current.is_day),
  };

  return mappedData;
}
