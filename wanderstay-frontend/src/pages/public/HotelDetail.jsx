import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHotelById } from "../api/hotelApi";

const HotelDetail = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    fetchHotel();
  }, []);

  const fetchHotel = async () => {
    try {
      const data = await getHotelById(id);
      setHotel(data);
    } catch (err) {
      console.error(err);
    }
  };

  if (!hotel) return <p>Loading...</p>;

  return (
    <div>
      <h2>{hotel.name}</h2>
      <img src={hotel.imageUrl} width="300" alt="" />
      <p>{hotel.location}</p>
      <p>{hotel.description}</p>
      <p>Amenities: {hotel.amenities}</p>
      <p>⭐ {hotel.rating}</p>
    </div>
  );
};

export default HotelDetail;