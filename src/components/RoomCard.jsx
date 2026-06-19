function RoomCard({ room }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-5">

      <h2 className="text-xl font-bold">
        Room {room.number}
      </h2>

      <p className="mt-2">
        Floor: {room.floor}
      </p>

      <p>
        Capacity: {room.capacity}
      </p>

      <p>
        Price: ₹{room.price}
      </p>

      <p
        className={`font-bold mt-2 ${
          room.available
            ? "text-green-600"
            : "text-red-600"
        }`}
      >
        {room.available
          ? "Available"
          : "Booked"}
      </p>

      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
        View Details
      </button>

    </div>
  );
}

export default RoomCard;