import React, { useEffect } from 'react';

function App() {
  const search = async (city: string) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`; // Atualize aqui

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    search("London");
  }, []);

  return (
    <h1>{process.env.REACT_APP_WEATHER_API_KEY}</h1>
  );
}

export default App;
