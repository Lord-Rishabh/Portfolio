"use client";

import { useEffect, useState, useRef } from "react";
import Typewriter from 'typewriter-effect';
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const WelcomeSection = () => {
	const ref = useRef(null);
	const introRef = useRef(null);
	const isInView = useInView(ref, { once: true });

	let [count, setCount] = useState(0);

	useEffect(() => {
		let interval = setInterval(() => {
			setCount(count + 1);

			if (count === 3) {
				setCount(0);
			}
		}, 2000);

		return () => clearInterval(interval);
	}, [count]);

	return (
		<LazyMotion features={domAnimation}>
			<section id="intro" className="section" ref={introRef}>
				<div className="grid grid-cols-1 md:grid-cols-[1fr_0.5fr] lg:grid-cols-[1fr_0.7fr] gap-4 items-center lg:p-12 h-[92vh] ">

					<div className="py-5 md:py-10 text-white">
						<h1
							ref={ref}
							className="text-6xl max-lg:text-5xl max-md:text-4xl font-bold"
							style={{
								transform: isInView ? "none" : "translateX(-200px)",
								opacity: isInView ? 1 : 0,
								transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
							}}
						>
							<p>
								Hi, I&apos;m <span className="text-[#3182ce]">Rishabh</span> a <span className="text-[#3182ce]">passionate</span> software developer.
							</p>

						</h1>

						<div className="mt-3 py-8 text-[#50dfa8] relative flex flex-col overflow-hidden font-bold">
							<div className="text-5xl max-lg:text-4xl max-md:text-4xl">
								<Typewriter
									options={{
										strings: ['Frontend Developer', 'Backend Developer', 'Competitive Coder'],
										autoStart: true,
										loop: true,
										delay: 50,
										deleteSpeed: 40,
									}}
								/>
							</div>
						</div>

						<p
							ref={ref}
							className="mt-3 mb-10 text-gray-500 text-xl "
							style={{
								transform: isInView ? "none" : "translateX(-200px)",
								opacity: isInView ? 1 : 0,
								transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
							}}
						>
							Eager to embrace new technologies and challenges, I bring versatile skill set to create innovative and efficient solutions. Let's build the future of the web together.
						</p>
						<div className="flex items-center"
							ref={ref}
							style={{
								transform: isInView ? "none" : "translateY(50px)",
								opacity: isInView ? 1 : 0,
								transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
							}}
						>
							<Link href="/cv"><button type="button" className="text-white bg-[#50dfa8] font-semibold rounded-full text-lg max-md:text-sm px-5 py-2.5 text-center mr-4 ">Get my CV</button></Link>
							
							<a
								href="https://github.com/your-github-username"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white pr-4"
							>
								<FaGithub size={32} />
							</a>
							<a
								href="https://www.linkedin.com/in/your-linkedin-profile"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white"
							>
								<FaLinkedin size={32} />
							</a>
						</div>
					</div>
					<Image className='w-auto xl:h-4/5 xl:absolute bottom-0 right-20 max-md:order-first' src='/images/photo.png' height={200} width={300} alt='cart Image' />
				</div>
			</section>
		</LazyMotion>
	);
}
export default WelcomeSection