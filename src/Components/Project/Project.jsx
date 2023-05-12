import React from "react";
import "./Project.css";
import { project1, project2,github} from "../../assets/export";

function Project() {
  return (
    <div className="projectContainer">
      <div className="commonMainLogo">
        <a href="https://linktr.ee/anirudhdayanand">
          <div className="LogoHover3">
            <h1 className="subLogo mainLogo">Anirudh Dayanandan</h1>
          </div>
        </a>
      </div>
      <div className="projectsNexperience">
        <h1 className="expMainTitle">Experience</h1>
        <div className="experienceContainer">
          <div className="experinceFrame exp1">
            <div className="expHeading">
              <h3 className="expTitle">Cloud Facilitator</h3>
              <h3 className="expTitle expYear">2020 - 2024</h3>
            </div>
            <p className="expDesc">
              Bachelor of Science in Digital Media Design is a highly
              interdisciplinary degree that prepares students to work in the
              ever-growing field of digital media. Students who pursue this
              degree will gain a deep understanding of the principles of design,
            </p>
          </div>
          <div className="experinceFrame exp2">
            <div className="expHeading">
              <h3 className="expTitle">Cloud Facilitator</h3>
              <h3 className="expTitle expYear">2020 - 2024</h3>
            </div>
            <p className="expDesc">
              Bachelor of Science in Digital Media Design is a highly
              interdisciplinary degree that prepares students to work in the
              ever-growing field of digital media. Students who pursue this
              degree will gain a deep understanding of the principles of design,
            </p>
          </div>
          <div className="experinceFrame exp3">
            <div className="expHeading">
              <h3 className="expTitle">Cloud Facilitator</h3>
              <h3 className="expTitle expYear">2020 - 2024</h3>
            </div>
            <p className="expDesc">
              Bachelor of Science in Digital Media Design is a highly
              interdisciplinary degree that prepares students to work in the
              ever-growing field of digital media. Students who pursue this
              degree will gain a deep understanding of the principles of design,
            </p>
          </div>
          <div className="experinceFrame exp4">
            <div className="expHeading">
              <h3 className="expTitle">Cloud Facilitator</h3>
              <h3 className="expTitle expYear">2020 - 2024</h3>
            </div>
            <p className="expDesc">
              Bachelor of Science in Digital Media Design is a highly
              interdisciplinary degree that prepares students to work in the
              ever-growing field of digital media. Students who pursue this
              degree will gain a deep understanding of the principles of design,
            </p>
          </div>
        </div>

        <h1 className="projMainTitle">Project</h1>
        <br />
        {/*       
      <div className="projectContainer">
        <div className="projectFrame">
          <img src={project2} alt="" className="projectImage" />
          <div className="projectContent">
            <h3 className="projectTitle">Sylabus Condensor</h3>
            <p className="projdescription">
              Bachelor of Science in Digital Media Design is a highly
              interdisciplinary degree that prepares students to work in the
              ever-growing field of digital media. Students who pursue this
              degree will gain a deep understanding of the principles of design,{" "}
            </p>
          </div>
        </div>
        <div className="projectFrame">
          <img src={project2} alt="" className="projectImage" />
          <div className="projectContent">
            <h3 className="projectTitle">Sylabus Condensor</h3>
            <p className="projdescription">
              Bachelor of Science in Digital Media Design is a highly
              interdisciplinary degree that prepares students to work in the
              ever-growing field of digital media. Students who pursue this
              degree will gain a deep understanding of the principles of design,{" "}
            </p>
          </div>
        </div>
        <div className="projectFrame">
          <img src={project2} alt="" className="projectImage" />
          <div className="projectContent">
            <h3 className="projectTitle">Sylabus Condensor</h3>
            <p className="projdescription">
              Bachelor of Science in Digital Media Design is a highly
              interdisciplinary degree that prepares students to work in the
              ever-growing field of digital media. Students who pursue this
              degree will gain a deep understanding of the principles of design,{" "}
            </p>
          </div>
        </div>
      </div> */}

        <div class="card-list">
          <article class="card">
            <figure class="card-image">
              <img
                src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyNDcwMTUwOQ&ixlib=rb-1.2.1&q=85"
                alt="An orange painted blue, cut in half laying on a blue background"
              />
            </figure>
            <div class="card-header">
              <a href="#">When life gives you oranges</a>
              <button class="icon-button">
        
                <img src={github} alt="" />
              </button>
            </div>
          </article>
          <article class="card">
            <figure class="card-image">
              <img
                src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyNDcwMTUwOQ&ixlib=rb-1.2.1&q=85"
                alt="An orange painted blue, cut in half laying on a blue background"
              />
            </figure>
            <div class="card-header">
              <a href="#">When life gives you oranges</a>
              <button class="icon-button">
        
                <img src={github} alt="" />
              </button>
            </div>
          </article>
          <article class="card">
            <figure class="card-image">
              <img
                src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyNDcwMTUwOQ&ixlib=rb-1.2.1&q=85"
                alt="An orange painted blue, cut in half laying on a blue background"
              />
            </figure>
            <div class="card-header">
              <a href="#">When life gives you oranges</a>
              <button class="icon-button">
        
                <img src={github} alt="" />
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Project;
