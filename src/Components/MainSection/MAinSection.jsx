import React from "react";
import "../MainSection/Mainsection.scss";

function MAinSection() {
  return (
    <div id="Mainsection" className="Mainsection">
      <div className="mainsection-top">
        <h1>Let’s build from here</h1>
        <h2>The world’s leading AI-powered developer platform.</h2>
      </div>
      <div className="mainsection-mid">
        <div className="signup">
            <input type="text" placeholder="Email address"/>
            <button>Signup for Github</button>
        </div>
        <div style={{background:"#57606a", width:"1px", padding:" 0.5px", height:"100%"}}></div>
        <div className="start">
            <strong>Start a free enterprise trial<i class="fa-solid fa-chevron-right"></i></strong>
        </div>
      </div>
      <div className="mainsection-bottom">
          <h2>Trusted by the world’s leading organizations <span className="arrow-png">↘︎</span></h2>
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
  );
}

export default MAinSection;
