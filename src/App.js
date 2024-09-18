import React from "react";
import "./styles/global.css";
import "./App.css";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Business from "./pages/business";
import Careers from "./pages/career";
import NewsRoom from "./pages/newsroom";
import Location from "./pages/location";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route  path="/" index element={<Home />} />
        <Route path="/business" element={<Business/>} />
        <Route path="/career" element={<Careers/>} />
        <Route path="/newsroom" element={<NewsRoom/>} />
        <Route path="/location" element={<Location/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
