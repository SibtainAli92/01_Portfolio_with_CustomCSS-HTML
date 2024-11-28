import "../../style/project.css"
import Image from "next/image"

export default function Project(){
    return (
        <div className="project-box">
            <h1 className="project-heading">My Projects</h1>
        <div className="main-div">
        <div className="project-item">
        <Image
          src="/count.png"
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

      <div className="project-item">
        <Image
          src="/simple-calculator.png"
          alt="Portfolio Item Image"
          width={300}
          height={250}
          className="portfolio-image"
        />

        <h3>Simple calculator</h3>
        <p>
        A website powered by Next.js and TypeScript, featuring a simple calculator for performing basic arithmetic operations.
        </p>
        <button type="button"><a href="https://simple-calculator-one-tau.vercel.app/"  target="_blank">View Calculator</a></button>
      </div>

      <div className="project-item">
        <Image
          src="/digital-clock.png"
          alt="digital clock"
          width={300}
          height={250}
          className="portfolio-image"
        />

        <h3>Digital Clock</h3>
        <p>
        A website presenting a modern digital clock that displays the current time with a clean and minimalist design.        </p>
        <button type="button"><a href="https://digital-clock-two-pi.vercel.app/"  target="_blank">View Clock</a></button>
      </div>

      <div className="project-item">
        <Image
          src="/joke_01.png"
          alt=""
          width={300}
          height={250}
          className="portfolio-image"
        />

        <h3>Random Joke</h3>
        <p>
        A website powered by Next.js and TypeScript, featuring a simple random joke generator for endless laughs!
                </p>
        <button type="button"><a href="https://random-joke-two.vercel.app/"  target="_blank">View Joke</a></button>
      </div>

      <div className="project-item">
        <Image
          src="/birthday.png"
          alt=""
          width={300}
          height={250}
          className="portfolio-image"
        />

        <h3>Birthday Celebration</h3>
        <p>
        Birthday celebration website featuring an elegant card design that showcases a joyful birthday message, interactive candles and balloons.                </p>
        <button type="button"><a href="https://birthday-celebration-ebon.vercel.app/"  target="_blank">View Birthday</a></button>
      </div>

        </div>     

    </div>
    )
}