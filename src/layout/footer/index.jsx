import React from "react";
import "./style.css";
import SocialMediaIcon from "../../components/socialmedia/socialmediaIcon";
import Footerlogo from "./brand/FooterLogo.png";

function Footer() {
  return (
    <>
      <footer className="Bg">
        <div className="FooterContainer">
          <div className="LogoContainer">
            <div className="DetailContainer">
              <img src={Footerlogo} alt="Logo" className="FooterImg" />
              <p className="detail">
                Lorem ipsum dolor sit amet consectetur. Posuere id placerat
                egestas risus tempor proin accumsan id. Sit in eget massa et
                ornare. Accumsan aenean turpis tellusLorem ipsum dolor sit amet
                consectetur. Posuere id placerat egestas risus tempor proin
                accumsan id. Sit in eget massa et ornare. Accumsan aenean turpis
                tellus
              </p>
            </div>
            <SocialMediaIcon />
          </div>
        </div>
        <hr />
        <p className="Copyright">Copyright 2024 Lee & Lia Group</p>
      </footer>
    </>
  );
}

export default Footer;
