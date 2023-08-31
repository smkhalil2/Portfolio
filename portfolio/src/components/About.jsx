import Slideshow from "./Slideshow";
import { RoughNotationGroup } from "react-rough-notation";
import { Highlight } from "./Highlight";
import { slideImages } from "./data";

const About = () => {
  const durationScaler = 50;

  return (
    <div id='about' className="lg:px-16 lg:py-8 p-4 dark:bg-[#0F0F0F] text-[#000000] dark:text-[#F0F0F0]">
    {/* <div className='px-16'> */}
      {/* About text and image slide show */}
      <h1 className='mt-8 ml-8 text-3xl font-bold'>About </h1>
      <div className='flex lg:flex-row flex-col w-full lg:ml-8 ml-2 '>
            <div className='w-full h-auto mt-8 lg:p-0 p-4 rounded'>
              {/* Rough Notation broken on small screens */}
            <RoughNotationGroup show={true}>
                <p>
                I am a skilled <Highlight type='underline' color='#1d2cb3' durationScaler={durationScaler}>web developer</Highlight> with 
                3 years experience as an IT Systems Specialist. I
                excel at applying my creativity towards designing and building engaging user interfaces that enhance the user experience.
                I studied at the <Highlight type='box' color='#e84848' iterations={2} durationScaler={durationScaler}>University of Maryland, College Park </Highlight>
                where I received my bachelor&#39;s degree in <Highlight type='box' color='#fff654' iterations={2} durationScaler={durationScaler}>Computer Science</Highlight> in 2022. I took courses
                in human centered <Highlight type='underline' color='#1d2cb3' durationScaler={durationScaler}>UI/UX design</Highlight>, <Highlight type='underline' color='#1d2cb3' durationScaler={durationScaler}>game development</Highlight>, 
                and <Highlight type='underline' color='#1d2cb3' durationScaler={durationScaler}>3D graphics</Highlight>. I also explored bioinformatic algorithms
                and advanced data structures.
                </p>
                <br/>
                <p>
                A lifelong artist, I play music, and sketch cartoons and portraits. To support my love of TV and movies I took animation, screenwriting, filmmaking, 
                and stage acting electives at UMD and I&#39;m learning to animate in 
                Blender with Grease Pencil. In my free time I enjoy kayaking, playing D&D and video games, and traveling.
                </p>
                </RoughNotationGroup>
            </div>
            {/* Image */}
            <div className="lg:scale-[0.9] scale-[0.7] w-full h-full">
                <Slideshow slideImages={slideImages}/>
            </div>
        </div>
    </div>
  );
};

export default About;
