import React from "react";
import "../Application/Application.scss";
import Application_pic from "../../assets/Application_pic.png";
function Application() {
  return (
    <div id="Application" className="Application">
      <div className="Collabration-line">
        {/* <div className="line-container_one" data-aos="fade-down"></div> */}
        <div className="line-container_two" data-aos="fade-in">
          <svg
            aria-hidden="true"
            height="24"
            viewBox="0 0 24 24"
            version="1.1"
            width="24"
            data-view-component="true"
            class="octicon octicon-lock"
            fill="white"
          >
            <path d="M6 9V7.25C6 3.845 8.503 1 12 1s6 2.845 6 6.25V9h.5a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 19.5v-8A2.5 2.5 0 0 1 5.5 9Zm-1.5 2.5v8a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-13a1 1 0 0 0-1 1Zm3-4.25V9h9V7.25c0-2.67-1.922-4.75-4.5-4.75-2.578 0-4.5 2.08-4.5 4.75Z"></path>
          </svg>
        </div>
        <div className="line-container_three" data-aos="fade-down"></div>
      </div>

      <div className="top">
        <div data-aos="fade-right" className="left">
          <h3>Application security</h3>
          <h1>
            <span>Empower developers</span>
            <br />
            With GitHub, you can secure code in minutes.
          </h1>
        </div>
        <div className="right">
          <img
            src="https://github.githubassets.com/assets/shape-2-f30dcc9bd35c.svg"
            alt=""
          />
        </div>
        <div className="commit-img">
          <img src={Application_pic} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Application;
