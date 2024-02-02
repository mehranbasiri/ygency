import React, { useEffect } from "react";
import square_line from "../images/square-line.png";
import "./Web_development.css";
import arrowImg from "../images/arrow.png";
import avatar from "../images/avatar.png";
import halfCircle from "../images/half-ellipse.png";
import heroImg from "../images/hero-two-min.jpg";
import { IoIosArrowRoundUp } from "react-icons/io";
import { popularServicers, skills } from "./data";
import banner_hero from "../images/add-banner-min.png";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { LiaArrowRightSolid } from "react-icons/lia";
import CountUp from "react-countup";
import aboutShape from "../images/about-image-shape-min.png";
import { FiArrowUpRight } from "react-icons/fi";
import ScrollText from "./ScrollText";
import RecentWorksGallery from "./RecentWorksGallery";
import TeamMembers from "./TeamMembers/TeamMembers";

const Web_development = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  const AnimRight = {
    hidden: {
      opacity: 0,
      x: +75,
      transition: { ease: "easeOut", duration: 0.75 },
    },
    visible: { opacity: 1, x: 0 },
  };
  const titleAnimTop = {
    hidden: {
      opacity: 0,
      y: 75,
      transition: { ease: "easeOut", duration: 0.75 },
    },
    visible: { opacity: 1, y: 0 },
  };
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
          <div className="first-div">
            <p>
              Sed ut perspiciatis unde omnis iste natus error voluptatem
              accusantium doloremque laudantium totam reme aperiam eaque abillo
              inventore
            </p>
            <img src={arrowImg} alt="arrow-img" />
            <div className="popular-clients">
              <img src={avatar} alt="avatar-img" />
              <span>100+ Popular Clients</span>
            </div>
          </div>

          <img src={heroImg} alt="hero-img" className="hero-img" />

          <div>
            <div className="explore-more-button">
              <IoIosArrowRoundUp />

              <span>
                Explore
                <br /> More
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="numerous-topics-con">
        <div className="popular-project">
          <motion.div
            className="left"
            variants={{
              hidden: {
                opacity: 0,
                x: -75,
                transition: { ease: "easeOut", duration: 0.75 },
              },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{
              ease: "linear",
              duration: 1,
            }}
          >
            <img src={banner_hero} alt="banner-hero" className="left-hero" />
            <div className="left-info">
              <h1>150+</h1>
              <h5>Project Completed</h5>
              <hr />
              <p>Quis autem vel eum reprehe voluptate velit esse quam</p>
            </div>
          </motion.div>
          <motion.div
            className="right"
            variants={AnimRight}
            initial="hidden"
            transition={{
              ease: "linear",
              duration: 1,
            }}
            animate="visible"
          >
            <h3>
              Innovative Web <br /> Development Solutions
            </h3>
            <hr />
            <div className="info">
              <img src={avatar} alt="avatar" />
              <p>We denounce indignatione dislike mende charms</p>
            </div>
          </motion.div>
        </div>
        <div className="skills">
          <motion.h1
            variants={titleAnimTop}
            initial="hidden"
            ref={ref}
            animate="visible"
            transition={{
              ease: "linear",
              duration: 1,
            }}
          >
            Here are Numerous Topics That Will Enhance Your Skills
          </motion.h1>
          <div className="skills-items">
            {skills.map((item) => (
              <div className="skills-item" key={item.id}>
                <img src={item.img} alt={item.title} />
                <h2>{item.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="about-company">
        <div className="about-company-text">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -75,
                transition: { ease: "easeOut", duration: 0.75 },
              },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            ref={ref}
            animate={control}
            transition={{
              ease: "linear",
              duration: 1,
            }}
          >
            <h4>
              <LiaArrowRightSolid />
              About Company
            </h4>
            <h1>We’re Award-winning Web Development Agency</h1>
          </motion.div>
          <motion.div
            variants={titleAnimTop}
            initial="hidden"
            ref={ref}
            animate={control}
            transition={{
              ease: "linear",
              duration: 1,
            }}
          >
            <div className="about-company-info">
              <hr />
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                emey accusantium doloremque laudantium totam aperiam eaque
                quabillo inventore veritatisey quasi architecto beatae dictasunt
              </p>
            </div>

            <div className="about-compan-counters">
              <div className="counter-item">
                <h2>
                  <CountUp duration={10} className="counter" end={100} />%
                </h2>
                <span>Clients Satisfactions</span>
              </div>
              <div className="counter-item">
                <h2>
                  {" "}
                  <CountUp duration={10} className="counter" end={93} />%
                </h2>
                <span>Success Rating</span>
              </div>{" "}
              <div className="counter-item">
                <h2>
                  {" "}
                  <CountUp duration={10} className="counter" end={55} />%
                </h2>
                <span>Project Complete</span>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="about-company-img">
          <motion.img
            src={aboutShape}
            alt="about-shape"
            variants={AnimRight}
            initial="hidden"
            transition={{
              ease: "linear",
              duration: 1,
            }}
            ref={ref}
            animate={control}
          />
        </div>
      </div>

      <div className="popular-services">
        <h4>
          <LiaArrowRightSolid />
          Popular services
        </h4>
        <h1>We Provide Amazing Web Design Solutions</h1>

        <div className="popular-services-items">
          {popularServicers.map((item) => (
            <div className="popular-service-item" key={item.id}>
              <div className="btn">
                <FiArrowUpRight />
              </div>

              <div>
                {item.icon}
                <div className="circle"></div>
              </div>

              <div className="title-img-sec">
                <h6>{item.tite}</h6>
                <img src={item.img} alt={item.tite} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <ScrollText />
      </div>

      <div className="recent-work-gallery">
        <RecentWorksGallery />
      </div>

      <div className="team-members-con">
        <TeamMembers />
      </div>
    </div>
  );
};

export default Web_development;
