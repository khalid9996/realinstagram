import React from "react";
import "./nav.css";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { RiInstagramLine } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import me from "../../assets/me.jpg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <HiHome className="nav__icons" />
      <BiSearch className="nav__icons" />
      <RiInstagramLine className="nav__icons" />
      <FiHeart className="nav__icons" />
      <Link to="/profile"><div className="profile__icon">
        <img src={me} alt="profile" />
      </div></Link>
    </nav>
  );
};

export default Nav;
