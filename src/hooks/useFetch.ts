// react
import { useEffect, useState } from "react";

// axios
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

export const useFetchWeatherApi = <T = unknown>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error | boolean>(false);

  useEffect(() => {
    api
      .get(url)
      .then((response) => {
        setData(response.data);
        console.log(url);
      })
      .catch((err) => {
        console.log(`❗ bad request: ${err}`);
        setError(true);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [url]);

  return { data, error, isFetching };
};
