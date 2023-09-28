import { useState } from "react";

function useRequestOTP() {
  const [response, setResponse] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleNewCode = async (email) => {
    try {
      setIsLoading(true);

      const data = await fetch(`${import.meta.env.VITE_API_URL}/email_verification`, {
        method: "POST",
        body: JSON.stringify({
          email: email,
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

  return { handleNewCode, response, error, isLoading }
}

export default useRequestOTP;