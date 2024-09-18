import React from "react";
import "../../styles/layout/home.hero.css";
import CustomButton from "../../components/Btn/CustomButton";
import rightArrow from "../../assets/image/rightArrow.svg";

function HeroSection() {
  return (
    <>
      <div className="Home__heroSection">
        <div className="Home__heroSectionImg">
          {/* <img src={image} alt="" className="HeroSectionImg" /> */}
          <div className="Home__heroSection__content">
            <div className="Home__heroSection__heading--container">
              <h1 className="Home__heroSection__heading--h1">
                Lee & Lia International
              </h1>
              <p className="Home__heroSection__heading--p">
                Lorem ipsum dolor sit amet consectetur. Sed habitant odio
                interdum sed tristique sed duis rhoncus. Et molestie
                pellentesque luctus eget fermentum aliquam. Eget commodo non
                interdum duis. Adipiscing ultrices donec scelerisque odio massa
                lorem. Et nam lacinia nisl donec sed. Quis suspendisse ultricies
              </p>
            </div>
            <CustomButton
              link="/business"
              class="PrimaryBtn"
              btnName={
                <div className="btnContainer">
                  <p className="btnNametext">Our Business</p>
                  <img src={rightArrow} alt="Our Business" />
                </div>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
