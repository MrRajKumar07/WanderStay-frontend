import { useEffect, useState } from "react";
import { searchHotels } from "../api/hotelApi";

const SearchResults = () => {
  const [hotels, setHotels] = useState([]);
  const [location, setLocation] = useState("");

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const data = await searchHotels(location);
      setHotels(data.content); // 🔥 important (Page object)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Hotels</h2>

      <input
        placeholder="Search location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <button onClick={fetchHotels}>Search</button>

      {hotels.map((hotel) => (
        <div key={hotel.id}>
          <img src={hotel.imageUrl} width="200" alt="" />
          <h3>{hotel.name}</h3>
          <p>{hotel.location}</p>
          <p>⭐ {hotel.rating}</p>
          <p>Rooms: {hotel.roomCount}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;