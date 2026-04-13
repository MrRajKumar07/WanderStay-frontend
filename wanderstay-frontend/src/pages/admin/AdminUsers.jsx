import { useEffect, useState } from "react";
import { getAllUsers } from "../api/adminApi";

const AdminUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const data = await getAllUsers();
            setUsers(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Users</h2>
            {users.map((user) => (
                <div key={user.id}>
                    <p>{user.firstName} {user.lastName}</p>
                    <p>{user.email}</p>
                    <p>{user.role}</p>
                </div>
            ))}
        </div>
    );
};

export default AdminUsers;