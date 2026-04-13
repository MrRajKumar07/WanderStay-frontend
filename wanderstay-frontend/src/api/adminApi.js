import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8080/api",
});

// 🔐 Attach token (if using auth)
API.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// ==========================
// 🔥 ADMIN APIs
// ==========================

// 📊 Get dashboard stats
export const getAdminStats = async () => {
    const response = await API.get("/admin/stats");
    return response.data;
};

// 👥 Get all users
export const getAllUsers = async () => {
    const response = await API.get("/admin/users");
    return response.data;
};

// 💰 Get total revenue
export const getTotalRevenue = async () => {
    const response = await API.get("/admin/revenue");
    return response.data;
};