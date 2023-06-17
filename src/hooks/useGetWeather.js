import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { WEATHER_API_KEY } from '@env';

export const useGetWeather = () => {
    const [isLoading, setLoading] = useState(true);
    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [weather, setWeather] = useState([]);
  
    const fetchWeatherData = async () => {
      const URL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
      const response = await fetch(URL);
      const json = await response.json();
      setWeather(json);
    };
  
    useEffect(() => {
      (
        async() => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Ops, the permission to access the device location was denied!');
          } else {
            let location = await Location.getCurrentPositionAsync();
            setLat(location.coords.latitude);
            setLon(location.coords.longitude);
            try {
              await fetchWeatherData();
            } catch (err) {
              setErrorMsg('Sorry, but we could not fetch the weather data...');
            }
          }
          setLoading(false);
        }
      )();
    }, [lat, lon]);
  
    return [isLoading, errorMsg, weather];
};
