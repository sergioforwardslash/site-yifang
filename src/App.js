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
  ManageMenuItem,
  ForgotPassword,
} from "./pages";

import { Footer, Navbar, Order } from "./components";
import { Routes, Route, useLocation } from "react-router-dom";

import "./App.css";

const App = () => {
  const location = useLocation();
  const hideFooterandNavbar = location.pathname.startsWith("/admin");
  return (
    <div>
      {!hideFooterandNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/catering" element={<Catering />} />
        <Route path="/catering/order" element={<Order />} />

        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contactus" element={<ContactUs />} />

        <Route path="/admin" element={<AdminDashboard />} />
        {/* <Route path="/admin/menuitem" element={<ManageMenuItem />} /> */}
        <Route path="/admin/backgrounds" element={<Backgrounds />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      {!hideFooterandNavbar && <Footer />}
    </div>
  );
};

export default App;
