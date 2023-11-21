import { useState } from "react";
import { apiClient } from "../services/api-client";

function useRegister() {
  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);

  const handleRegister = async ({ name, email, password }) => {
    try {
      setError(false);
      const data = await apiClient.post("/user/signup", {
        name: name,
        email: email,
        password: password,
      });

      const res = await data.data;
      
      setResponse(res);
    } catch (err) {
      setError(err.response.data.error);
    }
  }

  return { handleRegister, response, error }
}

export default useRegister;