import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Sidebar() {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="sidebar">

      <div className="sidebar-header">
        <h1>HOTEL</h1>
        <p>Management System</p>
      </div>

      <div className="sidebar-menu">

        <p className="menu-title">
          MAIN
        </p>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "menu-item active-menu"
              : "menu-item"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/book-room"
          className={({ isActive }) =>
            isActive
              ? "menu-item active-menu"
              : "menu-item"
          }
        >
          Book Room
        </NavLink>

        <NavLink
          to="/my-bookings"
          className={({ isActive }) =>
            isActive
              ? "menu-item active-menu"
              : "menu-item"
          }
        >
          My Bookings
        </NavLink>

        <p className="menu-title">
          SERVICES
        </p>

        <NavLink
          to="/room-service"
          className={({ isActive }) =>
            isActive
              ? "menu-item active-menu"
              : "menu-item"
          }
        >
          Room Service
        </NavLink>

        <NavLink
          to="/room-cleaning"
          className={({ isActive }) =>
            isActive
              ? "menu-item active-menu"
              : "menu-item"
          }
        >
          Room Cleaning
        </NavLink>

        <NavLink
          to="/food-ordering"
          className={({ isActive }) =>
            isActive
              ? "menu-item active-menu"
              : "menu-item"
          }
        >
          Food Ordering
        </NavLink>

        <NavLink
          to="/emergency"
          className={({ isActive }) =>
            isActive
              ? "menu-item active-menu"
              : "menu-item"
          }
        >
          Emergency Help
        </NavLink>

        <p className="menu-title">
          MANAGEMENT
        </p>

        <NavLink
          to="/admin"
          className={({ isActive }) =>
            isActive
              ? "menu-item active-menu"
              : "menu-item"
          }
        >
          Admin
        </NavLink>

      </div>

      <div className="sidebar-footer">

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Sidebar;