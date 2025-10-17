import { getGeoData } from "./src/API/geoData.js";
import { getWeatherByForm } from "./src/components/inputForm.js";
import { switchTheme } from "./src/components/switchTheme.js";


export function initApp(){
    switchTheme()
    getGeoData();
    getWeatherByForm();
}