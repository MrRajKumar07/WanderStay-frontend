import api from "./axiosInstance";

// ==========================
// 🏨 HOTEL APIs
// ==========================

// 🔍 Search hotels (with pagination)
export const searchHotels = async (location = "", page = 0, size = 10) => {
  const res = await api.get("/hotels", {
    params: { location, page, size },
  });
  return res.data; // returns Page<HotelSummaryDTO>
};

// 📄 Get hotel by ID
export const getHotelById = async (id) => {
  const res = await api.get(`/hotels/${id}`);
  return res.data;
};

// ➕ Create hotel (admin)
export const createHotel = async (data) => {
  const res = await api.post("/hotels", data);
  return res.data;
};