import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import { FaGithub, FaRegPlayCircle } from "react-icons/fa";
import { VscGlobe } from "react-icons/vsc";

const data = [
  {
    id: 1,
    image: IMG1,
    name: 'Travel Seekers',
    tech: ['React', 'Redux', 'HTML',  'CSS'],
    title: "Travel boooking website",
    github: "https://github.com/ashishsen003/travel-seekers",
    demo: "https://travel-seekers.vercel.app/home",
  },

  {
    id: 2,
    image: IMG2,
    name: 'Gem Garden',
    tech: ['React', 'Redux', 'HTML',  'CSS'],
    title: "Jewellery shopping website",
    github: "https://github.com/ashishsen003/gem-garden",
    demo: "https://gemgarden.netlify.app",
  },

  {
    id: 3,
    image: IMG3,
    name: 'Edukin',
    tech: ['Javascript', 'HTML',  'CSS'],
    title: "Language course website",
    github: "https://github.com/ashishsen003/edukin-courses",
    demo: "https://edukin-language-learning.netlify.app",
    
  },

  {
    id: 4,
    image: IMG4,
    name: 'Create Creation',
    tech: ['Javascript', 'HTML',  'CSS'],
    title: "Digital servies providing website",
    github: "https://github.com/ashishsen003/create-creation",
    demo: "https://create-creation.netlify.app/",
  },
  // {
  //   id: 5,
  //   image: IMG3,
  //   title: "Figma dashboard UI kit for data design web apps",
  //   github: "https://github.com",
  //   demo: "https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  // },
  // {
  //   id: 6,
  //   image: IMG3,
  //   title: "Figma dashboard UI kit for data design web apps",
  //   github: "https://github.com",
  //   demo: "https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  // },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {data.map(({id, image, name, tech, title, github, demo})=>{
            return (
              <article key={id} className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h2>{name}</h2>
                  <p>{title}</p>
                  {tech.map((el, i)=>{
                    return <span>{el}</span>
                  })}
                  <div className="portfolio__item-cta">
                    <a
                      href={github}
                      className="link__btn"
                      target="_blank"
                    >
                      < FaGithub />
                    </a>
                    <a
                      href={demo}
                      className="link__btn"
                      target="_blank"
                    >
                      <FaRegPlayCircle />
                    </a>
                  </div>
              </article>
            )
        })}
      </div>
    </section>
  );
};

export default Portfolio;
