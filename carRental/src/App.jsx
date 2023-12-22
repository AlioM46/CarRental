import React, {useEffect} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import "./app.css";
import Footer from "./components/Footer/Footer";
import Nav from "./components/nav/Nav";
import About from "./pages/about/About";
import Browse from "./pages/browse/Browse";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Testimonials from "./pages/testimonials/Testimonials";

const App = () => {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/models" element={<Browse />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
