"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { LazyMotion, domAnimation } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const TAB_DATA = [
  {
    title: "Education",
    id: "Education",
    content: (
      <div className="lg:flex ">

        <div className='max-lg:hidden'>
          <Image src="/images/college.png" width={120} height={100} alt="about me image" />
        </div>
        <div className="px-5">
          <h1 className="text-base lg:text-xl font-bold py-1 ">
            Institute of Engineering & Technology, DAVV</h1>
          <div className="text-base lg:text-lg">

            <p>B.E. in Electronics and Telecommunication Engineering</p>
            <p>October(2021) - Present</p>
            <p>CGPA : 8.08</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Achievements",
    id: "Achievements",
    content: (
      <div className="text-base lg:text-lg font-medium">

        <a href="https://www.codechef.com/users/rishabh_080703" target="_blank" rel="noopener noreferrer" className="flex items-center pb-1">
          • 3 star at CodeChef
          <div className="pl-2">
            <FaExternalLinkAlt />
          </div>
        </a>
        <a href="https://leetcode.com/rishabh_080703/" target="_blank" rel="noopener noreferrer" className="flex items-center">
          • Max. rating(1610) on LeetCode
          <div className="pl-2">
            <FaExternalLinkAlt />
          </div>
        </a>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="text-base lg:text-lg font-medium">

        <a href="https://www.holopin.io/userbadge/cl9egd372380509jrgpv7q4td" target="_blank" rel="noopener noreferrer" className="flex items-center pb-1">
          • Hacktoberfest - Global Event Promoting Open-Source
          <div className="pl-2">
            <FaExternalLinkAlt />
          </div>
        </a>
        <a href="https://unstop.com/certificate-preview/5c59a45a-f260-4c03-8472-7ee730ad9180" target="_blank" rel="noopener noreferrer" className="flex items-center">
          • Xiaomi Ode2Code 3.0 Finalist
          <div className="pl-2">
            <FaExternalLinkAlt />
          </div>
        </a>
      </div>
    ),
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [tab, setTab] = useState("Education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div className="pt-10" id="#about">

      <LazyMotion features={domAnimation}>
        <section className="text-white" id="about">
          <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">

            <div className="rounded-lg ">
              <Image src="/images/laptop.png" width={600} height={600} alt="about me image" />
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
                  working with C++, JavaScript, React,  Node.js,NextJs, Express, SQL,
                  HTML, CSS, and more. My problem-solving skills are not confined to the screen, they extend to finding creative and elegant solutions that go beyond the ordinary. Committed to continuous learning, I stay at the forefront of technology trends. Let's transform your ideas into reality and code the future together.
                </p>
              </div>
              <div className="flex flex-row justify-start mt-8 ">
                <TabButton
                  selectTab={() => handleTabChange("Education")}
                  active={tab === "Education"}
                >
                  {" "}
                  <span className={`text-base lg:text-lg ${tab === "Education" ? 'border-[#3182ce] border-2 rounded-lg p-1 pt-0.5' : ' '}`}>

                    Education
                  </span>
                  {" "}
                </TabButton>
                <TabButton
                  selectTab={() => handleTabChange("Achievements")}
                  active={tab === "Achievements"}
                >
                  {" "}
                  <span className={`text-base lg:text-lg ${tab === "Achievements" ? 'border-[#3182ce] border-2 rounded-lg p-1 pt-0.5' : ' '}`}>

                    Achievements
                  </span>
                  {" "}
                </TabButton>
                <TabButton
                  selectTab={() => handleTabChange("certifications")}
                  active={tab === "certifications"}
                >
                  {" "}
                  <span className={`text-base lg:text-lg ${tab === "certifications" ? 'border-[#3182ce] border-2 rounded-lg p-1 pt-0.5' : ' '}`}>

                    Certifications
                  </span>
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
    </div>

  );
};

export default AboutSection;
