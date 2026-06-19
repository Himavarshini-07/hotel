import { useState } from "react";
import Sidebar from "../components/Sidebar";

function BookRoom() {
  const [budget, setBudget] = useState("");
  const [showRooms, setShowRooms] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("");

  const [guestName, setGuestName] = useState("");
  const [phone, setPhone] = useState("");
  const [persons, setPersons] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkInTime, setCheckInTime] = useState("");
  const [duration, setDuration] = useState("");

  const rooms = {
    1500: ["101", "102", "103"],
    2500: ["201", "202", "203"],
    3500: ["301", "302", "303"],
    4500: ["401", "402", "403"],
    5500: ["501", "502", "503"],
  };

  const handleBooking = () => {
    if (!selectedRoom) {
      alert("Please select a room");
      return;
    }

    if (
      !guestName ||
      !phone ||
      !persons ||
      !checkInDate ||
      !checkInTime ||
      !duration
    ) {
      alert("Please fill all details");
      return;
    }

    const currentUser = JSON.parse(
      localStorage.getItem("user")
    );

    const booking = {
      bookingId: "BK" + Date.now(),

      userEmail: currentUser.email,

      room: selectedRoom,

      budget,

      guestName,

      phone,

      persons,

      checkInDate,

      checkInTime,

      duration,

      status: "Booked",
    };

    const existingBookings =
      JSON.parse(
        localStorage.getItem("bookings")
      ) || [];

    existingBookings.push(booking);

    localStorage.setItem(
      "bookings",
      JSON.stringify(existingBookings)
    );

    alert("Room Booked Successfully");

    setBudget("");
    setShowRooms(false);
    setSelectedRoom("");
    setGuestName("");
    setPhone("");
    setPersons("");
    setCheckInDate("");
    setCheckInTime("");
    setDuration("");
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="main-content">

        <div
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "35px",
            boxShadow:
              "0 2px 10px rgba(0,0,0,0.08)",
          }}
        >

          <h1
            style={{
              fontSize: "42px",
              fontWeight: "700",
              marginBottom: "30px",
            }}
          >
            Book Room
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "1fr 1fr",
              gap: "50px",
            }}
          >

            {/* LEFT */}

            <div>

              <label
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  marginBottom: "15px",
                  display: "block",
                }}
              >
                Select Budget
              </label>

              <select
                value={budget}
                onChange={(e) =>
                  setBudget(e.target.value)
                }
                style={inputStyle}
              >
                <option value="">
                  Select Budget
                </option>

                <option value="1500">
                  ₹1500
                </option>

                <option value="2500">
                  ₹2500
                </option>

                <option value="3500">
                  ₹3500
                </option>

                <option value="4500">
                  ₹4500
                </option>

                <option value="5500">
                  ₹5500
                </option>

              </select>

              <button
                className="logout-btn"
                onClick={() =>
                  setShowRooms(true)
                }
              >
                Show Available Rooms
              </button>

              {showRooms &&
                budget && (
                  <>
                    <h2
                      style={{
                        marginTop:
                          "30px",
                        marginBottom:
                          "20px",
                      }}
                    >
                      Available Rooms
                    </h2>

                    <div
                      style={{
                        display:
                          "flex",
                        gap: "15px",
                        flexWrap:
                          "wrap",
                      }}
                    >
                      {rooms[
                        budget
                      ].map(
                        (
                          room
                        ) => (
                          <button
                            key={
                              room
                            }
                            onClick={() =>
                              setSelectedRoom(
                                room
                              )
                            }
                            style={{
                              width:
                                "80px",
                              height:
                                "80px",
                              border:
                                "none",
                              borderRadius:
                                "12px",
                              cursor:
                                "pointer",
                              fontSize:
                                "20px",
                              fontWeight:
                                "700",
                              color:
                                "white",
                              background:
                                selectedRoom ===
                                room
                                  ? "#111111"
                                  : "#16a34a",
                            }}
                          >
                            {
                              room
                            }
                          </button>
                        )
                      )}
                    </div>
                  </>
                )}

            </div>

            {/* RIGHT */}

            <div>

              {!selectedRoom ? (
                <div
                  style={{
                    display:
                      "flex",
                    justifyContent:
                      "center",
                    alignItems:
                      "center",
                    height:
                      "100%",
                    color:
                      "#6b7280",
                    fontSize:
                      "22px",
                    fontWeight:
                      "600",
                  }}
                >
                  Select a room
                  to continue
                </div>
              ) : (
                <>
                  <h2
                    style={{
                      marginBottom:
                        "20px",
                    }}
                  >
                    Guest Details
                  </h2>

                  <p
                    style={{
                      fontWeight:
                        "600",
                      marginBottom:
                        "20px",
                    }}
                  >
                    Selected Room :
                    {" "}
                    {selectedRoom}
                  </p>

                  <input
                    type="text"
                    placeholder="Guest Name"
                    value={guestName}
                    onChange={(e) =>
                      setGuestName(
                        e.target
                          .value
                      )
                    }
                    style={
                      inputStyle
                    }
                  />

                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) =>
                      setPhone(
                        e.target
                          .value
                      )
                    }
                    style={
                      inputStyle
                    }
                  />

                  <select
                    value={persons}
                    onChange={(e) =>
                      setPersons(
                        e.target
                          .value
                      )
                    }
                    style={
                      inputStyle
                    }
                  >
                    <option value="">
                      Number Of Persons
                    </option>

                    <option>
                      1
                    </option>

                    <option>
                      2
                    </option>

                    <option>
                      3
                    </option>

                    <option>
                      4
                    </option>

                  </select>

                  <input
                    type="date"
                    value={
                      checkInDate
                    }
                    onChange={(e) =>
                      setCheckInDate(
                        e.target
                          .value
                      )
                    }
                    style={
                      inputStyle
                    }
                  />

                  <select
                    value={
                      checkInTime
                    }
                    onChange={(e) =>
                      setCheckInTime(
                        e.target
                          .value
                      )
                    }
                    style={
                      inputStyle
                    }
                  >
                    <option value="">
                      Select Check-In Time
                    </option>

                    <option>
                      08:00 AM
                    </option>

                    <option>
                      09:00 AM
                    </option>

                    <option>
                      10:00 AM
                    </option>

                    <option>
                      11:00 AM
                    </option>

                    <option>
                      12:00 PM
                    </option>

                    <option>
                      01:00 PM
                    </option>

                    <option>
                      02:00 PM
                    </option>

                  </select>

                  <select
                    value={
                      duration
                    }
                    onChange={(e) =>
                      setDuration(
                        e.target
                          .value
                      )
                    }
                    style={
                      inputStyle
                    }
                  >
                    <option value="">
                      Stay Duration
                    </option>

                    <option>
                      1 Day
                    </option>

                    <option>
                      2 Days
                    </option>

                    <option>
                      3 Days
                    </option>

                    <option>
                      5 Days
                    </option>

                  </select>

                  <button
                    className="logout-btn"
                    onClick={
                      handleBooking
                    }
                  >
                    Confirm Booking
                  </button>
                </>
              )}

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #d1d5db",
  marginBottom: "15px",
};

export default BookRoom;