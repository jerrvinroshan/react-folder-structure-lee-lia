import React from "react";
import "../styles/pages/home.css";
import NavBar from "../layout/navbar/index.jsx";
import Footer from "../layout/footer/index.jsx";
import Home from "../layout/main/home.jsx"


function Index() {
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
    </>
  );
}

export default Index;
