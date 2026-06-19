import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

function RoomCleaning() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    loadRequests();
  }, []);

  const loadRequests = () => {
    const currentUser = JSON.parse(
      localStorage.getItem("user")
    );

    const allRequests =
      JSON.parse(
        localStorage.getItem("cleaningRequests")
      ) || [];

    const userRequests =
      allRequests.filter(
        (request) =>
          request.userEmail ===
          currentUser.email
      );

    setRequests(userRequests);
  };

  const requestCleaning = () => {
    const currentUser = JSON.parse(
      localStorage.getItem("user")
    );

    const newRequest = {
      id: "CL" + Date.now(),
      userEmail: currentUser.email,
      date: new Date().toLocaleDateString(),
      status: "Pending",
    };

    const existingRequests =
      JSON.parse(
        localStorage.getItem("cleaningRequests")
      ) || [];

    existingRequests.push(newRequest);

    localStorage.setItem(
      "cleaningRequests",
      JSON.stringify(existingRequests)
    );

    loadRequests();

    alert(
      "Room Cleaning Request Submitted"
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
            Room Cleaning
          </h1>

          <p
            style={{
              marginBottom: "20px",
              color: "#6b7280",
            }}
          >
            Request housekeeping services
            for your room.
          </p>

          <button
            className="logout-btn"
            onClick={requestCleaning}
          >
            Request Cleaning
          </button>

        </div>

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
            Cleaning Requests
          </h2>

          {requests.length === 0 ? (
            <h3>
              No Cleaning Requests
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
                    Request ID
                  </th>

                  <th
                    style={
                      tableHead
                    }
                  >
                    Request Date
                  </th>

                  <th
                    style={
                      tableHead
                    }
                  >
                    Status
                  </th>

                </tr>

              </thead>

              <tbody>

                {requests.map(
                  (request) => (
                    <tr
                      key={
                        request.id
                      }
                    >

                      <td
                        style={
                          tableCell
                        }
                      >
                        {
                          request.id
                        }
                      </td>

                      <td
                        style={
                          tableCell
                        }
                      >
                        {
                          request.date
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
                              request.status ===
                              "Completed"
                                ? "#16a34a"
                                : "#f59e0b",
                            fontWeight:
                              "bold",
                          }}
                        >
                          {
                            request.status
                          }
                        </span>
                      </td>

                    </tr>
                  )
                )}

              </tbody>

            </table>
          )}

        </div>

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

export default RoomCleaning;