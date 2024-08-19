// react
import { useEffect, useState } from 'react';

// hooks
import { useFetchWeatherApi } from './hooks/useFetch';

// types
interface TWeather {
  base: string,
}

function App() {
  const [locate, setLocate] = useState<string>('London')
  const {
    data: weather,
    error,
    isFetching
  } = useFetchWeatherApi<TWeather>(`/weather?q=${locate}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)

  useEffect(() => {
    console.log(weather)
  })

  return (
    <>
      {isFetching ? (
        <h1>Loading ...</h1>
      ) : (
        <h1>{weather?.base}</h1>
      )}
    </>
  );
}

export default App;
