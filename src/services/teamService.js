import api from './api';

export async function getTeams() {
    const res = await api.get("/api/team/all");
    return res.data;
};