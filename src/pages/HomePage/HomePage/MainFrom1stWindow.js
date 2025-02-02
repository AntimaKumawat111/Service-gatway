import React from "react";
import TopNav from "./NavBar/TopNav";
import SubNav from "./NavBar/SubNav";
import Fade from "./Fade_images";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationForm from "../components/Route/RegistrationForm";
import Payment from "../components/Route/PaymentSection";
// import HomePage from "../components/Route/HomePage"; 
import HomePageFile from "./HomePageFile";

function MainFrom1stWindow() {
  return (
    <Router>
      
          <Routes>
            {/* Default Home route */}
            <Route path="/" element={<HomePageFile />} />

            {/* Other routes */}
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
    </Router>
  );
}

export default MainFrom1stWindow;
