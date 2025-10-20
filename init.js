import { getGeoData } from "./src/API/geoData.js";
import { getWeatherByForm } from "./src/components/inputForm.js";
import { switchTheme } from "./src/components/switchTheme.js";
import { renderCurrentTime } from "./src/helpers/currentTime.js";


export function initApp(){
    switchTheme();
    getGeoData();
    getWeatherByForm();
    renderCurrentTime();
}