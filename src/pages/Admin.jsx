import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

function Admin() {
  const [bookings, setBookings] = useState([]);
  const [services, setServices] = useState([]);
  const [cleaning, setCleaning] = useState([]);
  const [foodOrders, setFoodOrders] = useState([]);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    setBookings(
      JSON.parse(
        localStorage.getItem("bookings")
      ) || []
    );

    setServices(
      JSON.parse(
        localStorage.getItem("roomServices")
      ) || []
    );

    setCleaning(
      JSON.parse(
        localStorage.getItem("cleaningRequests")
      ) || []
    );

    setFoodOrders(
      JSON.parse(
        localStorage.getItem("foodOrders")
      ) || []
    );

    setTickets(
      JSON.parse(
        localStorage.getItem("emergencyTickets")
      ) || []
    );
  }, []);

  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="main-content">

        <div className="cards-grid">

          <div className="dashboard-card">
            <h3>Total Bookings</h3>
            <h1>{bookings.length}</h1>
          </div>

          <div className="dashboard-card">
            <h3>Room Services</h3>
            <h1>{services.length}</h1>
          </div>

          <div className="dashboard-card">
            <h3>Cleaning Requests</h3>
            <h1>{cleaning.length}</h1>
          </div>

          <div className="dashboard-card">
            <h3>Emergency Tickets</h3>
            <h1>{tickets.length}</h1>
          </div>

        </div>

        {/* BOOKINGS */}

        <div
          className="table-section"
          style={{ marginTop: "25px" }}
        >

          <h2>All Bookings</h2>

          <table>

            <thead>

              <tr>

                <th>ID</th>

                <th>Guest</th>

                <th>Room</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {bookings.map((booking) => (

                <tr
                  key={booking.bookingId}
                >

                  <td>
                    {booking.bookingId}
                  </td>

                  <td>
                    {booking.guestName}
                  </td>

                  <td>
                    {booking.room}
                  </td>

                  <td>
                    {booking.status}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* ROOM SERVICE */}

        <div
          className="table-section"
          style={{ marginTop: "25px" }}
        >

          <h2>Room Service Requests</h2>

          <table>

            <thead>

              <tr>

                <th>ID</th>

                <th>Service</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {services.map((service) => (

                <tr key={service.id}>

                  <td>{service.id}</td>

                  <td>
                    {service.service}
                  </td>

                  <td>
                    {service.status}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* CLEANING */}

        <div
          className="table-section"
          style={{ marginTop: "25px" }}
        >

          <h2>Cleaning Requests</h2>

          <table>

            <thead>

              <tr>

                <th>ID</th>

                <th>Date</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {cleaning.map((item) => (

                <tr key={item.id}>

                  <td>{item.id}</td>

                  <td>{item.date}</td>

                  <td>{item.status}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* FOOD */}

        <div
          className="table-section"
          style={{ marginTop: "25px" }}
        >

          <h2>Food Orders</h2>

          <table>

            <thead>

              <tr>

                <th>ID</th>

                <th>Item</th>

                <th>Amount</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {foodOrders.map((order) => (

                <tr key={order.id}>

                  <td>{order.id}</td>

                  <td>{order.item}</td>

                  <td>
                    ₹{order.amount}
                  </td>

                  <td>
                    {order.status}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* EMERGENCY */}

        <div
          className="table-section"
          style={{ marginTop: "25px" }}
        >

          <h2>Emergency Tickets</h2>

          <table>

            <thead>

              <tr>

                <th>ID</th>

                <th>Issue</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {tickets.map((ticket) => (

                <tr
                  key={ticket.ticketId}
                >

                  <td>
                    {ticket.ticketId}
                  </td>

                  <td>
                    {ticket.issue}
                  </td>

                  <td>
                    {ticket.status}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Admin;