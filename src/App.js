import React, { useEffect } from "react";
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
  ResetPassword,
} from "./pages";

import { Footer, Navbar, Order } from "./components";
import { Routes, Route, useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";
import { fetchBackground } from "./redux/actions/background";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const hideFooterandNavbar = location.pathname.startsWith("/admin");

  useEffect(() => {
    dispatch(fetchBackground());
  }, [dispatch]);
  return (
    <>
      {!hideFooterandNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/catering" element={<Catering />} />
        <Route path="/catering/order" element={<Order />} />

        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contactus" element={<ContactUs />} />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/menuitem" element={<ManageMenuItem />} />
        <Route path="/admin/backgrounds" element={<Backgrounds />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
      {!hideFooterandNavbar && <Footer />}
    </>
  );
};

export default App;
