import { useEffect, useState } from "react";
import { getBookingsByUser, cancelBooking } from "../api/bookingApi";

const MyBookings = ({ userId }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const data = await getBookingsByUser(userId);
    setBookings(data);
  };

  const handleCancel = async (id) => {
    await cancelBooking(id);
    fetchBookings(); // refresh
  };

  return (
    <div>
      <h2>My Bookings</h2>
      {bookings.map((b) => (
        <div key={b.id}>
          <p>Room: {b.roomId}</p>
          <p>Status: {b.status}</p>
          <p>Total: ₹{b.totalAmount}</p>
          <button onClick={() => handleCancel(b.id)}>Cancel</button>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;