import React from "react";

import { Home, Catering, Jobs, ContactUs, Admin, AdminDashboard,Backgrounds } from "./pages";
import { Footer, Navbar, Order } from "./components";
import { Routes, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/catering/order" element={<Order />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/backgrounds" element={<Backgrounds />} />
      </Routes>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
