import { useState, useContext } from "react";
import ThemeContext from "@/theme/ThemeContext";
import Image from "next/image";

const SkillBadge = ({ name, logo, color, img_classes }) => {
  const { dark } = useContext(ThemeContext);
  // console.log(color)

  const [isFocused, setFocus] = useState(false);
  return (
    <div
      className={`flex w-auto h-auto p-3 lg:m-4 m-1 rounded-full 
              items-center justify-center shadow-inner shadow-gray-800 dark:shadow-black`}
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
      style={{ 
      //   border: isFocused ? `solid ${dark ? '#e1e4f0' : 'transparent'}` : `solid ${dark ? '#e1e4f0' : '#000000'}`,
      //         boxShadow: isFocused ? `${dark ? `0px 0px 12px ${color}` : ``}`: '',
              backgroundColor:  `${color}` 
               }}
    >
      {/* <div className="mr-2">{name}</div> */}
      {/* Specific styling for HTML or logo is bigger than CSS and looks weird */}
      <Image
        priority
        width={1000} 
        height={1000}
        // className={`w-8 h-8`}
        className={`w-6 h-6 ${img_classes}`}
        alt={`${name}-icon`}
        src={logo}
        style={{filter: 'invert(90%) sepia(5%) saturate(157%) hue-rotate(314deg) brightness(190%) contrast(92%)'}}
      />
    </div>
  );
};

export default SkillBadge;
