import api from './api';

export async function loginUser(credentials) {
    const res = await api.post("/api/auth/login", credentials);
    return res.data;
};

export async function signUpUser(credentials) {
    const res = await api.post("/api/auth/register", credentials);
    return res.data;
};