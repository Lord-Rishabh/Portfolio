"use client";
import { WelcomeSection } from "./Components/Introduction/page";
import Navbar from "./Components/Navbar/page";
import AboutMe from "./Components/About Me/page";
import ProjectsSection from "./Components/Projects/page";
import { TechnologiesSection } from "./Components/Technologies/page";

export default function Page() {
    return (
        <div className="bg-[#232332] font-sans overflow-hidden">
            <Navbar />
            <div className="container-md p-9 bg-[#232332] h-[91.5vh] max-md:overflow-y-auto overflow-hidden">
                <WelcomeSection />
            </div>
            <AboutMe/>
            <ProjectsSection/>
            <TechnologiesSection/>
        </div>
    );
}
