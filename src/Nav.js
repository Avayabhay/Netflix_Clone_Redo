import React from "react";
import "./Nav.css";
import { useState, useEffect } from "react";

function Nav() {
  const [handle, setHandle] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setHandle(true);
      } else {
        setHandle(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${handle && "handle"}`}>
      <img
        className="nav_img logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt=""
      />
      <img
        className="nav_img avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt=""
      />
    </div>
  );
}

export default Nav;
