import { useState } from "react";
import { apiClient } from "../services/api-client";

function useLogin() {
  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);

  const handleLogin = async ({ email, password }) => {
    const data = await apiClient.post("/user", {
        email: email,
        password: password,
    });

    const res = data.data;
    if (!res.success) { 
      setError(res.error);
      return;
    };

    window.localStorage.setItem("accessToken", res.user.token);
    window.localStorage.setItem("isLoggedIn", true);
    
    setResponse(res);
  }

  return { handleLogin, response, error }
}

export default useLogin;