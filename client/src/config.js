import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "https://proto-comission.herokuapp.com/api/" 
})