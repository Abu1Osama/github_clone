import React from "react";
import "../BottomSection/BottomSection.scss";
import globe from "../../assets/globe.png";

function BottomSection() {
  return (
    <div id="BottomSection" className="BottomSection">
      <div className="BottomSection-top">
        <div className="BottomSection-left">
          <div className="BottomSection-left-first" data-aos="fade-down"></div>
          <div className="BottomSection-left-second">
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
        </div>
        <div className="BottomSection-right">
          <div className="mainsection-top">
            <h1>Over 100 million developers call GitHub home</h1>
            <h2>
              Whether you’re scaling your startup or just learning how to code,
              GitHub is your home. Join the world’s largest developer platform
              to build the innovations that empower humanity. Let’s build from
              here.
            </h2>
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
        </div>
      </div>

      <div className="mainsection-bottom">
        <img src={globe} alt="" />

        <div className="bottom-desc">
          <p>
            1. This 7X times factor is based on data from the industry’s longest
            running analysis of fix rates Veracode State of Software Security
            2023, which cites the average time to fix 50% of flaws as 198 days
            vs. GitHub’s fix rates of 72% of flaws with in 28 days which is at a
            minimum of 7X faster when compared.
          </p>
          <p>
            2. The Total Economic Impact™ Of GitHub Enterprise Cloud and
            Advanced Security, a commissioned study conducted by Forrester
            Consulting, 2022. Results are for a composite organization based on
            interviewed customers.
          </p>
          <p>
            3. There are now 100 million developers around the world using
            GitHub. <span>Read the blog post.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BottomSection;
