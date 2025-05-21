export function getWeatherBackgroundColor(weatherCode, isDay) {
  const weatherCodes = [
    0, 1, 2, 3, 45, 48, 51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 71, 73, 75, 77, 80, 81, 82, 85, 86,
    95, 96, 99,
  ];
  const suffix = isDay ? "-day" : "-night";
  let baseClass = "bg-wmo-unknown";
  if (weatherCodes.includes(weatherCode)) {
    baseClass = `bg-wmo-${weatherCode}${suffix}`;
  } else {
    baseClass = "bg-wmo-unknown";
  }
  return baseClass;
}
