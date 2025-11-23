import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_PRODUCTION_API_BASE_URL,
    // baseURL: "http://localhost:5000/",
    headers: { "Content-Type": "application/json" },
});

export default api;
