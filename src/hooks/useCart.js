import { useEffect, useState } from "react";

function useCart(token) {
  const [getResponse, setResponse] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
      
      const getItems = async () => {
        try {
          if (!token) return;
        
          const data = await fetch(`${import.meta.env.VITE_API_URL}/user/cart/getItems`, {
            method: "POST",
            body: JSON.stringify({
            token: token,
            }),
              headers: {
                "Content-type": "application/json",
              },
          });

        const res = await data.json();
        if (!res.success) { 
          setIsLoading(false);
          setError(res.error);
          return;
      };
      setIsLoading(false);
      setResponse(res);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  }

  getItems();
  }, [token])

  return { getResponse, error, isLoading };
}

export default useCart