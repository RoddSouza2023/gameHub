import { useState } from "react";

function useUpdatePassword() {
  const [response, setResponse] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleUpdatePassword = async ({newPassword, currentPassword, token}) => {
    try {
      setIsLoading(true);

      const data = await fetch(`${import.meta.env.VITE_API_URL}/user/change_password`, {
        method: "POST",
        body: JSON.stringify({
          token: token,
          currentPassword: currentPassword,
          newPassword: newPassword,
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

  return { handleUpdatePassword, response, error, isLoading };
}

export default useUpdatePassword