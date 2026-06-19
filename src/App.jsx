import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Dashboard from "./pages/Dashboard";
import BookRoom from "./pages/BookRoom";
import MyBookings from "./pages/MyBookings";

import RoomService from "./pages/RoomService";
import RoomCleaning from "./pages/RoomCleaning";
import FoodOrdering from "./pages/FoodOrdering";
import Emergency from "./pages/Emergency";

import Admin from "./pages/Admin";

function App() {
  return (
    <Routes>

      {/* Authentication */}

      <Route
        path="/"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

      {/* Main */}

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/book-room"
        element={<BookRoom />}
      />

      <Route
        path="/my-bookings"
        element={<MyBookings />}
      />

      {/* Services */}

      <Route
        path="/room-service"
        element={<RoomService />}
      />

      <Route
        path="/room-cleaning"
        element={<RoomCleaning />}
      />

      <Route
        path="/food-ordering"
        element={<FoodOrdering />}
      />

      <Route
        path="/emergency"
        element={<Emergency />}
      />

      {/* Admin */}

      <Route
        path="/admin"
        element={<Admin />}
      />

    </Routes>
  );
}

export default App;