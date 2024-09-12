import React from "react";
import "../styles/pages/home.css";
import NavBar from "../layout/navbar/index.jsx";
import Footer from "../layout/footer/index.jsx";
import HeroSection from "../layout/main/home.hero.jsx";

function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Footer />
    </>
  );
}

export default Home;
