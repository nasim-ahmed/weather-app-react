import React, { useState } from 'react';
import getCurrentDayForecast from '../helpers/getCurrentDayForecast';

const key = 'cbe3dd267a18f6c89943b3eff94f1ed7';
const baseURL = 'http://api.openweathermap.org/data/2.5/weather'


const useForecast = () => {
    const [error, setError] = useState(false);
    const [forecast, setForecast] = useState(null);


    const gatherForecastData = data => {
        const currentDay = getCurrentDayForecast(data);
        setForecast({ currentDay });
        console.log(currentDay);
    };


    const submitRequest = async location => {
        setError(false);
        const query = `?q=${location}&appid=${key}`;

        //make fetch call (promise call)
        const response = await fetch(baseURL + query);

        if (!response) return;
        //promise data
        const data = await response.json();
        if (!data) return;

        gatherForecastData(data);
    };


    return {
        error,
        forecast,
        submitRequest,
    };
};

export default useForecast;