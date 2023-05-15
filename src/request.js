import axios from "axios";


const BASE_URL = "http://citibike-api.vercel.app/api/";


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

