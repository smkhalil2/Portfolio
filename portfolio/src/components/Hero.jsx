import Image from "next/image";
import Skills from "./Skills";

const Hero = ({darkMode}) => {
  return (
    <div className="flex flex-col">
      <div className="flex lg:flex-row flex-col items-center bg-[url('/images/Spider-Gwen-PhotoRoom.png')] bg-cover">
    {/* <div className="flex lg:flex-row flex-col items-center"> */}
      <div className="flex flex-col lg:px-28 px-8 lg:mt-0 mt-8 w-[100%] ">
        <h2 className="font-extrabold text-4xl text-[#90fcef]">SHADI KHALIL</h2>
        <p className='text-xl text-[#F0F0F0]'>
          Software Developer, UI/UX Designer, Animator, Artist.
        </p>
      </div>
      <div className='flex justify-center lg:mx-8'>
        <Image
          width={1200}
          height={1200}
          src="/images/profile-pic.jpg"
          className="lg:w-[65%] w-[50%] my-10 rounded-full ring-8 ring-[#f0f0f0] dark:ring-[#0F0F0F] hover:ring-offset-4 hover:ring-offset-[#574ecc] dark:hover:ring-offset-[#90fcef] "
          alt="Shadi's personal headshot"
        />
      </div>
    </div>
      {/* Skill Badges */}
      <div className="mt-4 p-8">
      <Skills darkMode={darkMode}/>
      </div>
    </div>
    
  );
};

export default Hero;
