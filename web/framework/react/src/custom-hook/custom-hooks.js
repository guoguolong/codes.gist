import { useState, useEffect } from "react";

const useFetch = (url = "", options = undefined) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('Actual Remote Call', url, options);
    let isMounted = true;
    setLoading(true);
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setData(data);
          setError(null);
        }
      })
      .catch((error) => {
        if (isMounted) {
          setError(error);
          setData(null);
        }
      })
      .finally(() => isMounted && setLoading(false));

    return () => {
      isMounted = false;
    };
  }, [url, options]);

  return [data, error, loading ];
};

export { useFetch };