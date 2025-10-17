import { getGeoData } from "../API/geoData.js";

const searchForm = document.querySelector(".search-form");
export const cityInput = document.querySelector(".city-input");


export function getWeatherByForm(){
searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  getGeoData(cityInput);
});
    
}
