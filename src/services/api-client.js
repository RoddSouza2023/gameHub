import axios from "axios"

const url = import.meta.env.VITE_API_URL;

const apiClient = axios.create({
  baseURL: url,
  headers: {"Content-type": "application/json"},
});

export { apiClient };