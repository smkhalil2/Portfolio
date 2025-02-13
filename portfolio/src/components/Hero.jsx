import Image from "next/image";
import Skills from "./Skills";
import Link from "next/link";
import { useState } from "react";

const learnMoreIcon = (
  <svg
    className="ml-3"
    width="24"
    height="28"
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

const Hero = ({ darkMode }) => {
  // const [isFocused, setFocus] = useState(false);
  return (
    <div className="flex flex-col mb-16">
      <div className="flex flex-row items-center justify-evenly h-96 bg-[url('/images/BackgroundDots.png')] dark:bg-[url('/images/darkBackgroundDots5.png')] lg:bg-contain bg-cover">
        {/* <div className="flex lg:flex-row flex-col items-center"> */}
        <div  className="flex flex-col md:mr-96 lg:px-2 px-8 lg:mt-0 w-auto">
          <h2 id="text" className="font-semibold text-4xl text-[#000000] dark:text-[#F5F5F5]">
            Hi, I&#39;m Shadi!
          </h2>

          <div id="text" className="flex flex-col text-2xl text-[#000000] dark:text-[#F5F5F5] leading-relaxed">
            I&#39;m a Web Developer from
            <div id="text" className="flex flex-row whitespace-nowrap">
              Washington, DC.
              <Link
                className="flex pr-4 py-4 h-8 w-auto text-xl rounded-lg
              items-center whitespace-nowrap ml-2
              border-2 border-transparent
              bg-[#000000] text-[#F5F5F5] 
              dark:bg-[#f5f5f5] dark:text-[#000000]
              hover:opacity-60 hover:duration-300"
                href="/about"
              >
                {learnMoreIcon}
                Learn More
                
              </Link>
              <Link
                className="flex pr-4 py-4 h-8 w-auto text-xl rounded-lg
              items-center whitespace-nowrap ml-2
              border-2 border-transparent
              bg-[#000000] text-[#F5F5F5] 
              dark:bg-[#f5f5f5] dark:text-[#000000]
              hover:opacity-60 hover:duration-300"
                href="https://shadikhalil.webflow.io"
              >
                UX Portfolio

              </Link>
            </div>
          </div>
        </div>

        {/* <Image
          className="md:flex xl:w-[15%] md:w-[18%] hidden"
          width={1000}
          height={1200}
          src="/images/profile-pic3.png"
          alt="Shadi's personal headshot"
        /> */}
        {/* Skill Badges */}
        <div className="absolute inset-y-[22rem] h-20 w-auto z-40 justify-between">
          <Skills darkMode={darkMode} />
        </div>
      </div>
      {/* Skill Badges
      <div className="px-8">
        <Skills darkMode={darkMode} />
      </div> */}
    </div>
  );
};

export default Hero;
