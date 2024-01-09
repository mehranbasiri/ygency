import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";
import { IoIosArrowDown } from "react-icons/io";

import "./Navbar.css";
const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  // group-hover:md:block hover:md:block
  // absolute top-20 hidden

  return (
    <>
      {links.map((link) => (
        <div>
          <div className="navbar-items group">
            <div className="navbar-item-box">
              <h1 className="navbar-item">{link.name}</h1>
              {link.sublinks.length ? <IoIosArrowDown /> : ""}
            </div>
            {link.submenu && (
              <div>
                <div className="nav-list">
                  <div className="py-3"></div>
                  <div className="link-items">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        {mysublinks.sublink.map((slink) => (
                          <>
                            <li >
                              <Link className="link-item" to={slink.link}>{slink.name}</Link>
                            </li>
                            <hr />
                          </>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          {/* <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      ))}
    </>
  );
};

export default NavLinks;
