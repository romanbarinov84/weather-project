const dailyForecast = document.querySelector(".forecast-list");



export const renderDailyForecast = (data) => {
     
    //dailyForecast.innerHTML = "";

    const groupedData = groupDataByDay(data.list);
  
     Object.keys(groupedData).slice(0,5).forEach((dayKey) => {
        const dayData = groupedData[dayKey]
     })

};

const groupDataByDay = (list) => {
    const groupedData = {};

    list.forEach((item) => {
        const date = new Date(item.dt * 1000);
        const dayKey = date.toLocaleDateString("ru-RU");

        if(!groupedData[dayKey]){
            groupedData[dayKey] = [];
        }

        groupedData[dayKey].push(item);

    });

    return groupedData;
}