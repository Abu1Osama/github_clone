import React from "react";
import "../Card/Card.scss";
import card_one from "../../assets/card_one.png"
import card_two from "../../assets/card_2.png"

function Card() {
  return (
    <div id="Card" className="Card">
      <div className="left-card">
        <div className="card-data">
          <h1>
            GitHub Discussions <span> creates space to ask questions and have
            open-ended conversations.</span>
          </h1>
          <h2>Jump into GitHub Discussions <i class="fa-solid fa-chevron-right"></i></h2>
        </div>
        <img src={card_one} alt="" />
      </div>
      <div className="right-card">
        <div className="card-data">
          <h1>
            Pull requests <span>allow real-time communication and collaboration about
            code changes.</span>
          </h1>
          <h2>Check out pull requests <i class="fa-solid fa-chevron-right"></i></h2>
        </div>
        <img src={card_two} alt="" />
      </div>
    </div>
  );
}

export default Card;
