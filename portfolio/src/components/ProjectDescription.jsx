import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import Slideshow from "./Slideshow";

const learnMoreIcon = (
  <svg
    className="ml-3"
    width="18"
    height="24"
    viewBox="0 0 46 57"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15 13H28C29.6569 13 31 14.3431 31 16V41C31 42.6569 29.6569 44 28 44H15C13.3431 44 12 42.6569 12 41V31.4211H9V41C9 44.3137 11.6863 47 15 47H28C31.3137 47 34 44.3137 34 41V16C34 12.6863 31.3137 10 28 10H15C11.6863 10 9 12.6863 9 16V26.2281H12V16C12 14.3431 13.3431 13 15 13Z"
      fill="currentColor"
      fill-opacity="0.95"
    />
    <path
      d="M4 28C3.44772 28 3 28.4477 3 29C3 29.5523 3.44772 30 4 30L4 28ZM22.7071 29.7071C23.0976 29.3166 23.0976 28.6834 22.7071 28.2929L16.3431 21.9289C15.9526 21.5384 15.3195 21.5384 14.9289 21.9289C14.5384 22.3195 14.5384 22.9526 14.9289 23.3431L20.5858 29L14.9289 34.6569C14.5384 35.0474 14.5384 35.6805 14.9289 36.0711C15.3195 36.4616 15.9526 36.4616 16.3431 36.0711L22.7071 29.7071ZM4 30L22 30V28L4 28L4 30Z"
      fill="currentColor"
      fill-opacity="0.95"
    />
  </svg>
);
const ProjectDescription = ({
  title,
  description,
  category, 
  skills,
  tech,
  link,
  slides,
}) => {
  return (
    <Fragment>
     
        <div className="flex lg:flex-col-2 lg:flex-nowrap flex-wrap p-6 rounded-xl h-[400px] overflow-y-auto text-white lg:divide-x-2 lg:divide-y-0 divide-y-2 divide-slate-700 justify-evenly ">
          {/* column one - Title, tech, skills/service */}
          <div className="flex flex-col lg:w-[30%] text-left">
            <h1 className="font-extrabold text-xl">{title}</h1>
            <h2>{category}</h2> 
            <br/>
                        {/* Button */}
                        <Link
              className="flex items-center text-sm rounded-xl h-fit
                py-1 w-24 text-black bg-white  hover:bg-[#ffffff90]
                hover:opacity-60"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {learnMoreIcon}
              Explore
            </Link>
            <br/>
            <h1 className="font-bold text-lg">Skills</h1>
            <div className="flex flex-wrap">
              {skills.map((skill) => (
                <div key={skill} className="flex m-1 text-xs text-slate-100 bg-slate-700 px-2 p-1 w-fit rounded-md items-center hover:bg-slate-800">
                  {skill}
                </div>
              ))}
            </div>
            <br/>
            <h1 className="font-bold text-lg">Technologies</h1>
            <div className="flex flex-wrap">
              {tech.map((skill) => (
                <div key={skill} className="flex m-1 text-xs text-slate-100 bg-slate-700 px-2 p-1 w-fit rounded-md items-center hover:bg-slate-800">
                  {skill}
                </div>
              ))}
            </div>
            <br/>
          </div>
          {/* column two - img slide show, optional video, description and context */}
          <div className="flex flex-col lg:w-[75%] w-full items-center lg:overflow-y-scroll p-4">
            {/* <div className="flex text-white scale-70  h-[50%] " > */}
              {/* <Slideshow slideImages={slides} /> */}
              <Image alt={`${title} Image`} className='scale-75' width={1200} height={1200} src={slides[0].src} />
            {/* </div> */}
            <div className='whitespace-pre-line flex text-left'>{description}</div>
            <br/>
            {/* Button
            <Link
              className="flex items-center text-lg rounded-xl h-fit
                py-1 w-28 text-black bg-white  hover:bg-[#ffffff90]
                hover:opacity-60"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {learnMoreIcon}
              Explore
            </Link> */}
          </div>
        </div>
   
    </Fragment>
  );
};

export default ProjectDescription;
