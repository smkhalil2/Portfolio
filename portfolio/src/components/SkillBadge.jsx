import { useState, useContext } from "react";
import ThemeContext from "@/theme/ThemeContext";
import Image from "next/image";

const SkillBadge = ({ darkMode, name, logo, color }) => {
  const { dark } = useContext(ThemeContext);
  // console.log(color)

  const [isFocused, setFocus] = useState(false);
  return (
    <div
      className={`badge flex text-[#574ecc] hover:text-[#0f0f0f] dark:text-[#ededf0] md:w-auto w-36 h-fit px-4 py-2 m-2 rounded-full 
            hover:cursor-default  items-center justify-center`}
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
      style={{ 
        border: isFocused ? `solid ${dark ? '#e1e4f0' : 'transparent'}` : `solid ${dark ? '#e1e4f0' : '#574ecc'}`,
              boxShadow: isFocused ? `${dark ? `0px 0px 12px ${color}` : ``}`: '',
              backgroundColor: isFocused ? `${dark ? '': `${color}` }`: ''
               }}
    >
      <div className="mr-2">{name}</div>
      {/* Specific styling for HTML or logo is bigger than CSS and looks weird */}
      <Image
        priority
        width={800} 
        height={800}
        className={`w-6 h-6 ${name === "HTML" && "w-[19px] h-[19px]"}`}
        alt={`${name}-icon`}
        src={logo}
        style={{filter: isFocused && !dark ? 'invert(0%) sepia(57%) saturate(1893%) hue-rotate(23deg) brightness(86%) contrast(88%)' : `${dark ? 'invert(90%) sepia(5%) saturate(157%) hue-rotate(314deg) brightness(190%) contrast(92%)' : 'invert(35%) sepia(19%) saturate(6191%) hue-rotate(229deg) brightness(82%) contrast(94%)'}`}}
      />
    </div>
  );
};

export default SkillBadge;
