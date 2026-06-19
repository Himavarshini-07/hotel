function FloorMap() {
  const floors = [];

  for (let floor = 1; floor <= 10; floor++) {
    const rooms = [];

    for (let room = 1; room <= 5; room++) {
      const roomNumber = floor * 100 + room;

      const available =
        roomNumber % 3 !== 0;

      rooms.push(
        <div
          key={roomNumber}
          className={`room-box ${
            available
              ? "available-room"
              : "booked-room"
          }`}
        >
          {roomNumber}
        </div>
      );
    }

    floors.push(
      <div
        key={floor}
        className="floor-card"
      >
        <h3>Floor {floor}</h3>

        <div className="small-room-grid">
          {rooms}
        </div>
      </div>
    );
  }

  return (
    <div>

      <div className="legend">

        <div className="legend-item">
          <div className="legend-green"></div>
          <span>Available</span>
        </div>

        <div className="legend-item">
          <div className="legend-red"></div>
          <span>Booked</span>
        </div>

      </div>

      <div className="floors-container">
        {floors}
      </div>

    </div>
  );
}

export default FloorMap;