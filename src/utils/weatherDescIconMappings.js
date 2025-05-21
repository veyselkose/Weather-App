const weatherDescIconMappings = {
  0: {
    descriptions: { en: "Clear sky", tr: "Açık gökyüzü" },
    iconBase: "clear",
    needsDayNightSuffix: true,
  },
  1: {
    descriptions: { en: "Mainly clear", tr: "Esas olarak açık" },
    iconBase: "partly-cloudy",
    needsDayNightSuffix: true,
  },
  2: {
    descriptions: { en: "Partly cloudy", tr: "Parçalı bulutlu" },
    iconBase: "partly-cloudy",
    needsDayNightSuffix: true,
  },
  3: {
    descriptions: { en: "Overcast", tr: "Kapalı" },
    iconBase: "overcast",
    needsDayNightSuffix: true,
  }, // bmcdn'de cloudy.svg var, overcast yok
  45: { 
    descriptions: { en: "Fog", tr: "Sis" },
    iconBase: "fog",
    // https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-day-fog.svg

    needsDayNightSuffix: false
   },
  48: {
    descriptions: { en: "Depositing rime fog", tr: "Kırağı Sisi" },
    iconBase: "fog",
    needsDayNightSuffix: false,
  }, // İkon olarak sis ile aynı
  51: {
    descriptions: { en: "Drizzle: Light intensity", tr: "Çiseleme: Hafif" },
    iconBase: "drizzle",
    needsDayNightSuffix: false,
  },
  53: {
    descriptions: { en: "Drizzle: Moderate intensity", tr: "Çiseleme: Orta" },
    iconBase: "drizzle",
    needsDayNightSuffix: false,
  },
  55: {
    descriptions: { en: "Drizzle: Dense intensity", tr: "Çiseleme: Yoğun" },
    iconBase: "extreme-drizzle",
    needsDayNightSuffix: false,
  },
  56: {
    descriptions: { en: "Freezing Drizzle: Light intensity", tr: "Donan Çiseleme: Hafif" },
    iconBase: "sleet",
    needsDayNightSuffix: false,
  }, // Karışık yağış ikonu
  57: {
    descriptions: { en: "Freezing Drizzle: Dense intensity", tr: "Donan Çiseleme: Yoğun" },
    iconBase: "extreme-sleet",
    needsDayNightSuffix: false,
  }, // Karışık yağış ikonu
  61: {
    descriptions: { en: "Rain: Slight intensity", tr: "Yağmur: Hafif" },
    iconBase: "rain",
    needsDayNightSuffix: false,
  },
  63: {
    descriptions: { en: "Rain: Moderate intensity", tr: "Yağmur: Orta" },
    iconBase: "rain",
    needsDayNightSuffix: false,
  },
  65: {
    descriptions: { en: "Rain: Heavy intensity", tr: "Yağmur: Yoğun" },
    iconBase: "extreme-rain",
    needsDayNightSuffix: false,
  }, // Belki 'extreme-rain' gibi bmcdn'de varsa ona map edilebilir? Şimdilik 'rain'
  66: {
    descriptions: { en: "Freezing Rain: Light intensity", tr: "Donan Yağmur: Hafif" },
    iconBase: "sleet",
    needsDayNightSuffix: false,
  }, // Karışık yağış ikonu
  67: {
    descriptions: { en: "Freezing Rain: Heavy intensity", tr: "Donan Yağmur: Yoğun" },
    iconBase: "sleet",
    needsDayNightSuffix: false,
  }, // Karışık yağış ikonu
  71: {
    descriptions: { en: "Snow fall: Slight intensity", tr: "Kar Yağışı: Hafif" },
    iconBase: "snow",
    needsDayNightSuffix: false,
  },
  73: {
    descriptions: { en: "Snow fall: Moderate intensity", tr: "Kar Yağışı: Orta" },
    iconBase: "snow",
    needsDayNightSuffix: false,
  },
  75: {
    descriptions: { en: "Snow fall: Heavy intensity", tr: "Kar Yağışı: Yoğun" },
    iconBase: "extreme-snow",
    needsDayNightSuffix: false,
  }, // Belki 'extreme-snow'? Şimdilik 'snow'
  77: {
    descriptions: { en: "Snow grains", tr: "Kar Taneleri" },
    iconBase: "snowflake",
    needsDayNightSuffix: false,
  }, // Genellikle kar ikonu kullanılır
  80: {
    descriptions: { en: "Rain showers: Slight", tr: "Yağmur Sağanakları: Hafif" },
    iconBase: "rain",
    needsDayNightSuffix: false,
  },
  81: {
    descriptions: { en: "Rain showers: Moderate", tr: "Yağmur Sağanakları: Orta" },
    iconBase: "rain",
    needsDayNightSuffix: false,
  },
  82: {
    descriptions: { en: "Rain showers: Violent", tr: "Yağmur Sağanakları: Şiddetli" },
    iconBase: "extreme-rain",
    needsDayNightSuffix: false,
  }, // Belki 'extreme-showers'? Şimdilik 'showers'
  85: {
    descriptions: { en: "Snow showers: Slight", tr: "Kar Sağanakları: Hafif" },
    iconBase: "snow",
    needsDayNightSuffix: false,
  }, // bmcdn'de snow-showers yok, 'snow' kullanılıyor
  86: {
    descriptions: { en: "Snow showers: Heavy", tr: "Kar Sağanakları: Şiddetli" },
    iconBase: "extreme-snow",
    needsDayNightSuffix: false,
  }, // bmcdn'de snow-showers yok, 'snow' kullanılıyor
  95: {
    descriptions: {
      en: "Thunderstorm: Slight or moderate",
      tr: "Gök Gürültülü Fırtına: Hafif/Orta",
    },
    iconBase: "thunderstorms",
    needsDayNightSuffix: true,
  },
  96: {
    descriptions: {
      en: "Thunderstorm with slight hail",
      tr: "Hafif Dolu ile Gök Gürültülü Fırt.",
    },
    iconBase: "hail",
    needsDayNightSuffix: false,
  }, // bmcdn'de hail içeren T-storm ikonu 'thunderstorms-rain' gibi görünüyor
  99: {
    descriptions: { en: "Thunderstorm with heavy hail", tr: "Şiddetli Dolu ile Gök Gür. Fırt." },
    iconBase: "thunderstorms-rain",
    needsDayNightSuffix: false,
  }, // bmcdn'de 'extreme' yok, 'thunderstorms-rain' veya belki 'hail.svg'? Şimdilik T-storm öncelikli.
};

export default weatherDescIconMappings;
