import { useState } from "react";
import { apiClient } from "../services/api-client";

function useRequestOTP() {
  const [response, setResponse] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleNewCode = async (email) => {
    try {
      setIsLoading(true);

      const data = await apiClient.post(`/email_verification`, { email: email });
      
      const res = await data.data;
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