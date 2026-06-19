import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="main-content">

        <div className="dashboard-header">

          <h1>
            Welcome Back
          </h1>

          <p>
            Hotel Management Dashboard
          </p>

        </div>

        <div className="cards-grid">

          <DashboardCard
            title="Total Rooms"
            value="50"
          />

          <DashboardCard
            title="Available Rooms"
            value="32"
          />

          <DashboardCard
            title="Booked Rooms"
            value="18"
          />

          <DashboardCard
            title="Today's Checkouts"
            value="5"
          />

        </div>

        <div className="table-section">

          <h2>
            Recent Bookings
          </h2>

          <table>

            <thead>

              <tr>

                <th>
                  Booking ID
                </th>

                <th>
                  Room
                </th>

                <th>
                  Guest
                </th>

                <th>
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td>BK001</td>

                <td>201</td>

                <td>John</td>

                <td className="checked-in">
                  Checked In
                </td>

              </tr>

              <tr>

                <td>BK002</td>

                <td>305</td>

                <td>Sarah</td>

                <td className="completed">
                  Completed
                </td>

              </tr>

              <tr>

                <td>BK003</td>

                <td>404</td>

                <td>David</td>

                <td className="checked-in">
                  Checked In
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;