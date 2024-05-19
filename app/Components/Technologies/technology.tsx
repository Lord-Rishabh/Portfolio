import { AiFillHtml5, AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { DiCss3, DiVisualstudio } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaJava, FaNodeJs } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { BsBootstrap } from "react-icons/bs";
import { TbBrandNextjs, TbBrandTailwind, TbBrandCpp, TbFileTypeSql  } from "react-icons/tb";
import { SiExpress, SiMongodb, SiPostman, SiJupyter, SiAnaconda, SiMysql} from "react-icons/si";

export const TECHNOLOGIES = [
	{
		category: "Programming Languages",
		items: [{ name: "C++", icon: <TbBrandCpp size={37} /> },
		{ name: "Java", icon: <FaJava size={37} /> }, 
		{ name: "JavaScript", icon: <IoLogoJavascript size={37} /> }, ]
	},
	{
		category: "Web Development",
		items: [
			{ name: "HTML", icon: <AiFillHtml5 size={37} /> },
			{ name: "CSS", icon: <DiCss3 size={37} /> },
			{ name: "React", icon: <FaReact size={37} /> },
			{ name: "Next", icon: <TbBrandNextjs size={37} /> },
			{ name: "ExpressJs", icon: <SiExpress size={37} /> },
			{ name: "NodeJs", icon: <FaNodeJs size={37} /> },
			{ name: "Bootstrap", icon: <BsBootstrap size={37} /> },
			{ name: "Tailwind CSS", icon: <TbBrandTailwind size={37} /> },
			
		]
	},
	{
		category: "Databases",
		items: [
			{ name: "SQL", icon: <TbFileTypeSql  size={37} /> },
			{ name: "MySQL", icon: <SiMysql  size={37} /> },
			{ name: "MongoDB", icon: <SiMongodb  size={37} /> },
		]
	},
	{
		category: "Other tools",
		items: [
			{ name: "Github", icon: <AiFillGithub size={37} /> },
			{ name: "Gitlab", icon: <AiFillGitlab size={37} /> },
			{ name: "Postman", icon: <SiPostman size={37} /> },
			{ name: "Vercel", icon: <IoLogoVercel size={37} /> },
			{ name: "VsCode", icon: <DiVisualstudio size={37} /> },
			{ name: "Netlify", icon: <SiNetlify size={37} /> }
		]
	}
];
