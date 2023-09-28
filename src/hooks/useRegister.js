import { useState } from "react";

function useRegister() {
  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);

  const handleRegister = async ({ name, email, password }) => {
    const data = await fetch(`${import.meta.env.VITE_API_URL}/user/signup`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
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

  return { handleRegister, response, error }
}

export default useRegister;