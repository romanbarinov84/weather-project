import { getGeoData } from "./src/API/geoData.js";
import { geoLocation } from "./src/components/geoLocation.js";
import { getWeatherByForm } from "./src/components/inputForm.js";
import { scrollTop } from "./src/components/scrollToTop.js";
import { switchTheme } from "./src/components/switchTheme.js";
import { renderCurrentTime } from "./src/helpers/currentTime.js";


export function initApp(){
    switchTheme();
    getGeoData();
    getWeatherByForm();
    renderCurrentTime();
    geoLocation();
    scrollTop();
}