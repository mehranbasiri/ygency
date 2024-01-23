import React from "react";
import "./Scrolling-text.css";
import { TbJewishStarFilled } from "react-icons/tb";

const ScrollText = () => {
  return (
    <div className="scroll-text">
      <div className="scroll">
        <div className="rightToLeft">
          <div className="scroll-item">
            <p>
              Web Development <TbJewishStarFilled />
            </p>
            <p>
              Web Development <TbJewishStarFilled />
            </p>
            <p>
              Mobile Application <TbJewishStarFilled />
            </p>
            <p>
              Product Design <TbJewishStarFilled />
            </p>
            <p>
              UX/UI Strategy <TbJewishStarFilled />
            </p>
            <p>
              Web Development <TbJewishStarFilled />{" "}
            </p>
            <p>
              Web Development <TbJewishStarFilled />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollText;
