import React from "react";
import "../Collabration/Collabration.scss";
import commit_img from "../../assets/commit_pic.png";

function Collabration() {
  return (
    <div id="Collabration" className="Collabration">
      <div className="top">
        <div data-aos="fade-right"  className="left">
          <h3>Collaboration</h3>
          <h1>
            <span>Supercharge collaboration</span>
            <br />
            GitHub helps your teams work more efficiently together.
          </h1>
        </div>
        <div className="right">
          <img
            src="https://github.githubassets.com/assets/shape-3-9e542b5c31b8.svg"
            alt=""
          />
        </div>
        <div className="commit-img">
          <img src={commit_img} alt="" />
        </div>
      </div>
  
    </div>
  );
}

export default Collabration;
