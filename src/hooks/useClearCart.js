import React, { useEffect, useState } from 'react'

function useClearCart(token) {
  const [response, setResponse] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const clearCartCheckout = async () => {
      if (!token) return;
      const data = await fetch(`${import.meta.env.VITE_API_URL}/user/remove_all_cart`, {
        method: "PATCH",
        body: JSON.stringify({
          token: token,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const res = await data.json();
      if (res.error) {
        setError(res.error);
        return;
      }
      setIsLoading(false);
      setResponse(res);
    };

    clearCartCheckout();

    if (!token) return () => localStorage.setItem("guest_cart", JSON.stringify([]));
  }, []);

  return {response, isLoading};
}

export default useClearCart;