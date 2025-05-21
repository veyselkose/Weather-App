export default function convertDate(date, lang, timezone = "Europe/Istanbul", type = "long") {
  if (!date) {
    return { weakDay: "", hours: "" };
  }

  const dateObj = new Date(date * 1000);

  if (isNaN(dateObj)) {
    return { weakDay: "", hours: "" };
  }

  return {
    weakDay: new Intl.DateTimeFormat(lang, {
      weekday: type,
    }).format(dateObj),
    hours: new Intl.DateTimeFormat(lang, {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
    }).format(dateObj),
  };
}
