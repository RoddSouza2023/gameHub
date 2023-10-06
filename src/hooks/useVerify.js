import { useState } from "react";
import { apiClient } from "../services/api-client";

function useVerify() {
  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);

  const handleVerify = async ({ email, otp }) => {
    const data = await apiClient.post(`/email_verification/verify`, { email: email, otp: otp });
    const res = await data.data;
    if (!res.success) { 
      setError(res.error);
      return;
    };
    
    setResponse(res);
  }

  return { handleVerify, response, error }
}

export default useVerify;