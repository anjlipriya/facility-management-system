// src/hooks/useFetch.js
import { useState, useEffect } from 'react';

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [controller, setController] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setController(abortController);
    
    const fetchData = async () => {
      try {
        setLoading(true);
        
        const response = await fetch(url, {
          ...options,
          signal: abortController.signal,
        });
        
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
          setData(null);
        }
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
    
    return () => abortController.abort();
  }, [url]);
  
  const refetch = async () => {
    if (controller) {
      controller.abort();
    }
    
    const newController = new AbortController();
    setController(newController);
    
    try {
      setLoading(true);
      
      const response = await fetch(url, {
        ...options,
        signal: newController.signal,
      });
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      
      const result = await response.json();
      setData(result);
      setError(null);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message);
        setData(null);
      }
    } finally {
      setLoading(false);
    }
  };
  
  return { data, loading, error, refetch };
};

export default useFetch;