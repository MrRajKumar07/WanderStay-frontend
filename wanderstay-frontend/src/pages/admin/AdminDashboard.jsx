import { useEffect, useState } from "react";
import { getAdminStats } from "../api/adminApi";

const AdminDashboard = () => {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        try {
            const data = await getAdminStats();
            setStats(data);
        } catch (error) {
            console.error("Error fetching stats", error);
        }
    };

    if (!stats) return <p>Loading...</p>;

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <p>Total Users: {stats.totalUsers}</p>
            <p>Total Hotels: {stats.totalHotels}</p>
            <p>Total Bookings: {stats.totalBookings}</p>
            <p>Total Revenue: ₹{stats.totalRevenue}</p>
        </div>
    );
};

export default AdminDashboard;