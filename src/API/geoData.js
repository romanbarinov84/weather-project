import { apiKey, baseUrl } from "./apiKeyAndHost.js";
import { cityInput } from "../components/inputForm.js";
import { showError } from "../components/error.js";
import { isCyrillic } from "../helpers/checkCyrillic.js";
import { replaceAbbreviation } from "../helpers/cityAbbraviation.js";
import { saveCityToLocalStorage } from "../helpers/saveCityToLocalStorage.js";
import { getForecast, getWeather } from "./getWetherAndForecast.js";
import { renderCurrentWeather } from "../components/currentWeather.js";

export async function getGeoData() {
  let city = cityInput.value.trim();

  if (!city) {
    return;
  }

  if (!isCyrillic(city)) {
    showError("Проверте название города");
    return;
  }

  city = replaceAbbreviation(city);

  try {
    const geoUrl = `${baseUrl}/geo/1.0/direct`;
    const queryParams = new URLSearchParams({
      q: city,
      limit: 1,
      appid: apiKey,
    });

    const geoResponse = await fetch(`${geoUrl}?${queryParams.toString()}`);

    const geoData = await geoResponse.json();

    if (!geoData.length) {
      throw new Error("Город не найден");
    }

    const { lat, lon } = geoData[0];

    saveCityToLocalStorage(city);

    const weatherData = await getWeather(lat, lon);
    const forecastData = await getForecast(lat, lon);

    console.log(weatherData);
    console.log(forecastData);

     renderCurrentWeather(weatherData,city);
  } catch (error) {
     showError(error.message || "Данные не получены");
  }
}
