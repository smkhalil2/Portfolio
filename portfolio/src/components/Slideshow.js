//adapted from codepen https://codepen.io/bnsddk/pen/dyXaNod
import React, { useState, useEffect, useRef } from "react";
import { slideImages } from "./data";

const delay = 4000;

export default function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slideImages.map((src, index) => (
          <div key={src} className="slide flex flex-col items-center">
            <div
             className='w-full h-full rounded-md overflow-hidden bg-center bg-cover'
             style={{backgroundImage: `url(${slideImages[index].src})`}}
            >
            </div>
            <div className='flex justify-center m-4 text-[#90fcef]'>
            <p>{slideImages[index].caption}</p>
            </div>
          </div>
          //   <div
          //     className="slide"
          //     key={index}
          //     style={{ backgroundColor }}
          //   ></div>
        ))}
      </div>

      <div className="slideshowDots">
        {slideImages.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

// ReactDOM.render(<Slideshow />, document.getElementById("App"));
