import { useState, useEffect, useRef } from "react";

// Pass common initial for all fetches.
export const useFetch = (url, headers) => {
  const [data, setData] = useState();
  // console.log({data})
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Just pass the variables that changes in each new fetch requisition
  const fetchData = async (url, headers) => {
    setIsError(false);
    setIsLoading(true);
    try {
      const response = await fetch(url, {
        ...headers,
        credentials: "include",
      });
      const json = await response.json();
      setData(json);
      setIsLoading(false);
      return json;
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url, headers);
  }, [url, headers]);

  return [{ data, isLoading, isError }, fetchData];
};

export default useFetch;
