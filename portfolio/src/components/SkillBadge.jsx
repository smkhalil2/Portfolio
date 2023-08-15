import { useState } from "react";

const SkillBadge = ({ name, logo, color }) => {
  // console.log(color)

  const [isFocused, setFocus] = useState(false);
  return (
    <div
      className={`badge flex text-[#ededf0] md:w-auto w-36 h-fit px-4 py-2 m-2 rounded-full 
            hover:cursor-default hover:scale-[1.1] hover:duration-300 items-center justify-center`}
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
      style={{  boxShadow: isFocused ? `0px 0px 10px ${color}`: 'none',
                border: isFocused ? `solid ${color}` : `solid #ededf0`}}
    >
      <div className="mr-2">{name}</div>
      {/* Specific styling for HTML or logo is bigger than CSS and looks weird */}
      <img
        className={`w-6 h-6 ${name === "HTML" && "w-[19px] h-[19px]"}`}
        alt={`${name}-icon`}
        src={logo}
        style={{filter: 'invert(90%) sepia(5%) saturate(157%) hue-rotate(314deg) brightness(190%) contrast(92%)'}}
      />
    </div>
  );
};

export default SkillBadge;
