import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";

import "./css/style.scss";
import "aos/dist/aos.css";

import Pools from "./pages/Pools";
import Yields from "./pages/Yields";
import PageNotFound from "./pages/utility/PageNotFound";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "mobile",
      duration: 750,
      easing: "ease-out-quart",
    });
    // eslint-disable-next-line no-unused-vars
  }, []);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Yields />} />
        <Route exact path="/yields" element={<Yields />} />
        <Route path="/pools" element={<Pools />} />
        <Route path="/bank" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
