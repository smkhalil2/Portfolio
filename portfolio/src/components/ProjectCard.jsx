import Link from "next/link";
import { useState } from "react";
import { RoughNotationGroup } from "react-rough-notation";
import { Highlight } from "./Highlight";

const ProjectCard = ({ title, description, img, link }) => {
  const [focus, setFocus] = useState(false);

  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
    <div
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
      className="md:m-4 m-2 ml-4 flex flex-col md:w-64 md:h-40 w-80 h-18 rounded-md overflow-hidden hover:scale-[1.1] hover:duration-700
        bg-cover  items-center justify-center"
        style={{
            backgroundImage: `url(${img})`
        }}
    >
      <div className="flex flex-col w-full h-full p-4  backdrop-blur-sm hover:backdrop-blur-none hover:cursor-pointer hover:duration-1000 justify-center">
        <RoughNotationGroup show={focus}>
            <Highlight color="#18044a80" type='highlight' durationScaler={180}>
            <h1 className="text-xl font-extrabold whitespace-nowrap">{title}</h1>
            <h2 className="text-xs font-bold text-[#90fcef]">{description}</h2>
            </Highlight>
        </RoughNotationGroup>

        {/* <Link
          className=""
          target="_blank"
          href={link}
          rel="noopener noreferrer"
        /> */}
      </div>
    </div>
    </Link>
  );
};

export default ProjectCard;
