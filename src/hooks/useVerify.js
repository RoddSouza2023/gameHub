import { useState } from "react";

function useVerify() {
  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);

  const handleVerify = async ({ email, otp }) => {
    const data = await fetch(`${import.meta.env.VITE_API_URL}/email_verification/verify`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        otp: otp,
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

  return { handleVerify, response, error }
}

export default useVerify;