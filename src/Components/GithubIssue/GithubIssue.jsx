import React from 'react'
import "../GithubIssue/GithubIssue.scss"
import card_three from "../../assets/card3.png"

function GithubIssue() {
  return (
    <div className='GithubIssue' id='GithubIssue'>
        <div className="container">

     <div  data-aos="fade-left" className="GithubIssue-child">
        <h2>
          GitHub Issues and GitHub Projects

          <span>
            supply project management tools that adapt to your team alongside
            your code.
          </span>
        </h2>
        <h3>Get started with GitHub Issues <i class="fa-solid fa-chevron-right"></i></h3>
      </div>
      <div  className="did-you-know">
        <div className="image-per">
            <img src="https://github.githubassets.com/assets/git-branch-collaboration-2-e46b1fb1d363.svg" alt="" />
        </div>
       <div data-aos="fade-right" className='oso'>
       <span>Did You Know?</span>
        <h1>80%</h1>
        <h2>reduction in onboarding <br /> time with GitHub2</h2>
       </div>
      </div>
        </div>

        <div  data-aos="fade-up" className="card-absolute">
            <img src={card_three} alt="" />
        </div>
    </div>
  )
}

export default GithubIssue