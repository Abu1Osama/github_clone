import React from "react";
import "../MainSection/Mainsection.scss";

function MAinSection() {
  return (
    <div id="Mainsection" className="Mainsection">
      <div className="mainsection-left">
        <div className="mainsection-left-first">o</div>
        <div className="mainsection-left-second" style={{background:" linear-gradient(transparent, #7C72FF 30%)"}}></div>
        <div className="mainsection-left-third">
          <svg
            aria-hidden="true"
            height="24"
            viewBox="0 0 24 24"
            version="1.1"
            width="24"
            data-view-component="true"
            class="octicon octicon-code"
            fill="white"
          >
            <path d="M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z"></path>
          </svg>
        </div>
        <div className="mainsection-left-four"></div>
      </div>
      <div className="mainsection-right">
        <div className="mainsection-top">
          <h1>Let’s build from here</h1>
          <h2>The world’s leading AI-powered developer platform.</h2>
        </div>
        <div className="mainsection-mid">
          <div className="signup">
            <input type="text" placeholder="Email address" />
            <button>Signup for Github</button>
          </div>
          <div
            style={{
              background: "#57606a",
              width: "1px",
              padding: " 0.5px",
              height: "100%",
            }}
          ></div>
          <div className="start">
            <strong>
              Start a free enterprise trial
              <i class="fa-solid fa-chevron-right"></i>
            </strong>
          </div>
        </div>
        <div className="mainsection-bottom">
          <h2>
            Trusted by the world’s leading organizations{" "}
            <span className="arrow-png">↘︎</span>
          </h2>
          <div className="brands">
            <img
              src="https://github.githubassets.com/assets/3m-0151c2fda0ce.svg"
              alt=""
            />
            <img
              src="https://github.githubassets.com/assets/kpmg-c249f20c5173.svg"
              alt=""
            />
            <img
              src="https://github.githubassets.com/assets/mercedes-fcf97d2d6ec4.svg"
              alt=""
            />
            <img
              src="https://github.githubassets.com/assets/sap-96248a56d312.svg"
              alt=""
            />
            <img
              src="https://github.githubassets.com/assets/pg-f1f19955c4e4.svg"
              alt=""
            />
            <img
              src="https://github.githubassets.com/assets/telus-df0c2109df99.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MAinSection;
