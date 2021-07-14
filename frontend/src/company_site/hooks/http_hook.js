import {useState, useCallback, useRef, useEffect} from 'react';

const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorEncountered, setErrorEncountered] = useState();

  const activeRequests = useRef([]);

  const sendRequest = useCallback(
      async (url, method = 'GET', body = null, headers) => {
        setIsLoading(true);

        // Used to cancel request when page changes
        const httpAbortController = new AbortController();
        activeRequests.current.push(httpAbortController);
        try {
          const response = await fetch(url, {
            method,
            headers,
            body,
            signal: httpAbortController.signal,
          });

          const responseData = await response.json();
          setIsLoading(false);

          activeRequests.current.filter(
              (requestController) => requestController !== httpAbortController,
          );

          if (!response.ok) {
            throw new Error(responseData.message);
          }
          return responseData;
        } catch (err) {
          setErrorEncountered(err.message);
          throw err;
        }
      },
      [],
  );

  const clearError = () => {
    setErrorEncountered(null);
    setIsLoading(false);
  };

  // Returning a function => function called when component is unmounted ||
  // Cancelling of http request when
  useEffect(() => {
    return () => {
      activeRequests.current.forEach((abortController) =>
        abortController.abort());
    };
  }, []);

  return {isLoading, errorEncountered, sendRequest, clearError};
};

export default useHttpClient;
