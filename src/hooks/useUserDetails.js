import { useEffect, useState } from 'react';

function useUserDetails(token) {
  const [response, setResponse] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

useEffect(() => {
  const handleUserDetails = async () => {
    try {
      setIsLoading(true);

      const data = await fetch(`${import.meta.env.VITE_API_URL}/user/get_user_details`, {
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
      setError(false);
      setResponse(res);
    } catch(error) {
      setIsLoading(false);
      setError(error);
    }
  }

  handleUserDetails();
}, []);

  return { response, error, isLoading };
}

export default useUserDetails