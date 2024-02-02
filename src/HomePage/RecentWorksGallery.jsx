import React from "react";
import { LiaArrowRightSolid } from "react-icons/lia";
import { IoIosArrowRoundUp } from "react-icons/io";
import "./Web_development.css";
import { GoArrowUpRight } from "react-icons/go";
import project_timeline  from "../images/project-timeline-two1.jpg"
const RecentWorksGallery = () => {
  const recentWorksData = [
    {
      number: "01",
      content: "Business Task management Dashboard Design",
    },
    {
      number: "02",
      content: "PSD,Figma & XD to HTML Design & Development",
    },
    {
      number: "03",
      content: "Mobile Application Design & Development",
    },
    {
      number: "04",
      content: "Business Development and Marketing Strategy",
    },
    {
      number: "05",
      content: "eCommerce React Website Development",
    },
    {
      number: "06",
      content: "3D Flat UI UX Landing Page Design & Development",
    },
  ];
  return (
    <div className="recent-work">
      <div className="recent-work-top-sec">
        <div className="reccent-work-tilte">
          <h4>
            {" "}
            <LiaArrowRightSolid /> Recent Works Gallery
          </h4>
          <h1>Lat’s Look Our Recent Project Gallery</h1>
        </div>

        <div className="explore-more-button">
          <IoIosArrowRoundUp />

          <span>
            Explore
            <br /> More
          </span>
        </div>
      </div>
      <div className="recent-work-content-sec">
        {recentWorksData.map((item) => (
          <div className="content-item">
            <div className="content">
              <span>{item.number}</span>
              <h6>{item.content}</h6>
              <img src={project_timeline} alt="" />
              <GoArrowUpRight />
            </div>

            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentWorksGallery;
