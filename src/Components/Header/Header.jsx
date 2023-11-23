import React, { useState } from "react";
import "../Header/Header.scss";

function Header() {
  const [source, setSource] = useState(false);
  const [solution, setSolution] = useState(false);

  const opensource = () => {
    setSource(true);
  };
  const closesource = () => {
    setSource(false);
  };
  const opensolution = () => {
    setSolution(true);
  };
  const closesolution = () => {
    setSolution(false);
  };
  return (
    <div id="Header" className="Header">
      <div className="left">
        <div className="left-ico">
          <i class="fa-brands fa-github fa-2xl"></i>
        </div>
        <div className="left-content">
          <ul>
            <li>
              Product <i class="fa-solid fa-angle-down"></i>
            </li>
            <li className="open-solution" onMouseEnter={opensolution}>
              Solutions <i class="fa-solid fa-angle-down"></i>
              {solution && (
                <div className="open-solution-data" onMouseLeave={closesolution}>
                  <div>
                    <h4>For</h4>
                    <p>Enterprise</p>
                    <p>Teams</p>
                    <p>Startups</p>
                    <p>Education</p>
                  </div>
                  <div>
                    <h4>By Solution</h4>
                    <p>CI/CD % Automation</p>
                    <p>DevOps</p>
                    <p>DevSecOps</p>
                  </div>
                  <div style={{borderBottom:"none"}}>
                    <h4>Resources</h4>
                    <p>Learning Pathway</p>
                    <p>White Papers ,Ebooks,Webinars</p>
                    <p>Partners</p>
                  </div>
                </div>
              )}
            </li>
            <li className="open-source" onMouseEnter={opensource}>
              Open Source <i class="fa-solid fa-angle-down"></i>
              {source && (
                <div className="open-source-data" onMouseLeave={closesource}>
                  <div>
                    <h4>GitHub Sponsors</h4>
                    <p>Fund open source developers</p>
                  </div>
                  <div>
                    <h4>The ReadME Project</h4>
                    <p>GitHub Community articles</p>
                  </div>
                  <div style={{borderBottom:"none"}}>
                    <h4>Repositories</h4>
                    <p>Topic</p>
                    <p>Trending</p>
                    <p>Collection</p>
                  </div>
                </div>
              )}
            </li>
            <li>Pricing</li>
          </ul>
        </div>
      </div>
      <div className="right">
        <div className="inp">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search or jump to..." />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="20"
            aria-hidden="true"
            class="mr-1"
          >
            <path
              fill="none"
              stroke="#979A9C"
              opacity=".4"
              d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"
            ></path>
            <path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z"></path>
          </svg>
        </div>
        <div className="user">
          <button style={{ border: "none" }}>Sign in</button>
          <button>Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
