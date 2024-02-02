import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./TeamMembers.css";
import { Autoplay } from "swiper/modules";
import { GoArrowUpRight } from "react-icons/go";
import {
  BiLogoTwitter,
  BiLogoLinkedin,
  BiLogoInstagram,
  BiLogoFacebook,
} from "react-icons/bi";

import member1 from "../../images/member1-min.jpg";
import member2 from "../../images/member6-min.jpg";
import member3 from "../../images/member7-min.jpg";
import member4 from "../../images/member8-min.jpg";
import member5 from "../../images/member9-min.jpg";
import member6 from "../../images/member10-min.jpg";
import { LiaArrowRightSolid } from "react-icons/lia";

export default function TeamMembers() {
  const swiperData = [
    {
      id: 0,
      name: "Ptrick V. Schroeder",
      field: "UI/UX Designer",
      img: [member1],
    },
    {
      id: 1,
      name: "Ptrick V. Schroeder",
      field: "UI/UX Designer",
      img: [member2],
    },
    {
      id: 2,
      name: "Michaael A .Braun",
      field: "Apps Designer",
      img: [member3],
    },
    {
      id: 3,
      name: "Ptrick V. Schroeder",
      field: "UI/UX Designer",
      img: [member4],
    },
    {
      id: 4,
      name: "Michaael A .Braun",
      field: "Web Designer",
      img: [member5],
    },
    {
      id: 5,
      name: "Ptrick V. Schroeder",
      field: "Apps Designer",
      img: [member6],
    },
  ];
  return (
    <> 
      
      <div className="team-members">
        <div className="team-members-title">
        <h4>
          <LiaArrowRightSolid />
          Popular services
        </h4>
        </div>
  
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {swiperData.map((item) => (
          <SwiperSlide>
            <div className="swiper-item">
              <img src={item.img} alt="" />
              <div className="hovered-image">
                <div className="social-media">
                  <div className="circle-icon">
                    <BiLogoFacebook />
                  </div>
                  <div className="circle-icon">
                    <BiLogoTwitter />
                  </div>
                  <div className="circle-icon">
                    <BiLogoLinkedin />
                  </div>
                  <div className="circle-icon">
                    <BiLogoInstagram />
                  </div>
                </div>
              </div>
              <div className="info">
                <div>
                  <h2>{item.name}</h2>
                  <span>{item.field}</span>
                </div>
                <GoArrowUpRight />
              </div>
            </div>
          </SwiperSlide>
        ))}
        </Swiper>
        </div>
    </>
  );
}
