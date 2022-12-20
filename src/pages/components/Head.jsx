import React from "react";
import "./head.css";
import { FaInstagram } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { BiMessageSquareAdd } from "react-icons/bi";
const Head = () => {
  return (
    <div className="head">
      <div className="logo1">
        <FaInstagram className="icon1" />
        <span>Instagram</span>
      </div>

      <div className="logo2">
        <BiMessageSquareAdd className="icon2" />
        <BsChatDots className="icon2" />
      </div>
    </div>
  );
};

export default Head;
