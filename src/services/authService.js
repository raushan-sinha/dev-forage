import api from './api';

export async function loginUser(credentials) {
    const res = await api.post("/api/auth/login", credentials);
    return res.data;
};

export async function signUpUser(credentials) {
    const res = await api.post("/api/auth/register", credentials);
    return res.data;
};

export const getLoggedInUser = async () => {
    const res = await fetch(
        "http://localhost:5000/api/social-auth/get-user",
        {
            method: "GET",
            credentials: "include",
        }
    );

    if (!res.ok) throw new Error("Unauthorized");

    return res.json();
};