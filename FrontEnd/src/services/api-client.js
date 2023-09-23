import axios from "axios"

// const apiClient = axios.create({
//   baseURL: 'https://api.rawg.io/api',
//   params: {
//       key: '11767bc3359549d4878c63e6c5d334e2'
//   }
// })

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
});


export { apiClient };