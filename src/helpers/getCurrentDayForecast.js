const klevinToCelcius = (kelvin) => {
    const celcius = Math.round(kelvin - 273.15);
    return celcius
}

const getCurrentDayForecast = (data) => ({
    location: data.name,
    temperature: klevinToCelcius(data.main.temp),
});


export default getCurrentDayForecast;