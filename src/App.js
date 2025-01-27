// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Services from "./pages/Services";
// import Registration from "./pages/Registration";
// import Payment from "./pages/Payment";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

// const App = () => {
//   return (
//     <>
//       <Router>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/registration" element={<Registration />} />
//           <Route path="/payment" element={<Payment />} />
//         </Routes>
//         <Footer />
//       </Router>
//     </>
//   );
// };

// export default App;

import React from "react";
import "./App.css";
// import MenuBtnPage from "./pages/menu_touch_page";
// import HomePage from "./pages/Home_Page_data/home_page";
import HomePage from "./pages/HomePage/navigation_bar/home_page";

function App() {
  return (
    <>
      <HomePage />

      {/* <MenuBtnPage /> */}
    </>
  );
}

export default App;
