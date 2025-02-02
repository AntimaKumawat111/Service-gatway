// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Home from "./pages/Home";
// import Services from "./pages/Services";
// import Registration from "./pages/Registration";
// import Payment from "./pages/Payment";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import MainOfAll from "./Main_of_All";

// const App = () => {
//   return (
//     <>
//       <Router>
//         <Header />
//         <Routes>
//           <Route path="/" element={<MainOfAll />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/registration" element={<Registration />} />
//           <Route path="/payment" element={<Payment />} />
//         </Routes>
//         {/* <Footer /> */}
        
//       </Router>
//     </>
//   );
// };

// export default App;



// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import "./App.css";
// import MainOfAll from "./Main_of_All";

// function App() {
//   return (
//     <Router>  {/* ✅ सिर्फ यहीं <Router> रहेगा */}
//       <MainOfAll />
//     </Router>
//   );
// }

// export default App;


// -------------------------


import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Courses from "./Components/Service";
// import Payment from "./Components/Payment";
// import MainOfAll from "./MainOfAll";
import MainOfAll from "./Main_of_All";
import Courses from "./components/Courses"
import Payment from "./components/Payment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainOfAll />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
