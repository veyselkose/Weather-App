export function getActiveColor(weatherCode, isDay) {
  switch (weatherCode) {
    case 0:
    case 1:
    case 2:
      /* iconBase: "clear" == 0 */
      /* iconBase: "partly-cloudy" */

      return isDay ? "#F8AF18" : "#7CBED8";
    case 3:
      /* iconBase: "overcast" */

      return "#cfe0f9";
    case 45:
    case 48:
      /* iconBase: "fog" */

      return "#848B98";
    case 51:
    case 53:
      /* iconBase: "drizzle" */

      return "#5d87a1";
    case 55:
      /* iconBase: "extreme-drizzle" */

      return "#44697f";
    case 56:
    case 66:
    case 67:
      /* iconBase: "sleet" */

      return "#5c7e94";
    case 57:
      /* iconBase: "extreme-sleet" */

      return "#3e5f71";
    case 77:
      /* iconBase: "snowflake" */

      return "#6fa3c1";
    case 61:
    case 83:
    case 80:
    case 81:
      /* iconBase: "rain" */

      return "#0950BC";
    case 65:
    case 82:
      /* iconBase: "extreme-rain" */

      return "#4a5c6e";
    case 71:
    case 73:
    case 85:
      /* iconBase: "snow" */

      return "#5EAFCF";
    case 75:
    case 86:
      /* iconBase: "extreme-snow" */

      return "#a0b7c6";
    case 95:
      /* iconBase: "thunderstorms" */

      return "#f6a823";
    case 96:
      /* iconBase: "hail" */

      return "#86c3db";
    case 99:
      /* iconBase: "thunderstorms-rain" */

      return "#F59E0B";
    default:
      console.warn(`Color could not be determined for unknown weather code: ${weatherCode}`);
      return "#AAAAAA";
  }
}
