import { useState } from "react";
import { createBooking } from "../api/bookingApi";

const BookingPage = () => {
  const [form, setForm] = useState({
    userId: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: "",
    paymentMethod: "CARD",
  });

  const handleSubmit = async () => {
    try {
      const res = await createBooking(form);
      console.log("Booking created:", res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input placeholder="User ID" onChange={(e) => setForm({ ...form, userId: e.target.value })} />
      <input placeholder="Room ID" onChange={(e) => setForm({ ...form, roomId: e.target.value })} />
      <input type="date" onChange={(e) => setForm({ ...form, checkInDate: e.target.value })} />
      <input type="date" onChange={(e) => setForm({ ...form, checkOutDate: e.target.value })} />

      <select onChange={(e) => setForm({ ...form, paymentMethod: e.target.value })}>
        <option value="CARD">CARD</option>
        <option value="UPI">UPI</option>
        <option value="NET_BANKING">NET_BANKING</option>
      </select>

      <button onClick={handleSubmit}>Book</button>
    </div>
  );
};

export default BookingPage;