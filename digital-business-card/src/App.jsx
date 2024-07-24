import React from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Headshot from "./components/Headshot";
import Introduction from "./components/Introduction";
import Interests from "./components/Interests";
import Socials from "./components/Socials";

import "./styles.css";

import headshot from "./images/headshot.png";

export default function App() {
  const aboutMeContent =
    "I am a recent graduate from Florida State University with a BS in Computer Science and Mathematics. I specialize in full-stack development using Django, Node.js, React, MongoDB, and SQLite. I am passionate about problem-solving, innovation, and continuous learning, always aiming to create efficient and scalable web applications.";
  const interestsContent =
    "My interests include web development, where I enjoy building dynamic and responsive applications, and artificial intelligence, particularly integrating AI solutions to enhance web functionality. Additionally, I am an avid sports enthusiast and a dedicated Phillies fan.";

  return (
    <main className="container">
      <Headshot src={headshot} alt="Josh Lowe Headshot" />
      <Introduction
        name="Josh Lowe"
        position="Full-Stack Developer"
        portfolioName="jlowe.ai"
        portfolioUrl="https://www.jlowe.ai"
      />
      <Contact
        email="joshlowe.cs@gmail.com"
        linkedInUrl="https://www.linkedin.com/in/joshrlowe/"
      />
      <About content={aboutMeContent} />
      <Interests content={interestsContent} />
      <Socials
        xUrl="https://x.com/joshrlowe_"
        facebookUrl="https://www.facebook.com/josh.lowe.549221"
        instagramUrl="https://www.instagram.com/joshrlowe/"
        gitHubUrl="https://github.com/joshrlowe"
      />
    </main>
  );
}
