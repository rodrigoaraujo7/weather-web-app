// react
import { useEffect, useState } from 'react';

// hooks
import { useFetchWeatherApi } from './hooks/useFetch';

// types
import { TWeatherDataApi } from './types/weatherDataApi';

function App() {
  const [locate, setLocate] = useState<string>('London')
  const {
    data: weather,
    error,
    isFetching
  } = useFetchWeatherApi<TWeatherDataApi>(`/weather?q=${locate}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)

  useEffect(() => {
    console.log(weather?.coord)
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
