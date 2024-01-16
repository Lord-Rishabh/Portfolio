"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { LazyMotion, domAnimation } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <LazyMotion features={domAnimation}>
      <section className="text-white" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">

          <div className="rounded-lg ">
            <Image src="/images/laptop.avif" width={600} height={600} alt="about me image" />
          </div>

          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">

            <div className=" flex items-center">
              <h2 className="text-4xl font-bold text-white 
          mb-4 ">About <span className="text-3xl text-[#50dfa8]">Me&nbsp;</span></h2>
              <div className="flex-1 border-b border-solid border-gray-300"></div>
            </div>
            <div className="flex items-center"
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }}
            >
              <p className="text-base lg:text-lg pt-4">
                I am a full stack web developer with a passion for creating
                interactive and responsive web applications. I have experience
                working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
                Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
                looking to expand my knowledge and skill set. I am a team player and
                I am excited to work with others to create amazing applications.
              </p>
            </div>
            <div className="flex flex-row justify-start mt-8 ">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                <div className={`${tab === "skills" ? 'border-[#3182ce] border-2 rounded-lg p-1' : ' '}`}>

                  Skills
                </div>
                {" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                <div className={`${tab === "education" ? 'border-[#3182ce] border-2 rounded-lg p-1' : ' '}`}>

                  Education
                </div>
                {" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                {" "}
                <div className={`${tab === "certifications" ? 'border-[#3182ce] border-2 rounded-lg p-1' : ' '}`}>

                  Certifications
                </div>
                {" "}
              </TabButton>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab)?.content}
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default AboutSection;
