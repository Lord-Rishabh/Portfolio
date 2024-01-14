"use client";
import { WelcomeSection } from "./Components/Introduction/page";
import Navbar from "./Components/Navbar/page";
import AboutMe from "./Components/About Me/page";

export default function Page() {
    return (
        <div className="bg-[#232332]">
            <Navbar />
            <div className="container-md p-9 bg-[#232332] h-[91.5vh] max-md:overflow-y-auto overflow-hidden">
                <WelcomeSection />
            </div>
            <AboutMe/>
        </div>
    );
}
