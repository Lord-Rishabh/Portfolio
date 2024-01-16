"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";



// Project Section :
const ProjectsSection = () => {

  const [projectsData, setProjectsData] = useState([
    {
      id: 1,
      title: "React Portfolio Website",
      description: "Project 1 description",
      image: "/images/dev.avif",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "Potography Portfolio Website",
      description: "Project 2 description",
      image: "/images/dev.avif",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "E-commerce Application",
      description: "Project 3 description",
      image: "/images/dev.avif",
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
      title: "Food Ordering Application",
      description: "Project 4 description",
      image: "/images/dev.avif",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "React Firebase Template",
      description: "Authentication and CRUD operations",
      image: "/images/dev.avif",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 6,
      title: "Full-stack Roadmap",
      description: "Project 5 description",
      image: "/images/dev.avif",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },];
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
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 p-3">
        My Projects
      </h2>

      <div className="p-4">
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
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
        <button type="button" onClick={handleButton} className={ `text-white bg-[#50dfa8] font-semibold rounded-full text-lg max-md:text-sm px-5 py-2.5 text-center mr-4 ${button ? 'hidden' : ''}`}>More</button>
      </div>
    </section>
  );
};

export default ProjectsSection;
