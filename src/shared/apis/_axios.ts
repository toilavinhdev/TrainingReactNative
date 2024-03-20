import axios from "axios"

const axiosManager = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  responseType: "json",
  withCredentials: true
})
 
export default axiosManager;