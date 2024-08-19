// react
import { useEffect, useState } from 'react';

// hooks
import { useFetchWeatherApi } from './hooks/useFetch';

// types
import { TWeatherDataApi } from './types/weatherDataApi';

function App() {
  const [locate, setLocate] = useState<string>('Londres')
  const {
    data: locateWeather,
    error,
    isFetching: fetchingLocateWeather
  } = useFetchWeatherApi<TWeatherDataApi>(`/weather?q=${locate}&lang=pt_br&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)

  const { data: forecastLocateWeather, isFetching: fetchingForecastLocateWeather } = useFetchWeatherApi(
    `/forecast?lat=${locateWeather?.coord.lat}&lon=${locateWeather?.coord.lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  )

  useEffect(() => {
    console.log(locateWeather)
    console.log(forecastLocateWeather)
  })

  return (
    <>
      {fetchingLocateWeather ? (
        <h1>Loading ...</h1>
      ) : (
        <h1>{locateWeather?.weather[0].main}</h1>
      )}
    </>
  );
}

export default App;
