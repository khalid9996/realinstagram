import React from "react";
import "./story.css";
import me from "../../assets/me.jpg";
import sampledp from "../../assets/sampledp.jpg";

const Story = () => {
  return (
    <div className="story__main">
      <div className="my__story">
        <div className="your__story__bg">
          <div className="your__story">
            <img src={me} alt="" />
          </div>
        </div>
      </div>

      <div className="other__story__collection">
        <div className="other__story__bg">
          <div className="other__story">
            <img src={sampledp} alt="" />
          </div>
        </div>
        <div className="other__story__bg">
          <div className="other__story">
            <img src={sampledp} alt="" />
          </div>
        </div>
        <div className="other__story__bg">
          <div className="other__story">
            <img src={sampledp} alt="" />
          </div>
        </div>
        <div className="other__story__bg">
          <div className="other__story">
            <img src={sampledp} alt="" />
          </div>
        </div>
        <div className="other__story__bg">
          <div className="other__story">
            <img src={sampledp} alt="" />
          </div>
        </div>
        <div className="other__story__bg">
          <div className="other__story">
            <img src={sampledp} alt="" />
          </div>
        </div>
        <div className="other__story__bg">
          <div className="other__story">
            <img src={sampledp} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
