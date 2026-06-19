import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

function Emergency() {
  const [issue, setIssue] = useState("");
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const currentUser = JSON.parse(
      localStorage.getItem("user")
    );

    const allTickets =
      JSON.parse(
        localStorage.getItem("emergencyTickets")
      ) || [];

    const userTickets =
      allTickets.filter(
        (ticket) =>
          ticket.userEmail === currentUser.email
      );

    setTickets(userTickets);
  }, []);

  const createTicket = () => {
    if (!issue) {
      alert("Select Emergency Type");
      return;
    }

    const currentUser = JSON.parse(
      localStorage.getItem("user")
    );

    const newTicket = {
      ticketId: "EM" + Date.now(),
      userEmail: currentUser.email,
      issue,
      status: "Open",
      date: new Date().toLocaleDateString(),
    };

    const existingTickets =
      JSON.parse(
        localStorage.getItem("emergencyTickets")
      ) || [];

    existingTickets.push(newTicket);

    localStorage.setItem(
      "emergencyTickets",
      JSON.stringify(existingTickets)
    );

    setTickets([
      ...tickets,
      newTicket,
    ]);

    setIssue("");

    alert("Emergency Ticket Raised");
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
          }}
        >

          <h1
            style={{
              fontSize: "36px",
              marginBottom: "20px",
            }}
          >
            Emergency Help
          </h1>

          <select
            value={issue}
            onChange={(e) =>
              setIssue(e.target.value)
            }
            style={inputStyle}
          >
            <option value="">
              Select Emergency
            </option>

            <option>
              Medical Emergency
            </option>

            <option>
              Security Assistance
            </option>

            <option>
              Maintenance Issue
            </option>

          </select>

          <button
            className="logout-btn"
            onClick={createTicket}
          >
            Raise Ticket
          </button>

        </div>

        <div
          className="table-section"
          style={{
            marginTop: "25px",
          }}
        >

          <h2>
            My Emergency Tickets
          </h2>

          <table>

            <thead>

              <tr>

                <th>
                  Ticket ID
                </th>

                <th>
                  Issue
                </th>

                <th>
                  Date
                </th>

                <th>
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {tickets.length === 0 ? (
                <tr>

                  <td colSpan="4">
                    No Tickets Raised
                  </td>

                </tr>
              ) : (
                tickets.map(
                  (ticket) => (
                    <tr
                      key={
                        ticket.ticketId
                      }
                    >

                      <td>
                        {
                          ticket.ticketId
                        }
                      </td>

                      <td>
                        {
                          ticket.issue
                        }
                      </td>

                      <td>
                        {
                          ticket.date
                        }
                      </td>

                      <td>
                        {
                          ticket.status
                        }
                      </td>

                    </tr>
                  )
                )
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "10px",
  marginBottom: "15px",
};

export default Emergency;