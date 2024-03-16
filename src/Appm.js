import React from "react";
import { useWindowSize } from 'react-window-size';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutusm from "./Components/mobail/Aboutusm.jsx";
import Aboutus from "./Components/Aboutus.jsx";
import Marqueem from "./Components/mobail/Marqueem.jsx";
import Marquee from "./Components/Marquee.jsx";
import Landingpagem from "./Components/mobail/Landingpagem.jsx";
import Landingpage from "./Components/Landingpage.jsx";
// import OurTeam from "./Components/OurTeam.jsx";
import Footer from "./Components/Footer.jsx";
import Eyes from "./Components/Eyes.jsx";
import Projectm from "./Components/mobail/Projectm.jsx";
import Project from "./Components/Project.jsx";

import Navbarm from "./Components/mobail/Navbarm.jsx";
import Navbar from "./Components/Navbar.jsx";
import LocomotiveScroll from 'locomotive-scroll';

function Appm() {
    const { width } = useWindowSize();
    const isMobile = width <= 768; // Adjust breakpoint as needed
    // eslint-disable-next-line no-unused-vars
    const locomotiveScroll = new LocomotiveScroll();
    return (
      <div className="App">
        
        {isMobile ? (
           <Router >
      
           <Routes>
             <Route
               path="/"
               element={
                 <>
                 <Navbarm/>
                   <Landingpagem />
                   <Marqueem />
                   <Aboutusm />
                   
                   <Projectm />
                 </>
               }
             />
            {/* <Route path="/Our-team" element={<OurTeam />} /> */}
           </Routes>
     
           <Footer />
         </Router>
        ) : (
            <Router >
      
            <Routes>
              <Route
                path="/"
                element={
                  <>
                  <Navbar/>
                    <Landingpage />
                    <Marquee />
                    <Aboutus/>
                    <Eyes/>
                    <Project />
                  </>
                }
              />
             {/* <Route path="/Our-team" element={<OurTeam />} /> */}
            </Routes>
      
            <Footer />
          </Router>
        )}
      </div>
    );
  }
  export default Appm;
  