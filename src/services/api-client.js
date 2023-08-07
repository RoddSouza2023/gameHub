import axios from "axios"

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
      key: '11767bc3359549d4878c63e6c5d334e2'
  }
})