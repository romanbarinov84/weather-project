import { getGeoData } from "../API/geoData.js";
import { showRecentCities } from "./showRecentCities.js";

const searchForm = document.querySelector(".search-form");
export const cityInput = document.querySelector(".city-input");

export async function getWeatherByForm() {
  searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    getGeoData(cityInput);
  });

  cityInput.addEventListener("focus", () => {
    showRecentCities();
  });
}
