import { useState } from "react";

function useLogin() {
  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);

  const handleLogin = async ({ email, password }) => {
    const data = await fetch("http://localhost:8080/api/v1/user", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const res = await data.json();
    if (!res.success) { setError(res.error) };
    // window.localStorage.setItem("isLoggedIn", true);
    setResponse(res);
  }

  return { handleLogin, response, error }
}

export default useLogin;