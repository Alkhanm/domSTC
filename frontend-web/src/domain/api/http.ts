import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:8090/products",
})

export { http };
