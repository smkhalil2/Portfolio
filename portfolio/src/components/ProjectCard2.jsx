import Image from "next/image";
import Link from "next/link";
import { InView } from "react-intersection-observer";
import { useState } from "react";
import ProjectDescription from "./ProjectDescription";

const learnMoreIcon = (
  <svg
    className="ml-4"
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

const ProjectCard = ({
  title,
  description,
  category,
  img,
  img_classes,
  slides,
  skills,
  tech,
  link,
}) => {
  //   const [containerRef, isVisible] = useElementOnScreen({
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 1.0,
  //   });

  const [showBack, toggleSide] = useState(false);

  return (
    <div className="flex w-[100%] p-8 justify-center">
      {/* {" "} */}
      {/** remove flex-col later  */}
      {/* <ProjectDescription isOpen={true} title={title} description={description} skills={skills} tech={tech} link={link} img={img} slides={slides} onClose={toggleSide}/> */}
      <InView className="flex justify-center w-[100%]" threshold={0}>
        {({ inView, ref, entry }) => (
          <div
            ref={ref}
            className="group h-[400px] lg:w-[850px] w-[350px]  [perspective:1000px]"
          >
            <div className="relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
              <div className="absolute inset-0">
                <div
                  className={`flex w-full h-full justify-center rounded-xl
                    bg-gradient-to-br from-[#29317875] to-[#00000050] dark:from-[#293178] dark:to-[#F5F5F580]
                    ${inView ? "motion-safe:animate-fadeIn" : ""}`}
                >
                  <div className="flex w-full m-6 p-8 justify-between items-center bg-slate-100">
                    <h1 className="text-slate-900 text-4xl font-bold w-1/2 z-20">
                      {title}
                    </h1>
                    {/* Image */}
                    <Image
                      className={`${img_classes} w-[50%] z-5`}
                      src={img}
                      width={1200}
                      height={1200}
                    />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-[#20212b]/95  text-center text-slate-200 [transform:rotateX(180deg)] [backface-visibility:hidden]">
                <ProjectDescription
                  title={title}
                  category={category}
                  description={description}
                  skills={skills}
                  tech={tech}
                  link={link}
                  img={img}
                  slides={slides}
                />
              </div>
            </div>
          </div>
        )}
      </InView>
    </div>
  );
};

export default ProjectCard;
