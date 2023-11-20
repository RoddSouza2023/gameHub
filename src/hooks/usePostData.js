import { useEffect, useState } from "react";
import { apiClient } from "../services/api-client";
import { CanceledError } from "axios";

const usePostData = (endpoint, requestConfig, deps=[]) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {

    const controller = new AbortController();
    setLoading(true);

    apiClient
      .post(endpoint, {signal: controller.signal, ...requestConfig})
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if(err instanceof CanceledError) return;  
        setLoading(false);
        setError(err.response.data.error);
    });

    //clean up function
    return () => controller.abort();
    }, deps ? [...deps] : [])

    return { data, error, isLoading }
}

export default usePostData;