import { useEffect, useState } from "react";

function useCart(token) {
  const [getResponse, setResponse] = useState({});
  const [error, setError] = useState(null);

    useEffect(() => {
      if (!token) return;

      const getItems = async () => {
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
      setError(res.error);
      return;
    };
    
    setResponse(res);
  }

  getItems();
  }, [token])

  return { getResponse, error };
}

export default useCart