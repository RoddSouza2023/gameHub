import { useEffect, useState } from "react";
import { apiClient } from "../services/api-client";
import { CanceledError } from "axios";

const useData = (endpoint, requestConfig={}, deps=[]) => {

    const [data, setData] = useState([])
    const [error, setError] = useState("")
    const [isLoading, setLoading] = useState(false)

  useEffect(() => {

    const controller = new AbortController();

    setLoading(true)
    apiClient
      .get(endpoint, {signal: controller.signal, ...requestConfig})
      .then((res) => {

        setData(res.data.games);
        setLoading(false)
      })
      .catch((err) => {
        if(err instanceof CanceledError) return  
        setError(err.message)
        setLoading(false)
    });

    //clean up function
    return () => controller.abort()
    }, deps ? [...deps] : [])

    return { data, error, isLoading}
}

export default useData;