
const hourlyForecast = document.querySelector(".hourly-scroll");


export const renderHourlyForecast = (data) => {
   
    const currentDate = new Date();

    currentDate.setHours(0,0,0,0);

    const daysOfWeak = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];
    data.list.forEach((item) => {
        const date = new Date(item.dt * 1000);
        const hour = date.getHours();
        const temp = Math.round(item.main.temp);
        const icon = item.weather[0].icon;

        const forecastData = new Date(date);
        forecastData.setHours(0,0,0,0);

        const timeDiff = forecastData.getTime() - currentDate.getTime();
        const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        
         let dayLable;
        if(dayDiff === 0){
           dayLable = "Сегодня"
        }else if(dayDiff === 1){
            dayLable = "Завтра"
        }else{
            dayLable = daysOfWeak(forecastData.getDate());
        }
    });
}