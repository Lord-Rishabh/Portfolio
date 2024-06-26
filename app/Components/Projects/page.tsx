"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";



// Project Section :
const ProjectsSection = () => {

  const [projectsData, setProjectsData] = useState([
    {
      id: 2,
      title: "NewsByRishabh",
      description: "Crafted a dynamic and interactive news experience using React, HTML, CSS, and JavaScript. Real-time news data integration and categorization features ensure a seamless user journey.",
      image: "/images/newsByRishabh.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 1,
      title: "Portfolio Website",
      description: "Portfolio crafted with Next.js, Tailwind, HTML, and TypeScript or a seamless and responsive user experience, combining performance, responsiveness, and sleek design.",
      image: "/images/portfolio.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Lord-Rishabh/Portfolio",
      previewUrl: "https://65ae20872b475201a90cc3ab--splendid-centaur-441cda.netlify.app/",
    },
    {
      id: 3,
      title: "INoteBook",
      description: "A user-friendly note-taking web app, ensuring 100% data security with robust authentication. Seamlessly created, edited, and deleted notes with HTML, CSS, React.js, Node.js, Express.js, and MongoDB.",
      image: "/images/iNoteBook.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    
  ]);

  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Button handling functions and useState
  const [button, setButton] = useState(false);

  const handleButton = () => {
    setButton(true);
    const newProject = [{
      id: 4,
      title: "Simon Game",
      description: "Experience the classic memory challenge brought to life with my creation using HTML, CSS, and JavaScript. Replicating the iconic Simon Game with a blend of fun and functionality.",
      image: "/images/simonGame.png",
      tag: ["All", "Mobile"],
      gitUrl: "https://github.com/Lord-Rishabh/Simon-Game",
      previewUrl: "https://lord-rishabh.github.io/Simon-Game/",
    },
    {
      id: 5,
      title: "Drum-Kit",
      description: "Dive into the rhythm with my interactive drum kit, skillfully crafted using HTML, CSS, and JavaScript. Each click resonates with a unique sound, offering an immersive and dynamic musical experience. ",
      image: "/images/drumKit.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Lord-Rishabh/Drum-Kit",
      previewUrl: "https://lord-rishabh.github.io/Drum-Kit/",
    },
    ];
    setProjectsData([...projectsData, ...newProject]);
  }

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className="gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 " id="#projects">
      <section id="projects">
        <div className=" flex items-center ">
          <h2 className="text-4xl font-bold text-white 
          mb-4 ">Latest <span className="text-3xl text-[#50dfa8]">Projects&nbsp;</span></h2>
          <div className="flex-1 border-b border-solid border-gray-300"></div>
        </div>

        <div className="p-4">
          <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
            {filteredProjects.map((project, index) => (
              <motion.li
                key={index}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.8, delay: index * 0.4 }}
              >
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                />
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center p-5">
          <button type="button" onClick={handleButton} className={`text-white bg-[#50dfa8] font-semibold rounded-full text-lg max-md:text-sm px-5 py-2.5 text-center mr-4 ${button ? 'hidden' : ''}`}>More</button>
        </div>
      </section>
    </div>
  );
};

export default ProjectsSection;
