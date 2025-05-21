export default function regionNamesConvert(countryCode, lang) {
    const regionName = new Intl.DisplayNames([lang], { type: "region" });
    return regionName.of(countryCode);
  }