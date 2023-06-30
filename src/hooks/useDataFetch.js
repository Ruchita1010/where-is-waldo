import { useEffect, useState } from 'react';

export const useDataFetch = (callback, args) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result;
        if (args && args.length > 0) {
          result = await callback(...args);
        } else {
          result = await callback();
        }
        setData(result);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, isLoading, error };
};
