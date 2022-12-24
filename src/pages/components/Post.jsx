import React from "react";
import "./post.css";
import me from "../../assets/me.jpg";
import { FiHeart } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";

const Post = ({user,posturl}) => {
  return (
    <div className="post">
      <div className="post__head">
        <div className="post__profile">
          <img src={me} alt="" />
        </div>
        <span>{user}</span>
      </div>

      <div className="post__img">
        <img src={me} alt="post" />
      </div>

      <div className="interact__icons">
        <FiHeart className="post__icon" />
        <FaRegComment className="post__icon" />
        <IoPaperPlaneOutline className="post__icon" />
      </div>
    </div>
  );
};

export default Post;
