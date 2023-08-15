// Taken from https://www.freecodecamp.org/news/how-to-build-a-portfolio-site-with-nextjs-tailwindcss/
// RoughNotation API https://github.com/rough-stuff/rough-notation

import React from "react";
import { RoughNotation } from "react-rough-notation";

export const Highlight = ({ type, color , iterations, children, durationScaler }) => {
  // Change the animation duration depending on length of text we're animating (speed = distance / time)
  const animationDuration = Math.floor(durationScaler * children.length);

  return (
    <RoughNotation
      type={type}
      multiline={true}
      padding={[0, 2]}
      iterations={(iterations > 1) ? iterations : 1}
      animationDuration={animationDuration}
      color={color}
    >
      {children}
    </RoughNotation>
  );
};