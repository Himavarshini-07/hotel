import { createContext, useState } from "react";

export const BookingContext =
  createContext();

function BookingProvider({
  children,
}) {

  const [bookings, setBookings] =
    useState([]);

  const addBooking = (
    bookingData
  ) => {
    setBookings((prev) => [
      ...prev,
      bookingData,
    ]);
  };

  const cancelBooking = (
    bookingId
  ) => {

    const updatedBookings =
      bookings.filter(
        (booking) =>
          booking.id !== bookingId
      );

    setBookings(
      updatedBookings
    );
  };

  return (
    <BookingContext.Provider
      value={{
        bookings,
        addBooking,
        cancelBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export default BookingProvider;