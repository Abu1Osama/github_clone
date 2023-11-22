import React from "react";
import "../BottomSection/BottomSection.scss";
import globe from "../../assets/globe.png";

function BottomSection() {
  return (
    <div id="BottomSection" className="BottomSection">
      <div className="mainsection-top">
        <h1>Over 100 million developers call GitHub home</h1>
        <h2>
          Whether you’re scaling your startup or just learning how to code,
          GitHub is your home. Join the world’s largest developer platform to
          build the innovations that empower humanity. Let’s build from here.
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
            2. The Total Economic Impact™ Of GitHub Enterprise Cloud and Advanced
            Security, a commissioned study conducted by Forrester Consulting,
            2022. Results are for a composite organization based on interviewed
            customers.
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
