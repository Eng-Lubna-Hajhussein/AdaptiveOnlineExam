import { useState, useEffect, useRef } from "react";


// Pass common initial for all fetches.
export const useFetch = (url, headers) => {
  const [data, setData] = useState();
  console.log({data})
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Just pass the variables that changes in each new fetch requisition
  const fetchData =  async (url, headers) => {
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
    // if(url){
      fetchData(url, headers);
    // }
  }, [url,headers]);

  return [{ data, isLoading, isError }, fetchData];
};

// const useFetch = (url,headers) => {
//   const [data, setData] = useState(null);
//   const [isPending, setIsPending] = useState(true);
//   const [error, setError] = useState(null);
// //   const firstRender = useRef(true);

// const fetchData = (url,headers) => {
    // fetch(url, headers)
    // .then((res) => {
    //   if (!res.ok) {
    //     throw Error("could not fetch the data for that resource");
    //   }
    //   return res.json();
    // })
    // .then((data) => {
    //   setData(data);
    //   setIsPending(false);
    //   setError(null);
    // })
    // .catch((err) => {
    //   if (err.name === "BortError") {
    //     console.log("fetch aborted");
    //   } else {
    //     setIsPending(false);
    //     setError(err.message);
    //   }
    // });
// }
//   useEffect(() => {
//     const abortCont = new AbortController();
//     if(url){
//         fetchData(url,headers);
//     }

//     //clean up side effects
//     return () => abortCont.abort(); //pause the fetch
//   }, []);
//   return { data, isPending, error, fetchData };
// };

export default useFetch;
