const currentCity = document.querySelector(".city");
const currentTemp = document.querySelector(".temperature");
const feelsLike = document.querySelector(".feels");
const currentDescription = document.querySelector(".description");
const currentWeatherIcon = document.querySelector(".weather-icon img");
const currentWind = document.querySelector(".wind");
const currentVisibility = document.querySelector(".visibility");
const currentHumidity = document.querySelector(".humidity");
const currentPressure = document.querySelector(".pressure");

export const renderCurrentWeather = (data, city) => {
  currentCity.textContent = city || "неизвестно";
  currentTemp.textContent = `${Math.round(data.main?.temp || 0)}°С`;
  feelsLike.textContent = `Ощущается как ${Math.round(data.main?.feels_like || 0)}°C`;
  currentDescription.textContent= data.weather?.[0]?.description || "неизвестно";
  currentWeatherIcon.src = `https://openweathermap.org/img/wn/${data.weather?.[0]?.icon || "icon"}@2x.png`;

  currentWind.textContent = `${Math.round(data.wind?.speed || 0)}м\с`;
  const visibility = data.visibility || 0 ;
  if(visibility > 1000){
    currentVisibility.textContent = `${(data.visibility / 1000).toFixed(1) } km `
  }else{
    currentVisibility.textContent = `${visibility} m`
  }
  currentHumidity.textContent = `${data.main?.humidity || 0}%`;
  currentPressure.textContent = `${Math.round((data.main?.pressure || 0)*0.750062)}мм.рт.ст`;
};
