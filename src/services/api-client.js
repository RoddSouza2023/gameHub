import axios from "axios"

// const apiClient = axios.create({
//   baseURL: 'https://api.rawg.io/api',
//   params: {
//       key: '11767bc3359549d4878c63e6c5d334e2'
//   }
// })

const url = import.meta.env.VITE_API_URL;

const apiClient = axios.create({
  baseURL: url,
});


export { apiClient };