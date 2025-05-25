import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import SearchPage from "./Components/SearchPage/SearchPage";
import MyBookingsPage from "./Components/MyBookingsPage/MyBookingsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/my-bookings" element={<MyBookingsPage />} />
    </Routes>
  );
}
