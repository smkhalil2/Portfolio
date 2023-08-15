import Slideshow from "./Slideshow";
import { RoughNotationGroup } from "react-rough-notation";
import { Highlight } from "./Highlight";
const About = () => {
  const durationScaler = 50;

  return (
    <div id='about' className="px-16 py-8 bg-[#0F0F0F]">
    {/* <div className='px-16'> */}
      {/* About text and image slide show */}
      <h1 className='mt-8 ml-8 text-3xl font-bold'>About </h1>
      <div className='flex lg:flex-row flex-col w-full lg:ml-8 ml-2 '>
            <div className='w-full h-48 mt-8 lg:p-0 p-4 lg:overflow-visible overflow-auto rounded'>
            <RoughNotationGroup show={false}>
                <p>
                I am a skilled <Highlight type='underline' color='#90fcef' durationScaler={durationScaler}>web designer</Highlight> and <Highlight type='underline' color='#90fcef' durationScaler={durationScaler}>software developer</Highlight> with 
                3 years experience as an IT Systems Specialist. I
                excell at applying my creativity towards designing and building engaging user interfaces that enhance the user experience.
                I studied at the <Highlight type='box' color='#e84848' iterations={2} durationScaler={durationScaler}>University of Maryland, College Park </Highlight>
                where I received my bachelor&#39;s degree in <Highlight type='box' color='#fff654' iterations={2} durationScaler={durationScaler}>Computer Science</Highlight> in 2022. I took courses
                in human centered <Highlight type='underline' color='#90fcef' durationScaler={durationScaler}>UI/UX design</Highlight>, <Highlight type='underline' color='#90fcef' durationScaler={durationScaler}>game development</Highlight>, 
                and <Highlight type='underline' color='#90fcef' durationScaler={durationScaler}>3D graphics</Highlight>. I also explored bioinformatic algorithms
                and advanced data structures.
                </p>
                <br/>
                <p>
                As an artist I perform music and sketch cartoons and portraits. I'm learning to animate in 
                Blender with Grease Pencil. To support my love of TV and movies I took animation, sreenwriting, filmmaking, 
                and stage acting electives at UMD. In my free time I enjoy kayaking, playing D&D and video games, and traveling.
                </p>
                </RoughNotationGroup>
            </div>
            {/* Image */}
            <div className="lg:scale-[0.9] scale-[0.7] w-full h-full">
                <Slideshow />
            </div>
        </div>
    </div>
  );
};

export default About;
