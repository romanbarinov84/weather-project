import { apiKey,baseUrl } from "../API/apiKeyAndHost.js";
import { getForecast, getWeather } from "../API/getWetherAndForecast.js";
import { renderCurrentWeather } from "./currentWeather.js";
import { showError } from "./error.js";
import { renderDailyForecast } from "./renderDailyForecast.js";
import { renderHourlyForecast } from "./renderHourlyForecast.js";



export function geoLocation(){
    document.addEventListener("DOMContentLoaded", async () => {

        try {
            //получаем данные о широте и долготе
            const {latitude,longitude} = await getBrowserGeoLocation();
            //Получить название населенного пункта
            const locationName = await geoLocationName(latitude,longitude);
            await fetchWeatherByCoords(latitude,longitude,locationName);
            //Проброс полученных данных для получения прогноза погоды

        } catch (error) {
            //Обработка ошибок
            console.error("Ошибка при получении геолокации",error.message);
            showError("Не удалось определить ваше местоположение");

        }
    })
}

const getBrowserGeoLocation = () => {
    return new Promise((resolve,reject) => {
        if(!navigator.geolocation){
            reject(new Error("Геолокация не поддерживается вашим браузером"))
        }else{
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const {latitude,longitude} = position.coords;
                    resolve({latitude,longitude});
                },
                (error) => {
                    reject(error)
                }
            );
        }
    })
}

const geoLocationName = async (latitude,longitude) => {

   const reverseGeoCodingUrl = new URL(`${baseUrl}/geo/1.0/reverse`);

   const queryParams = new URLSearchParams({
    lat:latitude,
    lon:longitude,
    limit:1,
    appid:apiKey,
   });

   const url = `${reverseGeoCodingUrl}?${queryParams.toString()}`;

   try {
    const response = await fetch(url);
    const data = await response.json();

    if(data && data.length > 0){
        const {local_names} = data[0];
        const russianName = local_names.ru || data[0].name;
        return `${russianName}`;

    }else{
        throw new Error("Название места не найденно");
    }
   } catch (error) {
      console.error("Ошибка при получении названия места",error.message);
      showError("Ошибка при получении названия места")
   }
}


const fetchWeatherByCoords = async (latitude,longitude,locationName) => {

     try {
          const weatherData = await getWeather(latitude,longitude);
          const forecastData = await getForecast(latitude,longitude);


          renderCurrentWeather(weatherData,locationName);
          renderHourlyForecast(forecastData);
          renderDailyForecast(forecastData);

     } catch (error) {
        console.error(error.message);
        showError("Неудалось получить данные о погоде");
     }
}

