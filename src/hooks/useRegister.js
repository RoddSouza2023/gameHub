import { useState } from "react";
import { apiClient } from "../services/api-client";

function useRegister() {
  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);

  const handleRegister = async ({ name, email, password }) => {
    const data = await apiClient.post("/user/signup", {
      name: name,
      email: email,
      password: password,
    });

    const res = await data.data;
    if (!res.success) { 
      setError(res.error);
      return;
    };
    
    setResponse(res);
  }

  return { handleRegister, response, error }
}

export default useRegister;