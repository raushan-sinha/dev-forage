import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.PRODUCTION_API_BASE_URL || "http://localhost:5000/",
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.response.use(
    res => res,
    err => {
        return Promise.reject(err);
    }
);

export default api;
