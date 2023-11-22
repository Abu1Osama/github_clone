import React from "react";
import "../Footer/Footer.scss";

function Footer() {
  return (
    <div id="Footer" className="Footer">
      <div className="footer-top">
        <div className="Footer-left">
          <h1>Github</h1>
          <strong>Subscribe to our developer newsletter</strong>
          <p>
            Get tips, technical guides, and best practices. Once a month. Right
            in your inbox.
          </p>
          <button>Subscribe</button>
        </div>
        <div className="Footer-right">
          <div className="right-child">
            <ul>
              <li>Product</li>
              <li>Features</li>
              <li>Enterprise</li>
              <li>Copilot</li>
              <li>Security</li>
              <li>Pricing</li>
              <li>Team</li>
              <li>Resources</li>
              <li>Roadmap</li>
              <li>Compare GitHub</li>
            </ul>
          </div>
          <div className="right-child">
            <ul>
              <li>Platform</li>
              <li>Developer API</li>
              <li>Partners</li>
              <li>Electron</li>
              <li>GitHub Desktop</li>
            </ul>
          </div>
          <div className="right-child">
            <ul>
              <li>Support</li>
              <li>Docs</li>
              <li>Community Forum</li>
              <li>Professional Services</li>
              <li>Premium Support</li>
              <li>Skills</li>
              <li>Status</li>
              <li>Contact GitHub</li>
            </ul>
          </div>
          <div className="right-child">
            <ul>
              <li>Company</li>
              <li>About</li>
              <li>Customer stories</li>
              <li>Blog</li>
              <li>The ReadME Project</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Inclusion</li>
              <li>Social Impact</li>
              <li>Shop</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <span>© 2023 GitHub, Inc.</span>
          <span>Terms</span>
          <span>Privacy (Updated 08/2022)</span>
          <span>Sitemap</span>
          <span>What is Git?</span>
        </div>
        <div className="footer-bottom-right">
          <i class="fa-brands fa-x-twitter"></i>
          <i class="fa-brands fa-square-facebook"></i>
          <i class="fa-brands fa-linkedin-in"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-twitch"></i>
          <i class="fa-brands fa-tiktok"></i>
          <i class="fa-brands fa-github"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
