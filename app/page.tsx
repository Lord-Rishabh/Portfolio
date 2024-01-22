"use client";
import WelcomeSection from "./Components/Introduction/page";
import Navbar from "./Components/Navbar/page";
import AboutMe from "./Components/About Me/page";
import ProjectsSection from "./Components/Projects/page";
import TechnologiesSection from "./Components/Technologies/page";
import Footer from "./Components/Footer/page";

export default function Page() {
    return (
        <div className="bg-[#232332] font-sans">
            <Navbar />
            <div className="container-md p-9 bg-[#232332] max-md:overflow-y-auto overflow-hidden pb-13">
                <WelcomeSection />
            </div>
            <div className="pt-12 overflow-y-auto">
                {/* Add overflow-y-auto to allow scrolling in this section */}
                <AboutMe />
            </div>
            <ProjectsSection />
            <div className="overflow-hidden p-5">
                <TechnologiesSection />
            </div>
            <Footer/>
        </div>
    );
}
