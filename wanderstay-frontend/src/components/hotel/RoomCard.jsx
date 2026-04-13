import Button from "../ui/Button";

const RoomCard = ({ room, onBook }) => {
  return (
    <div className="border rounded-lg p-4 shadow">
      <img
        src={room.imageUrl}
        alt="room"
        className="w-full h-40 object-cover rounded"
      />

      <h2 className="text-lg font-semibold mt-2">{room.roomType}</h2>
      <p>₹{room.pricePerNight} / night</p>
      <p>Capacity: {room.capacity}</p>

      <Button onClick={() => onBook(room.id)}>
        Book Now
      </Button>
    </div>
  );
};

export default RoomCard;