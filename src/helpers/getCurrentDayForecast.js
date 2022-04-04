const kelvinToCelcius = (kelvin) => {
    const celcius = Math.round(kelvin - 273.15);
    return celcius
}

const getCurrentDayForecast = (data) => ({
    location: data.name.toString(),
    temperature: kelvinToCelcius(data.main.temp).toString(),
    humidity: Math.round(data.main.humidity).toString(),
    feelsLike: kelvinToCelcius(data.main.feels_like).toString(),
    condition: data.weather[0].description.toString(),
    maxTemp: kelvinToCelcius(data.main.temp_max).toString(),
    minTemp: kelvinToCelcius(data.main.temp_min).toString(),
});

export default getCurrentDayForecast;