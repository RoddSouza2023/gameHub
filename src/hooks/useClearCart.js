import { useEffect, useState } from 'react';
import {apiClient} from "../services/api-client";

function useClearCart(token) {
  const [response, setResponse] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const clearCartCheckout = async () => {
      if (!token) return;
      const data = apiClient.patch(`/user/remove_all_cart`, { token: token });
      const res = await data.data;
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