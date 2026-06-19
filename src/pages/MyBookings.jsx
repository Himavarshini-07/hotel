import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [selectedReceipt, setSelectedReceipt] =
    useState(null);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = () => {
    const currentUser = JSON.parse(
      localStorage.getItem("user")
    );

    const allBookings =
      JSON.parse(
        localStorage.getItem("bookings")
      ) || [];

    const userBookings =
      allBookings.filter(
        (booking) =>
          booking.userEmail ===
          currentUser.email
      );

    setBookings(userBookings);
  };

  const cancelBooking = (
    bookingId
  ) => {
    const allBookings =
      JSON.parse(
        localStorage.getItem("bookings")
      ) || [];

    const updatedBookings =
      allBookings.map((booking) =>
        booking.bookingId === bookingId
          ? {
              ...booking,
              status: "Cancelled",
            }
          : booking
      );

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );

    loadBookings();

    alert(
      "Booking Cancelled Successfully"
    );
  };

  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="main-content">

        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "20px",
            boxShadow:
              "0 2px 10px rgba(0,0,0,0.08)",
          }}
        >

          <h1
            style={{
              fontSize: "40px",
              marginBottom: "25px",
            }}
          >
            My Bookings
          </h1>

          {bookings.length === 0 ? (
            <h3>
              No Bookings Found
            </h3>
          ) : (
            <table
              style={{
                width: "100%",
                borderCollapse:
                  "collapse",
              }}
            >

              <thead>

                <tr
                  style={{
                    background:
                      "#111827",
                    color: "white",
                  }}
                >

                  <th
                    style={
                      tableHead
                    }
                  >
                    Booking ID
                  </th>

                  <th
                    style={
                      tableHead
                    }
                  >
                    Room
                  </th>

                  <th
                    style={
                      tableHead
                    }
                  >
                    Guest Name
                  </th>

                  <th
                    style={
                      tableHead
                    }
                  >
                    Check-In
                  </th>

                  <th
                    style={
                      tableHead
                    }
                  >
                    Status
                  </th>

                  <th
                    style={
                      tableHead
                    }
                  >
                    Receipt
                  </th>

                  <th
                    style={
                      tableHead
                    }
                  >
                    Cancel
                  </th>

                </tr>

              </thead>

              <tbody>

                {bookings.map(
                  (booking) => (
                    <tr
                      key={
                        booking.bookingId
                      }
                    >

                      <td
                        style={
                          tableCell
                        }
                      >
                        {
                          booking.bookingId
                        }
                      </td>

                      <td
                        style={
                          tableCell
                        }
                      >
                        {
                          booking.room
                        }
                      </td>

                      <td
                        style={
                          tableCell
                        }
                      >
                        {
                          booking.guestName
                        }
                      </td>

                      <td
                        style={
                          tableCell
                        }
                      >
                        {
                          booking.checkInDate
                        }
                      </td>

                      <td
                        style={
                          tableCell
                        }
                      >
                        <span
                          style={{
                            color:
                              booking.status ===
                              "Cancelled"
                                ? "#dc2626"
                                : "#16a34a",
                            fontWeight:
                              "bold",
                          }}
                        >
                          {
                            booking.status
                          }
                        </span>
                      </td>

                      <td
                        style={
                          tableCell
                        }
                      >
                        <button
                          className="logout-btn"
                          onClick={() =>
                            setSelectedReceipt(
                              booking
                            )
                          }
                        >
                          View
                        </button>
                      </td>

                      <td
                        style={
                          tableCell
                        }
                      >
                        <button
                          className="logout-btn"
                          onClick={() =>
                            cancelBooking(
                              booking.bookingId
                            )
                          }
                          disabled={
                            booking.status ===
                            "Cancelled"
                          }
                        >
                          Cancel
                        </button>
                      </td>

                    </tr>
                  )
                )}

              </tbody>

            </table>
          )}

        </div>

        {selectedReceipt && (

          <div
            style={{
              marginTop: "25px",
              background: "white",
              padding: "25px",
              borderRadius: "20px",
              boxShadow:
                "0 2px 10px rgba(0,0,0,0.08)",
            }}
          >

            <h2
              style={{
                marginBottom: "20px",
              }}
            >
              Booking Receipt
            </h2>

            <p>
              <strong>
                Booking ID:
              </strong>{" "}
              {
                selectedReceipt.bookingId
              }
            </p>

            <p>
              <strong>
                Guest Name:
              </strong>{" "}
              {
                selectedReceipt.guestName
              }
            </p>

            <p>
              <strong>
                Phone:
              </strong>{" "}
              {
                selectedReceipt.phone
              }
            </p>

            <p>
              <strong>
                Room Number:
              </strong>{" "}
              {
                selectedReceipt.room
              }
            </p>

            <p>
              <strong>
                Budget:
              </strong>{" "}
              ₹
              {
                selectedReceipt.budget
              }
            </p>

            <p>
              <strong>
                Persons:
              </strong>{" "}
              {
                selectedReceipt.persons
              }
            </p>

            <p>
              <strong>
                Check-In Date:
              </strong>{" "}
              {
                selectedReceipt.checkInDate
              }
            </p>

            <p>
              <strong>
                Check-In Time:
              </strong>{" "}
              {
                selectedReceipt.checkInTime
              }
            </p>

            <p>
              <strong>
                Duration:
              </strong>{" "}
              {
                selectedReceipt.duration
              }
            </p>

            <p>
              <strong>
                Status:
              </strong>{" "}
              {
                selectedReceipt.status
              }
            </p>

          </div>

        )}

      </div>

    </div>
  );
}

const tableHead = {
  padding: "12px",
  textAlign: "center",
};

const tableCell = {
  padding: "12px",
  textAlign: "center",
  borderBottom:
    "1px solid #e5e7eb",
};

export default MyBookings;