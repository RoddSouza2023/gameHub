import { useEffect, useState } from "react"
import apiClient from "../services/api-client"

const useGamesDetails = (id) => {
  const [data, setData] = useState({})
  const [error, setError] = useState("")
  const [isLoading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)

    const getGames = async () => {
      try {
        const response = await apiClient.get(`/games/${id}`)
        setLoading(false)
        setData(response.data)
      } catch(err) {
        setLoading(false)
        setError(err)
      }
    }

    getGames()
  }, [])


  return { data, error, isLoading}
}

export default useGamesDetails