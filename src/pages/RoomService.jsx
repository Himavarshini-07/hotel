import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

function RoomService() {
  const [service, setService] = useState("");
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
        localStorage.getItem("roomServices")
      ) || [];

    const userRequests =
      allRequests.filter(
        (request) =>
          request.userEmail ===
          currentUser.email
      );

    setRequests(userRequests);
  };

  const requestService = () => {
    if (!service) {
      alert("Please Select Service");
      return;
    }

    const currentUser = JSON.parse(
      localStorage.getItem("user")
    );

    const newRequest = {
      id: "RS" + Date.now(),
      userEmail: currentUser.email,
      service,
      date: new Date().toLocaleDateString(),
      status: "Requested",
    };

    const existingRequests =
      JSON.parse(
        localStorage.getItem("roomServices")
      ) || [];

    existingRequests.push(newRequest);

    localStorage.setItem(
      "roomServices",
      JSON.stringify(existingRequests)
    );

    loadRequests();

    setService("");

    alert("Service Requested Successfully");
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
            Room Service
          </h1>

          <select
            value={service}
            onChange={(e) =>
              setService(e.target.value)
            }
            style={inputStyle}
          >
            <option value="">
              Select Service
            </option>

            <option>
              Water Bottle
            </option>

            <option>
              Extra Pillow
            </option>

            <option>
              Extra Blanket
            </option>

            <option>
              Laundry Service
            </option>

            <option>
              Food Delivery
            </option>

            <option>
              Room Cleaning
            </option>

          </select>

          <button
            className="logout-btn"
            onClick={requestService}
          >
            Request Service
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
            My Service Requests
          </h2>

          {requests.length === 0 ? (
            <h3>
              No Service Requests
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
                    Service
                  </th>

                  <th
                    style={
                      tableHead
                    }
                  >
                    Date
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
                          request.service
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
                              "#2563eb",
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

const inputStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #d1d5db",
  marginBottom: "15px",
};

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

export default RoomService;