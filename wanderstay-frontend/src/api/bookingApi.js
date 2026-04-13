import api from "./axiosInstance";

// ==========================
// 📦 BOOKING APIs
// ==========================

// ✅ Create booking
export const createBooking = async (data) => {
  const res = await api.post("/bookings", data);
  return res.data;
};

// ✅ Get booking by ID
export const getBookingById = async (id) => {
  const res = await api.get(`/bookings/${id}`);
  return res.data;
};

// ✅ Get bookings by user
export const getBookingsByUser = async (userId) => {
  const res = await api.get(`/bookings/user/${userId}`);
  return res.data;
};

// ✅ Cancel booking
export const cancelBooking = async (id) => {
  await api.put(`/bookings/${id}/cancel`);
};