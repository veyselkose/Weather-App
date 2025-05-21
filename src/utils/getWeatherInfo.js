import weatherDescIconMappings from "./weatherDescIconMappings";

export function getWeatherInfo(weatherCode, isDay, lang = "en") {
  const iconBaseUrl = "images/icons/";
  const mapping = weatherDescIconMappings[weatherCode];
  const validLang = lang === "tr" ? "tr" : "en";
  if (!mapping) {
    console.warn(`Unknown weather code received: ${weatherCode}`);
    return {
      description: validLang === "tr" ? "Bilinmeyen Durum" : "Unknown Condition",
      iconUrl: `${iconBaseUrl}not-available.svg`, // veya 'alert-circle.svg' gibi
    };
  }

  let iconName = mapping.iconBase;
  if (mapping.needsDayNightSuffix) {
    iconName += isDay ? "-day" : "-night";
  }

  const finalIconUrl = `${iconBaseUrl}${iconName}.svg`;
  const description = mapping.descriptions[validLang];

  return {
    description: description,
    iconUrl: finalIconUrl,
  };
}
