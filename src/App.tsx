// react
import { useEffect, useState } from 'react';

// hooks
import { useFetchWeatherApi } from './hooks/useFetch';

// types
import { TWeatherDataApi, TForecastWeatherDataApi } from './types/weatherDataApi';

function App() {
  const [locate, setLocate] = useState<string>('Londres')
  const {
    data: locateWeatherData,
    isFetching: fetchingLocateWeather
  } = useFetchWeatherApi<TWeatherDataApi>(`/weather?q=${locate}&lang=pt_br&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)

  const {
    data: forecastLocateWeatherData,
    isFetching: fetchingForecastLocateWeather
  } = useFetchWeatherApi<TForecastWeatherDataApi>(
    `/forecast?lat=${locateWeatherData?.coord.lat}&lon=${locateWeatherData?.coord.lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  )

  return (
    <>
      {fetchingLocateWeather ? (
        <h1>Loading ...</h1>
      ) : (
        <h1>{locateWeatherData?.weather[0].main}</h1>
      )}

      {fetchingForecastLocateWeather ? (
        <h1>Loading forecast ...</h1>
      ) : (
        <ul>
          {forecastLocateWeatherData?.list.map((forecastWeather, index) => (
            <li key={index}>{forecastWeather.main.temp_max} - {forecastWeather.main.temp_min}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
