import { useState } from "react";
import { apiClient } from "../services/api-client";

function useUpdatePassword() {
  const [response, setResponse] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleUpdatePassword = async ({newPassword, currentPassword, token}) => {
    try {
      setIsLoading(true);

      const data = await apiClient.post(`/user/change_password`, {
        token: token,
        currentPassword: currentPassword,
        newPassword: newPassword,
      });

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

  return { handleUpdatePassword, response, error, isLoading };
}

export default useUpdatePassword