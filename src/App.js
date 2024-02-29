import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutus from "./Components/Aboutus.jsx";
import Marquee from "./Components/Marquee.jsx";
import Landingpage from "./Components/Landingpage.jsx";
// import OurTeam from "./Components/OurTeam.jsx";
import Footer from "./Components/Footer.jsx";
import Eyes from "./Components/Eyes.jsx";
import Project from "./Components/Project.jsx";
import Navbar from "./Components/Navbar.jsx";
import LocomotiveScroll from 'locomotive-scroll';
function App() {

  // eslint-disable-next-line no-unused-vars
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <Router >
      <Navbar/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landingpage />
              <Marquee />
              <Aboutus />
              <Eyes />
              <Project />
            </>
          }
        />
       {/* <Route path="/Our-team" element={<OurTeam />} /> */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
