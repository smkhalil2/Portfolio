import Skills from "./Skills";

const Hero = () => {
  return (
    <div className="flex flex-col">
    <div className="flex lg:flex-row flex-col items-center bg-[url('/images/Spider-Gwen-PhotoRoom.png')] bg-cover backdrop-blur-sm">
      <div className="flex flex-col lg:px-28 px-52 lg:mt-0 mt-8 w-[150%] ">
        <h2 className="font-extrabold text-4xl text-[#90fcef]">Hi, I&#39;m Shadi</h2>
        <p className='text-xl'>
          I combine my skills as a software developer with my creativity to design and build web content, applications, and games!
        </p>
      </div>
      <div className='mr-4'>
        <img
          src="/images/profile-pic.jpg"
          className="w-[55%] lg:ml-32 ml-24 my-10 rounded-full ring-8 ring-[#0F0F0F] hover:ring-offset-4 hover:ring-offset-[#90fcef] items-center"
          alt="Shadi's personal headshot"
        />
      </div>
    </div>
      {/* Skill Badges */}
      <div className="mt-4 px-8">
      <Skills />
      </div>
    </div>
    
  );
};

export default Hero;
