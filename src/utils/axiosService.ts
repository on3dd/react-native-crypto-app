import axios from 'axios';
import { apiBaseURL } from "./constants";

const axiosService = axios.create({
  baseURL: apiBaseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosService;
