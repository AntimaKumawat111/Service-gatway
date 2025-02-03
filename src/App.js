import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainOfAll from "./Main_of_All";
import Courses from "./components/Courses";
import Payment from "./components/Payment";

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<MainOfAll />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
