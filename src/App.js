import React from "react";

import {
  Home,
  Catering,
  Jobs,
  ContactUs,
  Login,
  Register,
  AdminDashboard,
  Backgrounds,
  ForgotPassword,
} from "./pages";

import { Footer, Navbar, Order } from "./components";
import { Routes, Route, useLocation } from "react-router-dom";

import "./App.css";

const App = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar show={location.pathname !== "/admin"} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/catering" element={<Catering />} />
        <Route path="/catering/order" element={<Order />} />

        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contactus" element={<ContactUs />} />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/backgrounds" element={<Backgrounds />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>

      <Footer show={location.pathname !== "/admin"} />
    </div>
  );
};

export default App;
