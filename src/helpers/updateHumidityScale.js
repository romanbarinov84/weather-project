
export function updateHumidityScale(humidity){
    const parameter = document.querySelector(".parameter");

    parameter.style.width = `${humidity}%`
}