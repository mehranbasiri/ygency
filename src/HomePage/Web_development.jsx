import React from "react";
import square_line from "../images/square-line.png";
import "./Web_development.css";
import arrowImg from "../images/arrow.png";
import avatar from "../images/avatar.png";
import halfCircle from "../images/half-ellipse.png";
import heroImg from "../images/hero-two-min.jpg";
const Web_development = () => {
  return (
    <div className="web-development">
      <div className="top-title">
        <img className="square-img" src={square_line} />
        <div className="top-title-one">
          <h1>Website</h1>
          <div className="top-con-images">
            <img src={arrowImg} alt="arrow-img" className="arrow-img" />
            <img
              src={halfCircle}
              alt="halfCircle-img"
              className="half-circle-img"
            />
          </div>
        </div>

        <h1 className="top-titlle-h1">Develop Agency</h1>

        <div className="second-top-con">
          <div >
            <p>
              Sed ut perspiciatis unde omnis iste natus error voluptatem
              accusantium doloremque laudantium totam reme aperiam eaque abillo
              inventore
            </p>
            <img src={arrowImg} alt="arrow-img" />
            <div>
              <img src={avatar} alt="avatar-img" />
              <span>100+ Popular Clients</span>
            </div>
          </div>
         
            <img src={heroImg} alt="hero-img" className="hero-img" />
        
          <div>
            <div className="explore-more-button">
              <span>Explore More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web_development;
