import "../../style/project.css"
import Image from "next/image"

export default function Project(){
    return (
        <div className="project-box">
            <h1 className="project-heading">My Projects</h1>
        <div className="main-div">
        <div className="project-item">
        <Image
          src="/countdown_timer.png"
          alt="Portfolio Item Image"
          width={300}
          height={250}
          className="portfolio-image"
        />

        <h3>Countdown Timer</h3>
        <p>
          A website powered by Next.js and TypeScript, featuring an interactive
          countdown function for tracking events.
        </p>
        <button type="button"><a href="https://01-countdown-timer-tau.vercel.app/"  target="_blank">View Timer</a></button>
      </div> 
      
        
            
      <div className="project-item">
        <Image
          src="/cv.png"
          alt="Portfolio Item Image"
          width={300}
          height={250}
          className="portfolio-image"
        />

        <h3>Static Interactive Resume</h3>
        <p>
        An interactive resume built with TypeScript, HTML, and CSS, enabling users to dynamically showcase their skills.
        </p>
        <button type="button"><a href="https://static-interactive-resume-builder-gamma.vercel.app//"  target="_blank">View Resume</a></button>
      </div>

            
      <div className="project-item">
        <Image
          src="/todo_list.png"
          alt="Portfolio Item Image"
          width={300}
          height={250}
          className="portfolio-image"
        />

        <h3>Todo List</h3>
        <p>
        A task management application built with React and TypeScript, designed for efficient organization and productivity.
        </p>
        <button type="button"><a href="https://02-todo-list.vercel.app/"  target="_blank">View List</a></button>
      </div>

        </div>     

    </div>
    )
}