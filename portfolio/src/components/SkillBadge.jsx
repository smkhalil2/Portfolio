import { useState } from "react";

const SkillBadge = ({ name, logo, color }) => {
  // console.log(color)

  const [isFocused, setFocus] = useState(false);
  return (
    <div
      className={`badge flex text-[#1E1E1E] md:w-auto w-36 h-fit px-4 py-2 m-2 rounded 
            hover:cursor-default hover:scale-[1.1] hover:duration-300 items-center justify-center`}
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
      style={{ backgroundColor: isFocused ? color : "white" }}
    >
      <div className="mr-2">{name}</div>
      {/* Specific styling for HTML or logo is bigger than CSS and looks weird */}
      <img
        className={`w-6 h-6 ${name === "HTML" && "w-[19px] h-[19px]"}`}
        alt={`${name}-icon`}
        src={logo}
        style={{filter: 'invert(8%) sepia(5%) saturate(157%) hue-rotate(314deg) brightness(190%) contrast(92%)'}}
      />
    </div>
  );
};

export default SkillBadge;
